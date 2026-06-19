/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActivePage } from "../types";
import { AGENCY_EMAIL, AGENCY_WHATSAPP } from "../data";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Compass,
  MapPin,
  Send,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface ContactViewProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
}

export default function ContactView({ setActivePage, darkMode }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate contact form dispatch
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent("Hello WebCraft Pro, I am reaching out to discuss an upcoming development project!");
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const businessHours = [
    { days: "Monday - Friday", hours: "9:00 AM - 7:00 PM (IST)" },
    { days: "Saturday", hours: "10:00 AM - 4:00 PM (IST)" },
    { days: "Sunday", hours: "Closed / On-Call Emergencies Only" }
  ];

  return (
    <div id="contact-us-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Page Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block animate-pulse">
          Get In Touch
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          Connect With Our Specialists
        </h1>
        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          Whether you have custom software questions or want to verify milestone pricing, connect with us swiftly.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Contact Information, Direct WhatsApp & Hours */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Contact Details */}
          <div className={`p-6 rounded-3xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-5 ${darkMode ? "text-white" : "text-slate-900"}`}>
              Direct Touchpoints
            </h3>

            <div className="space-y-4">
              {/* WhatsApp Item */}
              <div
                className={`p-4 rounded-xl border flex items-start space-x-3 cursor-pointer hover:border-emerald-500/40 transition-colors ${
                  darkMode ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
                }`}
                onClick={handleWhatsAppInstant}
              >
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    WhatsApp Chat Button
                  </span>
                  <span className={`text-sm font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    +91 {AGENCY_WHATSAPP}
                  </span>
                  <p className="text-[10px] text-slate-500 leading-relaxed mt-0.5">
                    Click here to trigger immediate 1-on-1 discussion thread.
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <a
                href={`mailto:${AGENCY_EMAIL}`}
                className={`p-4 rounded-xl border flex items-start space-x-3 hover:border-blue-500/40 transition-colors block ${
                  darkMode ? "bg-white/5 border border-white/5" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Official Mailbox
                  </span>
                  <span className={`text-sm font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {AGENCY_EMAIL}
                  </span>
                  <p className="text-[10px] text-slate-500 leading-relaxed mt-0.5">
                    For bulk enterprise quotes, wire inquiries and legal NDAs.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2: Business Hours */}
          <div className={`p-6 rounded-3xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-4 flex items-center space-x-2 ${
              darkMode ? "text-white" : "text-slate-950"
            }`}>
              <Clock className="w-5 h-5 text-sky-500" />
              <span>Business Operating Hours</span>
            </h3>

            <div className="space-y-3.5 text-xs">
              {businessHours.map((time, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-2 border-slate-800/10 last:border-none">
                  <span className={`font-semibold ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {time.days}
                  </span>
                  <span className={`font-mono ${darkMode ? "text-blue-400" : "text-blue-700 font-semibold"}`}>
                    {time.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form and Maps Placeholder */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Card 1: Interactive Contact Form */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-150 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-5 ${darkMode ? "text-white" : "text-slate-950"}`}>
              Dispatch Custom Message
            </h3>

            {submitted ? (
              <div id="contact-feedback-success" className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-950"}`}>
                    Message Filed Successfully!
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Our business support desk will review and send confirmation callbacks in 1-2 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold uppercase bg-slate-800 text-slate-400 hover:text-white rounded-lg transition"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full p-2.5 rounded-lg text-xs outline-none border ${
                        darkMode 
                          ? "bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10" 
                          : "bg-slate-50 border-slate-200 text-slate-955 focus:border-blue-600 focus:bg-white"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Email *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@domain.com"
                      className={`w-full p-2.5 rounded-lg text-xs outline-none border ${
                        darkMode 
                          ? "bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10" 
                          : "bg-slate-50 border-slate-200 text-slate-955 focus:border-blue-600 focus:bg-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Website customization inquiry"
                    className={`w-full p-2.5 rounded-lg text-xs outline-none border ${
                      darkMode 
                        ? "bg-white/5 border-white/10 text-white focus:border-blue-500 focus:bg-white/10" 
                        : "bg-slate-50 border-slate-200 text-slate-955 focus:border-blue-600 focus:bg-white"
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Message *</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us what you want to achieve..."
                    className={`w-full p-2.5 rounded-lg text-xs outline-none border ${
                      darkMode 
                        ? "bg-white/5 border border-white/10 text-slate-200 focus:border-blue-500 focus:bg-white/10" 
                        : "bg-slate-50 border-slate-200 text-slate-955 focus:border-blue-600 focus:bg-white"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Secure Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Card 2: Google Maps Placeholder */}
          <div className={`p-6 rounded-3xl border relative overflow-hidden ${
            darkMode ? "glass border-white/5 shadow-sm" : "bg-slate-50 border-slate-100 shadow-sm"
          }`}>
            <h4 className={`font-bold text-xs uppercase tracking-wider mb-2 flex items-center space-x-1.5 ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}>
              <MapPin className="w-4 h-4 text-rose-500 shrink-0 animate-bounce" />
              <span>WebCraft Pro HQ - Live Tracker Google Map</span>
            </h4>

            {/* Custom interactive geographic placeholder */}
            <div className="relative rounded-2xl h-48 bg-slate-950 border border-slate-800/80 overflow-hidden flex flex-col justify-between p-4 bg-cover bg-center">
              {/* grid pattern map look */}
              <div className="absolute inset-0 z-0 bg-blue-950/25 grid grid-cols-6 gap-0 opacity-40 pointer-events-none">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="border-r border-b border-blue-500/10"></div>
                ))}
              </div>

              {/* micro coordinate markers */}
              <div className="relative z-10">
                <span className="text-[9px] font-mono font-bold text-blue-500 block">MAP LOCATOR COORDS</span>
                <span className="text-[10px] font-mono text-white">LAT: 19.0760° N, LONG: 72.8777° E (Mumbai HQ, India)</span>
              </div>

              {/* center pinpoint visual */}
              <div className="flex flex-col items-center justify-center relative z-10 my-auto">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center animate-ping absolute"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center relative shadow-md">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-[9px] font-extrabold text-white bg-slate-900/90 py-0.5 px-2 rounded-full mt-2 border border-blue-500/30">
                  WebCraft Corporate Offices
                </span>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400">
                <span>Google Maps Platform Integration</span>
                <span className="flex items-center space-x-0.5">
                  <span>Zoom 15x</span>
                  <ExternalLink className="w-3 h-3 text-sky-500" />
                </span>
              </div>
            </div>

            <p className={`text-[10px] leading-relaxed mt-3 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Standard GPS pinpoint representation. For offline physical agency conferences, please pre-schedule with our account executives.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
