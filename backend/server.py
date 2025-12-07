from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str = ""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def send_contact_email(contact: ContactForm):
    """Send contact form email"""
    try:
        # Get email configuration from environment
        email_host = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
        email_port = int(os.environ.get('EMAIL_PORT', 587))
        email_username = os.environ.get('EMAIL_USERNAME')
        email_password = os.environ.get('EMAIL_PASSWORD')
        email_from = os.environ.get('EMAIL_FROM', email_username)
        email_to = os.environ.get('EMAIL_TO', 'ukworkconnect@gmail.com')
        
        # Check if email credentials are configured
        if not email_username or not email_password:
            logger.error("Email credentials not configured")
            raise HTTPException(
                status_code=500,
                detail="Email service not configured. Please contact administrator."
            )
        
        # Create message
        message = MIMEMultipart("alternative")
        message["Subject"] = f"New Contact Form Submission from {contact.name}"
        message["From"] = email_from
        message["To"] = email_to
        message["Reply-To"] = contact.email
        
        # Create HTML email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="margin: 20px 0;">
                        <p><strong style="color: #059669;">Name:</strong> {contact.name}</p>
                        <p><strong style="color: #059669;">Email:</strong> <a href="mailto:{contact.email}">{contact.email}</a></p>
                        <p><strong style="color: #059669;">Phone:</strong> <a href="tel:{contact.phone}">{contact.phone}</a></p>
                    </div>
                    <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #059669; border-radius: 5px;">
                        <p style="margin: 0;"><strong style="color: #059669;">Message:</strong></p>
                        <p style="margin: 10px 0 0 0; white-space: pre-wrap;">{contact.message if contact.message else "No message provided"}</p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px; text-align: center;">
                        This email was sent from UK Work Connect Group contact form
                    </p>
                </div>
            </body>
        </html>
        """
        
        # Create plain text version
        text_body = f"""
        New Contact Form Submission
        
        Name: {contact.name}
        Email: {contact.email}
        Phone: {contact.phone}
        
        Message:
        {contact.message if contact.message else "No message provided"}
        
        ---
        This email was sent from UK Work Connect Group contact form
        """
        
        # Attach both HTML and plain text versions
        part1 = MIMEText(text_body, "plain")
        part2 = MIMEText(html_body, "html")
        message.attach(part1)
        message.attach(part2)
        
        # Send email via SMTP
        with smtplib.SMTP(email_host, email_port) as server:
            server.starttls()
            server.login(email_username, email_password)
            server.send_message(message)
        
        logger.info(f"Contact form email sent successfully from {contact.email}")
        
        # Store in database for record keeping
        contact_record = {
            "id": str(uuid.uuid4()),
            "name": contact.name,
            "email": contact.email,
            "phone": contact.phone,
            "message": contact.message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "sent"
        }
        await db.contact_submissions.insert_one(contact_record)
        
        return {
            "success": True,
            "message": "Your message has been sent successfully. We'll get back to you soon!"
        }
        
    except smtplib.SMTPAuthenticationError:
        logger.error("SMTP Authentication failed")
        raise HTTPException(
            status_code=500,
            detail="Email authentication failed. Please contact administrator."
        )
    except smtplib.SMTPException as e:
        logger.error(f"SMTP error occurred: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to send email. Please try again later or contact us directly."
        )
    except Exception as e:
        logger.error(f"Unexpected error sending email: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred. Please try again later."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()