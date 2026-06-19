/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActivePage } from "../types";
import { Menu, X, Sun, Moon, Sparkles, MessageSquare } from "lucide-react";
import { AGENCY_WHATSAPP } from "../data";

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({
  activePage,
  setActivePage,
  darkMode,
  setDarkMode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", page: ActivePage.Home },
    { label: "About Us", page: ActivePage.About },
    { label: "Services", page: ActivePage.Services },
    { label: "Online Booking", page: ActivePage.Booking },
    { label: "Payment Portal", page: ActivePage.Payment },
    { label: "Contact Us", page: ActivePage.Contact },
  ];

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent("Hello WebCraft Pro, I would like to inquire about your services!");
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      id="header-app"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        darkMode ? "bg-[#05060a]/80 text-slate-200 border-b border-white/5" : "bg-white/80 text-slate-900 border-b border-slate-200"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handlePageChange(ActivePage.Home)}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 p-0.5 shadow-md">
              <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-sky-400 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300 -z-10"></div>
            </div>
            <div>
              <span className="font-sans font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 bg-clip-text text-transparent">
                WebCraft
              </span>
              <span className="font-mono text-xs block -mt-1 font-semibold tracking-widest text-blue-500 uppercase">
                PRO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {menuItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handlePageChange(item.page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? "bg-blue-950/60 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                      : darkMode
                      ? "text-slate-300 hover:text-white hover:bg-slate-900/60"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls & Quick Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
                darkMode ? "text-amber-400 hover:bg-slate-900/60" : "text-indigo-600 hover:bg-slate-100"
              }`}
              title={darkMode ? "Switch to light theme" : "Switch to custom neon gradient theme"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Quick Action */}
            <button
              id="header-quick-action-whatsapp"
              onClick={handleWhatsAppContact}
              className="flex items-center space-x-1 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-md shadow-blue-500/10 hover:shadow-blue-500/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              id="theme-toggle-btn-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
                darkMode ? "text-amber-400 hover:bg-slate-900" : "text-indigo-600 hover:bg-slate-100"
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-hud-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "text-slate-300 hover:text-white hover:bg-slate-900" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className={`md:hidden border-t px-4 py-3 space-y-2 transition-all ${
            darkMode ? "bg-[#05060a]/95 border-white/5 backdrop-blur-lg" : "bg-white border-slate-100"
          }`}
        >
          {menuItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handlePageChange(item.page)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? darkMode
                      ? "bg-blue-950/60 text-blue-400 border-l-4 border-blue-500 pl-3"
                      : "bg-blue-50 text-blue-700 border-l-4 border-blue-600 pl-3"
                    : darkMode
                    ? "text-slate-300 hover:bg-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              id="mobile-quick-action-whatsapp"
              onClick={handleWhatsAppContact}
              className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Query</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
