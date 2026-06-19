/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ActivePage, ServicePackage } from "../types";
import { SERVICES_DATA, AGENCY_WHATSAPP } from "../data";
import {
  Globe,
  Layout,
  Zap,
  Image,
  Video,
  PenTool,
  Award,
  Check,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Coins
} from "lucide-react";

interface ServicesViewProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
  setSelectedPrePackage?: (packageName: string) => void;
}

export default function ServicesView({
  setActivePage,
  darkMode,
  setSelectedPrePackage
}: ServicesViewProps) {
  
  const websitePackages = SERVICES_DATA.filter((s) => s.category === "website");
  const addonServices = SERVICES_DATA.filter((s) => s.category === "addon");

  const handleSelectAndNavigate = (packageName: string) => {
    if (setSelectedPrePackage) {
      setSelectedPrePackage(packageName);
    }
    setActivePage(ActivePage.Booking);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppCustomQuery = (pName: string) => {
    const text = encodeURIComponent(`Hi WebCraft Pro, I would like to get custom pricing or discuss terms for: ${pName}`);
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="services-page-view" className="space-y-20 py-8">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <span className="text-xs font-extrabold text-blue-500 uppercase tracking-widest block animate-pulse">
          Services Portfolio &amp; Pricing
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          Our Precision Solutions
        </h1>
        <p className={`text-base leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          WebCraft Pro builds top-tier custom websites, high-CTR ads, and modern branding assets. Review our responsive packages or contact us for a customized schedule.
        </p>
      </section>

      {/* SECTION 1: Website Development Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 border-slate-800/10 gap-4">
          <div>
            <h2 className={`text-2xl font-extrabold tracking-tight flex items-center space-x-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              <Globe className="w-6 h-6 text-blue-500 shrink-0" />
              <span>Website Development Packages</span>
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Standard high-converting responsive frameworks, fully tested and optimized.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>50% Refundable Milestone Scheme</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websitePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                pkg.badge 
                  ? darkMode 
                    ? "glass border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)] glow-blue scale-[1.03]" 
                    : "bg-white border-blue-500 shadow-xl scale-[1.03]"
                  : darkMode 
                    ? "glass border-white/5 hover:border-blue-500/20 hover:scale-[1.01]" 
                    : "bg-white border-slate-100 shadow-sm hover:shadow-lg"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md uppercase tracking-widest">
                  {pkg.badge}
                </span>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                    {pkg.iconName === "Globe" && <Globe className="w-6 h-6" />}
                    {pkg.iconName === "Layout" && <Layout className="w-6 h-6" />}
                    {pkg.iconName === "Zap" && <Zap className="w-6 h-6" />}
                  </span>
                  
                  <span className={`text-xs font-bold font-mono uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
                  }`}>
                    {pkg.deliveryTime}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline space-x-1.5 mt-2">
                    <span className="text-3xl font-extrabold text-blue-500">{pkg.price}</span>
                    <span className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>/ project</span>
                  </div>
                </div>

                <ul className="space-y-3.5 border-t pt-5 border-slate-800/10 text-sm">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? "text-slate-300" : "text-slate-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectAndNavigate(pkg.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-widest cursor-pointer transition-all ${
                    pkg.badge 
                      ? "text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20"
                      : darkMode 
                        ? "text-blue-400 bg-blue-950/40 border border-blue-900/50 hover:bg-blue-950/80" 
                        : "text-blue-700 bg-blue-50 hover:bg-blue-100"
                  }`}
                >
                  Book Website Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Additional design / video / logo assets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b pb-4 border-slate-800/10">
          <h2 className={`text-2xl font-extrabold tracking-tight flex items-center space-x-2 ${
            darkMode ? "text-white" : "text-slate-900"
            }`}>
            <Coins className="w-6 h-6 text-sky-500 shrink-0" />
            <span>Additional Digital Assets &amp; Services</span>
          </h2>
          <p className={`text-xs sm:text-sm mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Turbocharge your marketing funnel with premium high-CTR graphics, visual scripts and custom assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addonServices.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 ${
                pkg.badge
                  ? darkMode
                    ? "glass border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.1)] scale-[1.01]"
                    : "bg-gradient-to-b from-white to-sky-50 border-sky-400 shadow-md"
                  : darkMode
                  ? "glass border-white/5 hover:border-blue-500/20 hover:scale-[1.01]"
                  : "bg-white border-slate-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    {pkg.iconName === "Image" && <Image className="w-5 h-5" />}
                    {pkg.iconName === "Video" && <Video className="w-5 h-5" />}
                    {pkg.iconName === "PenTool" && <PenTool className="w-5 h-5" />}
                    {pkg.iconName === "Award" && <Award className="w-5 h-5" />}
                  </span>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-150 text-slate-600"
                  }`}>
                    {pkg.deliveryTime}
                  </span>
                </div>

                <div>
                  <h3 className={`font-bold text-sm ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {pkg.name}
                  </h3>
                  <div className="text-xl font-extrabold text-sky-500 mt-1">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-2 border-t pt-3 border-slate-800/10 text-xs">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? "text-slate-400" : "text-slate-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                {pkg.price === "Custom Pricing" ? (
                  <button
                    onClick={() => handleWhatsAppCustomQuery(pkg.name)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 font-mono transition-all"
                  >
                    Discuss custom project
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelectAndNavigate(pkg.name)}
                    className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      darkMode 
                        ? "text-sky-400 bg-slate-800 hover:bg-slate-700" 
                        : "text-sky-700 bg-sky-50 hover:bg-sky-100"
                    }`}
                  >
                    Select asset
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: The 50% Process Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 lg:p-12 rounded-3xl border transition ${
          darkMode 
            ? "glass border-white/5 shadow-md" 
            : "bg-blue-50/20 border-slate-100 shadow-md"
        }`}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
              Need a Custom Hybrid Digital Blueprint?
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Does your company demand customized API structures, specialized booking aggregations, or unique marketing campaign video strategies? Contact our design engineering leads directly layout out custom estimates.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setActivePage(ActivePage.Contact);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 cursor-pointer shadow-md"
              >
                Go to Contacts Page
              </button>
              
              <button
                onClick={() => handleWhatsAppCustomQuery("Custom Combo Requirement")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/5 flex items-center justify-center space-x-1"
              >
                <span>WhatsApp Blueprint Request</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
