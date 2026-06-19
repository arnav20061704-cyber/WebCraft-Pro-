/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ActivePage, BookingSubmission } from "../types";
import { AGENCY_WHATSAPP } from "../data";
import {
  Sparkles,
  Phone,
  MessageSquare,
  Send,
  Calendar,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  User,
  Layers,
  FileText
} from "lucide-react";

interface BookingViewProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
  preSelectedService?: string;
  clearPreSelectedService?: () => void;
}

export default function BookingView({
  setActivePage,
  darkMode,
  preSelectedService,
  clearPreSelectedService
}: BookingViewProps) {
  
  const [formData, setFormData] = useState<BookingSubmission>({
    fullName: "",
    whatsappNumber: "",
    selectedService: "Basic Website",
    projectDetails: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<BookingSubmission>>({});

  // Sync pre-selected service if user clicked from services page
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        selectedService: preSelectedService
      }));
    }
  }, [preSelectedService]);

  const serviceOptions = [
    "Basic Website",
    "Moderate Website",
    "Premium Website",
    "Advertisement Image",
    "Advertisement Video",
    "Logo Design",
    "Branding Package"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clean up error state
    if (errors[name as keyof BookingSubmission]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingSubmission> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required.";
    } else if (!/^\+?[0-9\s-]{9,15}$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = "Please enter a valid phone/WhatsApp number.";
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please describe your project requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Compile WhatsApp message structure
    const title = "*WebCraft Pro - New Service Booking Notification*";
    const divider = "=====================================";
    const nameLine = `👤 *Client Name*: ${formData.fullName.trim()}`;
    const phoneLine = `📞 *WhatsApp Number*: ${formData.whatsappNumber.trim()}`;
    const serviceLine = `💼 *Selected Service*: ${formData.selectedService}`;
    const detailsHeader = `📝 *Project Details*:`;
    const detailsContent = formData.projectDetails.trim();
    const footer = `=====================================\n_Processed and sent via WebCraft Pro Online Portal_`;

    const compiledMessage = `${title}\n${divider}\n${nameLine}\n${phoneLine}\n${serviceLine}\n\n${detailsHeader}\n"${detailsContent}"\n\n${footer}`;

    // Dispatch WhatsApp target
    const whatsappUrl = `https://wa.me/91${AGENCY_WHATSAPP}?text=${encodeURIComponent(compiledMessage)}`;
    
    // Clear preselected action
    if (clearPreSelectedService) {
      clearPreSelectedService();
    }

    // Launch WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormSubmitted(true);
  };

  const handleDirectWhatsAppQuick = () => {
    const text = encodeURIComponent("Hello WebCraft Pro, I would like to chat instantly with a designer options for website pricing!");
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="booking-portal-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header section */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">
          Online Booking Portal
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          Initialize Your Project Setup
        </h1>
        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          Fill out our formal creative outline below. Submitting automatically triggers direct formatting to our WhatsApp line (+91 {AGENCY_WHATSAPP}) for instant onboarding.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Dynamic Interactive Booking Form */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-10 rounded-3xl border transition ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-xl"
          }`}>
            
            {formSubmitted ? (
              <div id="booking-success-box" className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    Booking Form Dispatched!
                  </h3>
                  <p className={`text-sm max-w-md mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Your project details have been successfully formatted and sent to WebCraft Pro over WhatsApp. Please verify the WhatsApp window to finalize.
                  </p>
                </div>

                <div className={`p-4 rounded-xl text-left text-xs ${
                  darkMode ? "bg-slate-950 text-slate-400 border border-slate-900" : "bg-slate-50 text-slate-600"
                }`}>
                  <span className="font-extrabold block text-blue-500 uppercase mb-2">
                    Next Required Onboarding Action:
                  </span>
                  As noted in our client agreement guidelines, a <strong>50% advance project payment</strong> is strictly required to kickstart active code/design production. Please visit our Payment Portal to view secure wire options.
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setActivePage(ActivePage.Payment);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition"
                  >
                    Go to Payment Portal
                  </button>
                  
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white"
                  >
                    Modify Form Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmission} id="modular-booking-form" className="space-y-6">
                
                {/* Full Name field */}
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase block tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm transition outline-none border ${
                        errors.fullName 
                          ? "border-rose-500" 
                          : darkMode 
                            ? "bg-white/5 border-white/10 text-white focus:border-blue-500" 
                            : "bg-slate-50 border-slate-200 text-slate-950 focus:border-blue-600 focus:bg-white"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <span className="text-xs text-rose-500 block">{errors.fullName}</span>
                  )}
                </div>

                {/* WhatsApp Phone field */}
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase block tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Your WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm transition outline-none border ${
                        errors.whatsappNumber 
                          ? "border-rose-500" 
                          : darkMode 
                            ? "bg-white/5 border-white/10 text-white focus:border-blue-500" 
                            : "bg-slate-50 border-slate-200 text-slate-950 focus:border-blue-600 focus:bg-white"
                      }`}
                    />
                  </div>
                  {errors.whatsappNumber && (
                    <span className="text-xs text-rose-500 block">{errors.whatsappNumber}</span>
                  )}
                </div>

                {/* Service Dropdown Selector */}
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase block tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Select Required Service *
                  </label>
                  <div className="relative">
                    <Layers className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                    <select
                      name="selectedService"
                      value={formData.selectedService}
                      onChange={handleInputChange}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm transition outline-none border appearance-none ${
                        darkMode 
                          ? "bg-white/5 border-white/10 text-white focus:border-blue-500" 
                          : "bg-slate-50 border-slate-200 text-slate-950 focus:border-blue-600 focus:bg-white"
                      }`}
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt} className={darkMode ? "bg-slate-950" : "bg-white"}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project details area */}
                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase block tracking-wider ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Project Brief &amp; Requirements *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Briefly describe what you're trying to build, preferred delivery timeline, and major goals..."
                      className={`w-full pl-11 pr-4 py-3 rounded-xl text-sm transition outline-none border ${
                        errors.projectDetails 
                          ? "border-rose-500" 
                          : darkMode 
                            ? "bg-white/5 border-white/10 text-white focus:border-blue-500" 
                            : "bg-slate-50 border-slate-200 text-slate-950 focus:border-blue-600 focus:bg-white"
                      }`}
                    />
                  </div>
                  {errors.projectDetails && (
                    <span className="text-xs text-rose-500 block">{errors.projectDetails}</span>
                  )}
                </div>

                {/* Submitting button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-md transition duration-200 hover:scale-[1.01] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit via WhatsApp Notification</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

        {/* Right Side: Direct Custom Live support widgets */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Instant Contact node */}
          <div className={`p-6 rounded-2xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-4 flex items-center space-x-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              <Phone className="w-5 h-5 text-sky-500 shrink-0" />
              <span>Instant Contact Option</span>
            </h3>
            
            <p className={`text-xs leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Do you prefer skipped forms? Touch our instant support link below to open an immediate open chat thread with us directly. We reply in under 15 minutes.
            </p>

            <button
              id="instant-direct-whatsapp-chat-widget"
              onClick={handleDirectWhatsAppQuick}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Launch Instant Chat Now</span>
            </button>
          </div>

          {/* Guidelines Accordion Info */}
          <div className={`p-6 rounded-2xl border ${
            darkMode ? "glass border-white/5 shadow-sm" : "bg-slate-50/50 border-slate-100 shadow-sm"
          }`}>
            <h4 className={`font-bold text-xs uppercase tracking-wider mb-4 flex items-center space-x-1.5 ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}>
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>WebCraft Coding Guidelines:</span>
            </h4>

            <ul className="space-y-4 text-xs">
              <li className="space-y-1">
                <span className={`font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>
                  1. Real-time Formatting
                </span>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Our custom portal automatically takes your form inputs and formats markdown-rich messages for seamless WhatsApp deliveries.
                </p>
              </li>
              <li className="space-y-1">
                <span className={`font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>
                  2. 50% Milestone Principle
                </span>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  For code modules and custom ad videos, WebCraft requires upfront confirmation in accordance with legal terms and conditions.
                </p>
              </li>
              <li className="space-y-1">
                <span className={`font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>
                  3. Content Provisioning
                </span>
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                  Clients must supply business logo, text descriptions, and static imagery to help accelerate launch speeds.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
