/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ActivePage } from "../types";
import {
  Compass,
  Eye,
  CheckCircle,
  Award,
  DollarSign,
  Zap,
  MessageSquare,
  Smile,
  ShieldAlert,
  Users,
  Briefcase
} from "lucide-react";
import { AGENCY_WHATSAPP } from "../data";

interface AboutViewProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
}

export default function AboutView({ setActivePage, darkMode }: AboutViewProps) {
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello WebCraft Pro, I read your About Us page and want to team up with you for my branding & web needs!");
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const values = [
    {
      title: "Professional Design",
      desc: "Architected by modern elite UX designers utilizing high-quality typography and dynamic movement.",
      icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Affordable Pricing",
      desc: "Highly cost-competitive packages with absolute crystal clear value and zero hidden overheads.",
      icon: <DollarSign className="w-6 h-6 text-cyan-500" />
    },
    {
      title: "Fast Delivery",
      desc: "Standard web rollouts delivered in 3-10 days, with 24-48h rapid turnaround for graphics and videos.",
      icon: <Zap className="w-6 h-6 text-amber-500" />
    },
    {
      title: "WhatsApp Support",
      desc: "Direct 1-on-1 collaborative access immediately linking you to a dedicated professional resource.",
      icon: <MessageSquare className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Client Satisfaction",
      desc: "Our primary North Star. Over 50+ partners delivered with absolute perfect Google feedback ratings.",
      icon: <Smile className="w-6 h-6 text-violet-500" />
    },
    {
      title: "Transparent Communication",
      desc: "Structured milestone approvals coupled with our secure 50% advance system ensures trust.",
      icon: <ShieldAlert className="w-6 h-6 text-rose-500" />
    }
  ];

  return (
    <div id="about-us-view" className="space-y-16 py-8">
      
      {/* Page Header banner */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block">
          Elite Digital Agency
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          Empowering Brands Globally
        </h1>
        <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          WebCraft Pro helps modern businesses grow online through modern websites, creative advertising assets, master branding guidelines, and strategic digital marketing templates.
        </p>
      </section>

      {/* Mission & Vision Section (Horizontal blocks or Grid cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className={`p-8 sm:p-10 rounded-3xl border transition duration-300 ${
            darkMode 
              ? "glass border-white/5 shadow-md hover:scale-[1.01]" 
              : "bg-white border-slate-150 shadow-md"
          }`}>
            <span className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-500 inline-block mb-6">
              <Compass className="w-8 h-8" />
            </span>
            <h2 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
              Our Dedicated Mission
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Provide high-quality, professional, and affordable digital assets. We break down the barriers of complex web development and pricey design studios so local businesses and global startups can launch instantly without friction.
            </p>
          </div>

          {/* Vision */}
          <div className={`p-8 sm:p-10 rounded-3xl border transition duration-300 ${
            darkMode 
              ? "glass border-white/5 shadow-md hover:scale-[1.01]" 
              : "bg-white border-slate-150 shadow-md"
          }`}>
            <span className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-500 inline-block mb-6">
              <Eye className="w-8 h-8" />
            </span>
            <h2 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
              Our Futuristic Vision
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Help every modern business establish an absolute, high-fidelity online presence. By pioneering state-of-the-art interactive user interfaces and high-CTR marketing ad creatives, we aim to be the paramount digital asset manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">
            The Core Advantage
          </span>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
            Why Businesses Choose WebCraft Pro
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Our technical expertise is coupled with rigorous transparent practices ensuring risk-free premium growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                darkMode 
                  ? "glass border-white/5 hover:border-blue-500/20 hover:scale-[1.02]" 
                  : "bg-white border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="flex items-center space-x-3.5 mb-4">
                <div className={`p-2.5 rounded-xl ${darkMode ? "bg-slate-800" : "bg-slate-50"}`}>
                  {val.icon}
                </div>
                <h3 className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {val.title}
                </h3>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section inside About us */}
      <section className="max-w-5xl mx-auto px-4">
        <div className={`p-8 rounded-3xl border text-center relative overflow-hidden ${
          darkMode ? "glass border-white/5 shadow-md" : "white border-slate-100 shadow-lg"
        }`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
              Let's Co-Create Your Brand Standard
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
              Our professional coordinators are active right now to assist you in designing top-tier logo assets, video commercials, and premium responsive pages.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActivePage(ActivePage.Booking);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Inquire or Book Now
              </button>
              
              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/10 flex items-center justify-center space-x-1.5"
              >
                <span>WhatsApp Coordinator</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
