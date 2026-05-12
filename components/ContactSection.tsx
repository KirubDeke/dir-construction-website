"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Award, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const supabase = createClient();

  // Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;

      setStatus({ type: 'success', text: "Thank you! Your message has been sent successfully. We'll get back to you soon." });
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      setStatus({ type: 'error', text: error.message || "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Contact Section Preview - Soft transition back to light */}
      <section id="contact-preview" className="relative px-6 py-28 overflow-hidden bg-gradient-to-br from-amber-50/50 via-white to-amber-50/50">
        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="light-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#D97706" strokeWidth="0.3" />
                <circle cx="30" cy="30" r="1" fill="#D97706" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#light-pattern)" />
          </svg>
        </div>

        {/* Soft Golden Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-500/5 blur-3xl rounded-full" />

        {/* Floating Light Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, y: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ x: "100vw", opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 3 }}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Building2 className="w-10 h-10 text-amber-600" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-stone-800 mb-4"
          >
            Ready to Bring Your
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block mt-2">
              Vision to Life?
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mb-6"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Let's discuss your project. Whether it's a new build, renovation, or consultation,
            our team is ready to help you every step of the way.
          </motion.p>

          {/* Trust Badges - Light Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mt-12 pt-6 border-t border-stone-200"
          >
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Licensed & Insured" },
              { icon: <Award className="w-4 h-4" />, text: "Quality Guaranteed" },
              { icon: <Clock className="w-4 h-4" />, text: "On-Time Delivery" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-stone-500 text-sm">
                <span className="text-amber-500">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section - Premium Design */}
      <section id="contact" className="relative px-6 py-24 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-black">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-pattern-premium" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
                <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="none" stroke="#FBBF24" strokeWidth="0.3" />
                <circle cx="40" cy="40" r="2" fill="#FBBF24" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#contact-pattern-premium)" />
          </svg>
        </div>

        {/* Golden Glow Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-amber-500/5 blur-3xl rotate-12" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
              animate={{ y: "-20vh", opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-amber-500/30">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's Talk About
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent block">
                Your Next Project
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mt-6" />

            <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
              Ready to bring your vision to life? Contact us today for a free consultation.
            </p>
          </motion.div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Call Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-gray-300 text-sm">Monday to Friday, 8am - 6pm</p>
                    <p className="text-amber-400 font-semibold mt-2 text-lg">+251 926344361</p>
                    <p className="text-amber-400 font-semibold mt-2 text-lg">+251 912439350</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-gray-300 text-sm">We'll respond within 24 hours</p>
                    <p className="text-amber-400 font-semibold mt-2">info@dirconstruction.com</p>
                    <p className="text-amber-400/80">contact@dirconstruction.com</p>
                  </div>
                </div>
              </div>

              {/* Visit Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-gray-300 text-sm">Monday to Friday, 8am - 6pm</p>
                    <p className="text-gray-200 mt-2">
                      Hosanna, Central Ethiopia<br />
                      Regional State, Ethiopia
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">Working Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monday - Friday:</span>
                        <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Saturday:</span>
                        <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Sunday:</span>
                        <span className="text-amber-400 font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you shortly</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 mt-3 rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+251 XXX XXX XXX"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 text-white"
                      >
                        <option value="" className="text-stone-800">Select a service</option>
                        <option value="building-design" className="text-stone-800">Building Design</option>
                        <option value="civil-work" className="text-stone-800">Civil Work Design</option>
                        <option value="construction" className="text-stone-800">Construction Work</option>
                        <option value="printing" className="text-stone-800">Printing Services</option>
                        <option value="training" className="text-stone-800">Software Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, requirements, or any questions..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  {status && (
                    <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                      status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                      {status.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold py-4 rounded-xl hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* FAQ Hint */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              Have questions? Check out our <button className="text-amber-400 hover:text-amber-300 font-semibold">FAQ page</button>
            </p>
          </motion.div> */}
        </div>
      </section>
    </>
  );
}
