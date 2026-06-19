/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ActivePage, ServicePackage, Testimonial, FAQItem, StatsItem } from "../types";
import { SERVICES_DATA, TESTIMONIALS_DATA, FAQS_DATA, STATS_DATA, AGENCY_WHATSAPP } from "../data";
import {
  ArrowRight,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Plus,
  Minus,
  Star,
  Quote,
  ChevronLeft,
  Sparkles,
  Award,
  CheckCircle,
  Smartphone,
  TrendingUp,
  MessageCircle,
  Layout,
  Image,
  Video,
  PenTool,
  HelpCircle
} from "lucide-react";

// Icon components mapping to avoid CommonJS require()
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  Globe,
  Layout,
  Zap,
  Image,
  Video,
  PenTool,
  Award
};

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const TargetComponent = IconMap[name] || HelpCircle;
  return <TargetComponent className={className} />;
};

interface HomeViewProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
}

export default function HomeView({ setActivePage, darkMode }: HomeViewProps) {
  // States for interactive slider
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Accordion active FAQ state
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq1");

  // Animated counters simulator state
  const [animatedStats, setAnimatedStats] = useState<StatsItem[]>(() => 
    STATS_DATA.map(s => ({ ...s, value: "0" }))
  );

  useEffect(() => {
    // Smoothly transition numbers up on load
    const timers = STATS_DATA.map((originalStat, idx) => {
      let count = 0;
      const target = Math.floor(originalStat.numberValue);
      const step = Math.ceil(target / 40);
      
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setAnimatedStats(prev => {
          const next = [...prev];
          next[idx] = { 
            ...originalStat, 
            value: `${count}${originalStat.suffix}`
          };
          return next;
        });
      }, 35);
      return { interval };
    });

    return () => {
      timers.forEach(t => clearInterval(t.interval));
    };
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial: Testimonial = TESTIMONIALS_DATA[activeTestimonialIdx];

  const handleWhatsAppChat = (message: string) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const heroFeatures = [
    { title: "Premium Design", desc: "Pixel-perfect custom visual aesthetics.", iconName: "Sparkles", color: "text-blue-500 bg-blue-500/10" },
    { title: "Mobile Responsive", desc: "Fluid, high-contrast adaptivity for mobile.", iconName: "Smartphone", color: "text-cyan-500 bg-cyan-500/10" },
    { title: "Fast Delivery", desc: "Rapid 24h assets and custom web rollouts.", iconName: "Zap", color: "text-amber-500 bg-amber-500/10" },
    { title: "SEO Friendly", desc: "Engineered structure for highest Search ranking.", iconName: "TrendingUp", color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Secure Payment", desc: "Protected payment structures with transparent terms.", iconName: "ShieldCheck", color: "text-violet-500 bg-violet-500/10" },
    { title: "Professional Support", desc: "1-on-1 collaborative WhatsApp expert chat.", iconName: "MessageCircle", color: "text-indigo-500 bg-indigo-500/10" }
  ];

  const servicesPreview = SERVICES_DATA.slice(0, 3);

  return (
    <div id="home-view-container" className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section" 
        className={`relative overflow-hidden pt-12 pb-24 md:py-32 transition-colors duration-300 ${
          darkMode 
            ? "bg-transparent text-slate-200" 
            : "bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-950"
        }`}
      >
        {/* Abstract Background Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 -right-32 w-120 h-120 rounded-full bg-sky-500/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Visual Micro Badge */}
            <div className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Tech &amp; Ad Studio India </span>
            </div>

            <h1 
              id="hero-main-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none mb-6"
            >
              Build Your Digital Presence with {" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent neon-text">
                WebCraft Pro
              </span>
            </h1>

            <p 
              className={`text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-normal ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Professional Website Development, Advertisement Design, Video Creation and Premium Branding Solutions for modern businesses.
            </p>

            {/* Live CTAs Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <button
                id="hero-cta-get-started"
                onClick={() => {
                  setActivePage(ActivePage.Services);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 shadow-lg cursor-pointer transform transition-all hover:scale-[1.03] duration-200 glow-blue"
              >
                Get Started
              </button>

              <button
                id="hero-cta-book-now"
                onClick={() => {
                  setActivePage(ActivePage.Booking);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase border cursor-pointer transition-all hover:scale-[1.03] duration-200 ${
                  darkMode 
                    ? "border-white/10 text-slate-300 bg-white/5 hover:bg-white/10" 
                    : "border-blue-300 text-blue-700 bg-blue-50/40 hover:bg-blue-50"
                }`}
              >
                Book Now
              </button>

              <button
                id="hero-cta-whatsapp-now"
                onClick={() => handleWhatsAppChat("Hello WebCraft Pro, I viewed your Hero section and want to launch an online project with you!")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 shadow-md cursor-pointer flex items-center justify-center space-x-2 transition-all hover:scale-[1.03] duration-200"
              >
                <MessageSquare className="w-5 h-5 shrink-0 text-blue-400" />
                <span>WhatsApp Now</span>
              </button>
            </div>
          </div>

          {/* Hero Features Grid */}
          <div className="mt-8 border-t pt-16 border-white/5">
            <h2 className="text-center text-xs font-bold text-blue-400 uppercase tracking-widest mb-10">
              The WebCraft Pro Architectural Philosophy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroFeatures.map((feat, index) => {
                const TargetIcon = IconMap[feat.iconName] || ShieldCheck;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      darkMode 
                        ? "glass hover:scale-[1.02] duration-300 border-white/5 shadow-md" 
                        : "glass-card-light glass-card-light-hover"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl flex items-center justify-center ${feat.color}`}>
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                          {feat.title}
                        </h3>
                        <p className={`text-xs mt-1 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Interactive counter counters trigger on render) */}
      <section id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 lg:p-12 rounded-3xl ${
          darkMode ? "glass border border-white/5 shadow-md" : "bg-gradient-to-br from-blue-50 via-sky-50 to-white border border-blue-100"
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {animatedStats.map((stat) => (
              <div key={stat.id} className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-500 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className={`text-xs sm:text-sm font-semibold tracking-wider uppercase ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section 
        id="about-preview-section" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Presentation Area */}
          <div className="relative group">
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-400 opacity-30 group-hover:opacity-60 blur-lg transition duration-500`}></div>
            <div className={`relative rounded-2xl p-8 overflow-hidden border ${
              darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100"
            }`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-1">
                Since 2021
              </span>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                Engineered for Infinite Conversions
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Our designs are meticulously optimized to boost visual authority and direct user conversion. 
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Full zero-delay local WhatsApp dispatch guarantees immediate client contact.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Transparent 50% advance project insurance safeguards both start development and completion.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/20 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-slate-900">A</div>
                  <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-slate-900">P</div>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-slate-900">V</div>
                </div>
                <span className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Trusted by 50+ Global Brands
                </span>
              </div>
            </div>
          </div>

          {/* Copy Area */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400">
              <Award className="w-3.5 h-3.5" />
              <span>Who is WebCraft Pro?</span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              Grow Your Business Online with Professional Assets.
            </h2>

            <p className={`text-base leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              WebCraft Pro helps businesses grow online through high-converting websites, creative advertising assets, video scripts, custom branding solutions, and lightning-fast digital marketing engines.
            </p>

            <p className={`text-sm leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              Whether you are a startup needing a minimalist single-page landing or a full corporate enterprise demanding complex API scheduling databases, our professional support ensures zero friction from planning to deployment.
            </p>

            {/* Navigation action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-preview-cta"
                onClick={() => {
                  setActivePage(ActivePage.About);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md cursor-pointer group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW SECTION */}
      <section 
        id="services-preview-section" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block">
            Featured Packages
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Professional Development Packages
          </h2>
          <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Engineered precisely matching your budget. Upgrade as your digital company footprints expand.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesPreview.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                pkg.badge 
                  ? darkMode 
                    ? "glass border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] glow-blue scale-[1.03]" 
                    : "bg-white border-blue-500 shadow-lg scale-[1.03]"
                  : darkMode 
                    ? "glass border-white/5 hover:border-blue-500/20 hover:scale-[1.01]" 
                    : "bg-white border-slate-100 shadow-md hover:shadow-xl"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-md uppercase tracking-wider">
                  {pkg.badge}
                </span>
              )}

              <div>
                <span className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
                  {pkg.iconName === "Globe" && <Globe className="w-6 h-6" />}
                  {pkg.iconName === "Layout" && <Layout className="w-6 h-6" />}
                  {pkg.iconName === "Zap" && <Zap className="w-6 h-6" />}
                </span>

                <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-3xl font-extrabold text-blue-500">{pkg.price}</span>
                  <span className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>/ project</span>
                </div>

                <ul className="space-y-3.5 border-t pt-6 border-slate-800/10 mb-8 text-sm">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => {
                    setActivePage(ActivePage.Booking);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-all ${
                    pkg.badge 
                      ? "text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                      : darkMode 
                        ? "text-blue-400 bg-blue-950/40 border border-blue-900/50 hover:bg-blue-950/80" 
                        : "text-blue-700 bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  Configure &amp; Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All services pointer */}
        <div className="text-center pt-4">
          <button
            id="view-all-services-cta"
            onClick={() => {
              setActivePage(ActivePage.Services);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest border transition-all ${
              darkMode 
                ? "border-slate-800 text-slate-300 bg-slate-900/30 hover:bg-slate-900" 
                : "border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <span>View Additional Hand-crafted Services</span>
            <ChevronRight className="w-4 h-4 text-blue-500" />
          </button>
        </div>
      </section>

      {/* 5. INTERACTIVE TESTIMONIALS SLIDER SECTION */}
      <section 
        id="testimonials-section" 
        className={`py-16 transition-colors duration-300 ${
          darkMode ? "bg-slate-950" : "bg-blue-50/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">
              Testimonials
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              What Our Happy Partners Say
            </h2>
          </div>

          {/* Testimonial Active Slider Box */}
          <div className="max-w-4xl mx-auto relative">
            <div className={`p-8 sm:p-12 rounded-3xl border relative ${
              darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-xl"
            }`}>
              {/* Decorators */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-500/10 shrink-0" />
              <div className="absolute top-0 right-12 w-20 h-20 bg-sky-500/5 rounded-full blur-xl"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                <p className={`text-lg italic leading-relaxed font-serif ${
                  darkMode ? "text-slate-200" : "text-slate-700"
                }`}>
                  "{currentTestimonial.content}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-800/10">
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentTestimonial.avatarUrl}
                      alt={currentTestimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-blue-500/30"
                    />
                    <div>
                      <h4 className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-xs text-blue-500 font-semibold">
                        {currentTestimonial.role}, {currentTestimonial.companyName}
                      </p>
                    </div>
                  </div>

                  {/* Slider Control Arrows */}
                  <div className="flex items-center space-x-2">
                    <button
                      id="testimonial-prev-arrow"
                      onClick={prevTestimonial}
                      className={`p-2 rounded-lg cursor-pointer transition-all ${
                        darkMode ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      id="testimonial-next-arrow"
                      onClick={nextTestimonial}
                      className={`p-2 rounded-lg cursor-pointer transition-all ${
                        darkMode ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Dots indicators */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx 
                      ? "w-8 bg-blue-500" 
                      : darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section 
        id="faq-section" 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">
            Client Q&amp;A
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Common Business Questions
          </h2>
          <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Have an dynamic inquiry about how we coordinate, deploy or verify projects? Read our guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? darkMode
                      ? "glass border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.15)] glow-blue"
                      : "bg-white border-blue-200 shadow-md"
                    : darkMode
                    ? "glass border-white/5 hover:border-white/10"
                    : "bg-white border-slate-100 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <span className={`font-semibold text-sm sm:text-base ${
                    isOpen 
                      ? "text-blue-500 font-bold" 
                      : darkMode ? "text-white" : "text-slate-900"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform ${
                    isOpen 
                      ? "bg-blue-500/10 text-blue-500 rotate-180" 
                      : "bg-slate-800/10 text-slate-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${
                    darkMode ? "text-slate-300 border-slate-800/40" : "text-slate-600 border-slate-50"
                  }`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section id="cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl border text-center z-10 ${
          darkMode 
            ? "glass border-white/5 text-slate-200" 
            : "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 border-slate-800 text-white"
        }`}>
          {/* Neon Glow Dots and lines */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-600/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-sky-500/30 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Collaborate and Build
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Establish a Powerful Online Presence?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Book professional web development, advertisement templates, and premium branding assets. WebCraft Pro guarantees high-converting workflows.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-book-services-immediately"
                onClick={() => {
                  setActivePage(ActivePage.Booking);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-lg cursor-pointer transition-all hover:scale-[1.03]"
              >
                Book Services Immediately
              </button>
              
              <button
                id="cta-inquire-price"
                onClick={() => handleWhatsAppChat("Hi WebCraft Pro, I would like to inquire about customized options for website development and business branding packages.")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white cursor-pointer transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
