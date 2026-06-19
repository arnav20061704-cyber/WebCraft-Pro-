/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActivePage } from "./types";
import { AGENCY_WHATSAPP } from "./data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import BookingView from "./components/BookingView";
import PaymentView from "./components/PaymentView";
import ContactView from "./components/ContactView";
import { PrivacyPolicyView, TermsAndConditionsView } from "./components/CommonViews";
import { MessageSquare, PhoneCall, ArrowUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>(ActivePage.Home);
  const [darkMode, setDarkMode] = useState<boolean>(true); // Defaults to dark black & royal blue gradient theme
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent("Hello WebCraft Pro, I am browsing your premium website and would like to start a custom business inquiry!");
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const clearPreSelectedService = () => {
    setPreSelectedService(undefined);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActivePage = () => {
    switch (activePage) {
      case ActivePage.Home:
        return <HomeView setActivePage={handlePageChange} darkMode={darkMode} />;
      case ActivePage.About:
        return <AboutView setActivePage={handlePageChange} darkMode={darkMode} />;
      case ActivePage.Services:
        return (
          <ServicesView
            setActivePage={handlePageChange}
            darkMode={darkMode}
            setSelectedPrePackage={setPreSelectedService}
          />
        );
      case ActivePage.Booking:
        return (
          <BookingView
            setActivePage={handlePageChange}
            darkMode={darkMode}
            preSelectedService={preSelectedService}
            clearPreSelectedService={clearPreSelectedService}
          />
        );
      case ActivePage.Payment:
        return <PaymentView setActivePage={handlePageChange} darkMode={darkMode} />;
      case ActivePage.Contact:
        return <ContactView setActivePage={handlePageChange} darkMode={darkMode} />;
      case ActivePage.PrivacyPolicy:
        return <PrivacyPolicyView setActivePage={handlePageChange} darkMode={darkMode} />;
      case ActivePage.TermsAndConditions:
        return <TermsAndConditionsView setActivePage={handlePageChange} darkMode={darkMode} />;
      default:
        return <HomeView setActivePage={handlePageChange} darkMode={darkMode} />;
    }
  };

  return (
    <div
      id="applet-core-root"
      className={`min-h-screen flex flex-col transition-colors duration-300 relative ${
        darkMode 
          ? "bg-[#05060a] text-slate-200" 
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Decorative Blur nodes in Dark Mode */}
      {darkMode && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden gradient-bg">
        </div>
      )}

      {/* Global Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Core Main Area with motion transitions */}
      <main className="flex-grow relative z-10 pt-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Global Footer */}
      <Footer setActivePage={handlePageChange} darkMode={darkMode} />

      {/* GLOBAL UTILITIES: Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* Scroll To Top button */}
        <button
          id="global-scroll-top-btn"
          onClick={handleScrollToTop}
          className={`p-3 rounded-full shadow-lg border transition-all hover:scale-105 cursor-pointer ${
            darkMode 
              ? "bg-slate-900 text-blue-400 border-slate-800 hover:border-blue-500/50" 
              : "bg-white text-blue-700 border-slate-200 hover:bg-slate-50"
          }`}
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Pulsing Floating WhatsApp button */}
        <button
          id="global-floating-whatsapp-trigger"
          onClick={handleFloatingWhatsApp}
          className="relative group p-4 rounded-full text-white bg-emerald-500 hover:bg-emerald-600 shadow-2xl hover:scale-105 duration-200 transition-transform cursor-pointer"
          title="Direct WhatsApp Coordinator"
        >
          {/* Pulsing glow ring */}
          <div className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 blur-xs animate-ping"></div>
          <MessageSquare className="w-6 h-6 relative z-10" />
          
          {/* Hover tool badge tooltip */}
          <span className="absolute right-14 top-3 scale-0 group-hover:scale-100 transition-all origin-right bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-md border border-slate-800 shadow-xl whitespace-nowrap">
            WhatsApp Live Support Active
          </span>
        </button>
      </div>
    </div>
  );
}
