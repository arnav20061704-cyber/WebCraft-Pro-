/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ActivePage } from "../types";
import { AGENCY_EMAIL, AGENCY_WHATSAPP } from "../data";
import {
  Sparkles,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  Shield,
  FileText,
  Heart
} from "lucide-react";

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
}

export default function Footer({ setActivePage, darkMode }: FooterProps) {
  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "WhatsApp Chat",
      url: `https://wa.me/91${AGENCY_WHATSAPP}?text=Hi%20WebCraft%20Pro!`
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram Profile",
      url: "https://instagram.com"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook Page",
      url: "https://facebook.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn Profile",
      url: "https://linkedin.com"
    }
  ];

  return (
    <footer
      id="footer-app"
      className={`border-t transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-slate-300 border-slate-900"
          : "bg-slate-900 text-slate-300 border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Presentation */}
          <div className="flex flex-col space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handlePageChange(ActivePage.Home)}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 p-0.5">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-sans font-extrabold text-lg text-white tracking-tight">
                WebCraft <span className="text-blue-500 font-mono text-xs">PRO</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We design and construct top-tier digital systems, advertisement campaigns, custom brand designs, logo aesthetics, and conversion-optimized websites.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 hover:text-white transition-all text-slate-400"
                  title={social.label}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Core Pages Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
              Core Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home Page", page: ActivePage.Home },
                { label: "About Our Agency", page: ActivePage.About },
                { label: "Services & Pricing", page: ActivePage.Services },
                { label: "Online Booking Form", page: ActivePage.Booking },
                { label: "Secure Payment Portal", page: ActivePage.Payment },
                { label: "Inquire & Map", page: ActivePage.Contact }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageChange(link.page)}
                    className="flex items-center hover:text-blue-400 font-medium transition-colors cursor-pointer group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages & Help */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
              Governance & Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handlePageChange(ActivePage.PrivacyPolicy)}
                  className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-sky-500" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageChange(ActivePage.TermsAndConditions)}
                  className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-500" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                Policy Fact
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                All premium clients are protected by our strict project confidentiality and data privacy mandates.
              </p>
            </div>
          </div>

          {/* Official Communications Channel */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
              Direct Contact
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">General Mailbox</span>
                  <a
                    href={`mailto:${AGENCY_EMAIL}`}
                    className="hover:text-blue-400 transition-colors font-medium text-white"
                  >
                    {AGENCY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Support Channel</span>
                  <a
                    href={`https://wa.me/91${AGENCY_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors font-semibold text-white"
                  >
                    +91 {AGENCY_WHATSAPP}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-900/40 text-blue-300 border border-blue-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
                  Active Indian Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© {currentYear} WebCraft Pro. All corporate rights reserved.</p>
          <div className="flex items-center space-x-1.5">
            <span>Powered by</span>
            <span className="font-semibold text-white">WebCraft Pro Engineering</span>
            <Heart className="w-3.5 h-3.5 text-blue-500 fill-current" />
            <span>&amp; Design Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
