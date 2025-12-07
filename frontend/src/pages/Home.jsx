import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Instagram, Phone, Mail, MessageCircle, Sun, Moon } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [isDark, setIsDark] = useState(false);
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

  const pageBg = isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900';
  const headerBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200';
  const cardBg = isDark ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900';
  const sectionBg = isDark ? 'bg-slate-900' : 'bg-white/80';
  const contactBg = isDark ? 'bg-slate-900' : 'bg-slate-100';

  return (
    <div className={`min-h-screen ${pageBg} transition-colors duration-300`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 backdrop-blur border-b ${headerBg} z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">UKC</span>
              </div>
              <span className="text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}">UK Work Connect</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`${isDark ? 'text-slate-200' : 'text-slate-700'} hover:text-teal-400 transition-colors font-medium`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`${isDark ? 'text-slate-200' : 'text-slate-700'} hover:text-teal-400 transition-colors font-medium`}>About</button>
              <button onClick={() => scrollToSection('services')} className={`${isDark ? 'text-slate-200' : 'text-slate-700'} hover:text-teal-400 transition-colors font-medium`}>Services</button>
              <button onClick={() => scrollToSection('contact')} className={`${isDark ? 'text-slate-200' : 'text-slate-700'} hover:text-teal-400 transition-colors font-medium`}>Contact</button>
            </nav>
            <label className="ml-4 flex items-center space-x-2 cursor-pointer select-none" aria-label="Toggle color theme">
              <div className={`w-12 h-7 rounded-full p-1 transition-colors relative overflow-hidden ${
                isDark ? 'bg-emerald-600' : 'bg-slate-200'
              }`}>
                <Sun
                  className={`absolute left-1 top-1 h-5 w-5 transition-opacity ${
                    isDark ? 'opacity-30 text-amber-200' : 'opacity-100 text-amber-500 drop-shadow'
                  }`}
                />
                <Moon
                  className={`absolute right-1 top-1 h-5 w-5 transition-opacity ${
                    isDark ? 'opacity-100 text-white drop-shadow' : 'opacity-30 text-slate-500'
                  }`}
                />
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow transition-transform relative ${
                    isDark ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
              <input
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark((prev) => !prev)}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center py-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Career consulting partner</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Together, we can turn your<br />career goals into reality
              </h1>
              <p className="text-lg text-emerald-100 max-w-xl">
                Professional Career Guidance Services for Both Experienced and Fresh Talent in the UK.  Let us help you navigate the job market and achieve your career aspirations with confidence.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Button 
                  onClick={() => scrollToSection('about')} 
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 text-lg rounded-lg transition-all transform hover:translate-y-[-1px]"
                >
                  Learn More
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline"
                  className="border-emerald-300 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-3xl font-bold text-white">20+</p>
                  <p className="text-sm text-emerald-100">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-3xl font-bold text-white">3 Regions</p>
                  <p className="text-sm text-emerald-100">UK · US · Dubai</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-3xl font-bold text-white">Staffing</p>
                  <p className="text-sm text-emerald-100">Recruitment & Support</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-3xl font-bold text-white">Profile</p>
                  <p className="text-sm text-emerald-100">Career Acceleration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section (moved up for clearer narrative) */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-12 items-center rounded-2xl shadow-xl p-8 border ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div>
              <img 
                src={require('../images/20251207_1838_image.png')} 
                alt="Professional Team" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">About us</p>
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Mission</h2>
              <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'} leading-relaxed`}>
                Our goal at UK Work Connect Group is to empower job seekers with the right guidance and support to secure opportunities in the UK, US and Dubai. As a freelance service provider, Our team offer comprehensive assistance to help you land your next role and enhance your professional profile. With 20 years of industry expertise, our team efficiently delivers high-quality hiring and staffing support tailored specifically to international job market.
              </p>
              <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'} leading-relaxed`}>
                Leveraging 20 years of industry experience, our professional team excels in recruitment and staffing 
                tailored specifically for the UK job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Consulting Services */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">What we do</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Expert Consulting Services</h2>
          <p className={`text-lg max-w-3xl mx-auto mb-10 ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
            Welcome to the UK Work Connect Group, a reliable partner for specialised consulting services across the UK. We offer customised guidance to advance your career journey and support your success, wherever you are located.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/uk_work_connect" target="_blank" rel="noopener noreferrer" 
               className="text-slate-500 hover:text-emerald-600 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Services</p>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Career Consulting Services for Professional and Freshers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className={`h-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 ${cardBg}`}>
              <CardContent className="p-6 space-y-4">
                <div className="mb-2 rounded-xl overflow-hidden">
                  <img 
                    src={require('../images/20251207_1839_image.png')} 
                    alt="Resume Review" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Resume Review</h3>
                <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'} text-sm`}>
                  A strong CV is essential for gaining access to new chances in the cut throat job market of today.  Our speciality is assisting job searchers like you in creating resumes that not only draw attention but also make an impact.
                </p>
              </CardContent>
            </Card>

            <Card className={`h-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 ${cardBg}`}>
              <CardContent className="p-6 space-y-4">
                <div className="mb-2 rounded-xl overflow-hidden">
                  <img 
                    src={require('../images/20251207_1840_image.png')} 
                    alt="Career Guidance" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Career Guidance</h3>
                <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'} text-sm`}>
                  In today’s competitive work market, obtaining new opportunities requires a great resume. Our area of expertise is helping job seekers like you write resumes that stand out and have an impact.
                </p>
              </CardContent>
            </Card>

            <Card className={`h-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 ${cardBg}`}>
              <CardContent className="p-6 space-y-4">
                <div className="mb-2 rounded-xl overflow-hidden">
                  <img 
                    src={require('../images/20251207_1841_image.png')} 
                    alt="Interview Support" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Interview Support</h3>
                <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'} text-sm`}>
                  Getting an interview is only the first step. You must do well at the interview in order to get the job you want. We provide thorough interview assistance services such as interview notes that are intended to help you make an impression on prospective employers and confidently present your qualifications.
                </p>
              </CardContent>
            </Card>

            <Card className={`h-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 ${cardBg}`}>
              <CardContent className="p-6 space-y-4">
                <div className="mb-2 rounded-xl overflow-hidden">
                  <img 
                    src={require('../images/20251207_1842_image.png')} 
                    alt="Resume Marketing" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Resume Marketing</h3>
                <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'} text-sm`}>
                  Making an outstanding resume is just the beginning of your job quest.  You must present your resume to the appropriate employers if you want to really stand out.  Our speciality is resume marketing services that help you get in front of companies and increase your chances of getting the job of your dreams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story Banner */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Be the part of our Success Story
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${contactBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">Get in touch</p>
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} rounded-2xl shadow-xl p-8 border`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Drop us a line!</h3>
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
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-6">
                  Send
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} rounded-2xl shadow-xl p-8 border space-y-4`}>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Better yet, Give us a call or drop an email</h3>
                <p className={`${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
                  We value our customers! Please feel free to call us during our normal business hours or send us a message or email.
                </p>
                <div className="space-y-4">
                  <a href="https://wa.me/917906553784" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center space-x-3 text-emerald-700 hover:text-emerald-500">
                    <MessageCircle className="w-6 h-6" />
                    <span>Message us on WhatsApp</span>
                  </a>
                  <div className={`flex items-center space-x-3 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    <Mail className="w-6 h-6" />
                    <a href="mailto:ukworkconnect@gmail.com" className="hover:text-emerald-600">
                      ukworkconnect@gmail.com
                    </a>
                  </div>
                  <div className={`flex items-center space-x-3 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    <Phone className="w-6 h-6" />
                    <a href="tel:+917906553784" className="hover:text-emerald-600">
                      +91 7906553784
                    </a>
                  </div>
                </div>
                <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} p-6 rounded-xl border`}>
                  <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Hours</h4>
                  <div className={`space-y-2 ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
                    <div className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span>09:00 – 18:00</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a href="https://www.instagram.com/uk_work_connect" target="_blank" rel="noopener noreferrer" 
                     className="text-slate-500 hover:text-emerald-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-slate-950 text-white' : 'bg-slate-950 text-white'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">Copyright © 2025 UK Work Connect Group - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;