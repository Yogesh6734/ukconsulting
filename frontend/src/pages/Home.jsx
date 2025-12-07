import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Instagram, Linkedin, Phone, Mail, MessageCircle, FileText, Briefcase, Users, Target } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">UKC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">UK Work Connect</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 transition-colors">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Together, we can turn your<br />career goals into reality
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We provide tailored solutions to help you meet your career goals and achieve success
            </p>
            <Button 
              onClick={() => scrollToSection('about')} 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-lg transition-all transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Expert Consulting Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Consulting Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Welcome to DN Consulting Group, your trusted source for expert consulting services throughout the UK. 
            We provide tailored solutions to help you meet your career goals and achieve success, no matter where you are located.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/dn_consulting_group_" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-teal-600 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/company/dn-consultinggroup" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-teal-600 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Success Story Banner */}
      <section className="py-12 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Be the part of our Success Story
          </h2>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1650784854945-264d5b0b6b07" 
                alt="Professional Team" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our goal at UK Work Connect Group is to empower job seekers with the right guidance and support to secure opportunities in the UK, US and Dubai. As a freelance service provider, Our team offer comprehensive assistance to help you land your next role and enhance your professional profile. With 20 years of industry expertise, our team efficiently delivers high-quality hiring and staffing support tailored specifically to international job market.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Leveraging 20 years of industry experience, our professional team excels in recruitment and staffing 
                tailored specifically for the UK job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Career Consulting Services for Professional and Freshers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1698047681432-006d2449c631" 
                    alt="Resume Review" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resume Review</h3>
                <p className="text-gray-600">
                  In today's competitive job market, a standout resume is your key to unlocking new opportunities. 
                  We specialize in helping job seekers like you craft resumes that not only capture attention but also leave a lasting impression.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1758520144417-e1c432042dec" 
                    alt="Career Guidance" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Guidance</h3>
                <p className="text-gray-600">
                  Navigating your career path can be challenging, but with the right guidance, you can achieve your professional 
                  goals with confidence. We offer comprehensive career guidance services designed to help you make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1698047681452-08eba22d0c64" 
                    alt="Interview Support" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Support</h3>
                <p className="text-gray-600">
                  Securing an interview is just the beginning. To land the job you want, you need to excel in the interview itself. 
                  We offer comprehensive interview support services designed to help you impress potential employers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d" 
                    alt="Resume Marketing" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resume Marketing</h3>
                <p className="text-gray-600">
                  Creating a stellar resume is only the first step in your job search. We specialize in resume marketing services 
                  designed to connect you with potential employers and maximize your chances of landing your dream job.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Drop us a line!</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="Name*" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email*" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number*" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6">
                  Send
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Better yet, Give us a call or drop an email</h3>
              <p className="text-gray-600 mb-6">
                We value our customers! Please feel free to call us during our normal business hours or send us a message or email.
              </p>
              <div className="space-y-4 mb-6">
                <a href="https://wa.me/447407832548" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center space-x-3 text-teal-600 hover:text-teal-700">
                  <MessageCircle className="w-6 h-6" />
                  <span>Message us on WhatsApp</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-6 h-6" />
                  <a href="mailto:info@dnconsultinggroup.co.uk" className="hover:text-teal-600">
                    info@dnconsultinggroup.co.uk
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-6 h-6" />
                  <a href="tel:+447407832548" className="hover:text-teal-600">
                    +44-7407832548
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4">Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Mon - Sun</span>
                    <span>09:00 – 17:00</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.instagram.com/dn_consulting_group_" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-teal-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/dn-consultinggroup" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-teal-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">Copyright © 2025 DN Consulting Group - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;