/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ActivePage } from "../types";
import { ShieldCheck, FileText, Lock, Users, Eye, HelpCircle, ArrowRight, ShieldAlert, CheckCircle } from "lucide-react";
import { AGENCY_EMAIL } from "../data";

interface CommonViewsProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
}

export function PrivacyPolicyView({ setActivePage, darkMode }: CommonViewsProps) {
  const policies = [
    {
      title: "Customer Information Integrity",
      desc: "All incoming client information, personal profiles, business descriptions, and assets are strictly private. We never share, trade, or distribute your credentials under any circumstances.",
      icon: <Users className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Secure Payment Handling",
      desc: "WebCraft Pro does not index, store, or caching any transaction raw keys, bank routing credentials, or financial screenshot files on external unsecure clouds. Processing is managed safely via native secure systems.",
      icon: <Lock className="w-5 h-5 text-cyan-500" />
    },
    {
      title: "Strict Project Confidentiality",
      desc: "Whether you represent a local retailer or a strategic fintech startup, your code architectures, vector designs, brand outlines, and digital models are fully yours. We respect complete non-disclosure agreements.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "No Sharing of Personal Data",
      desc: "We do not sell, rent, or lease your personal information to third-party telemarketers or external digital tracking services. Zero trackers, zero cookie profiling.",
      icon: <Eye className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Protected Communication Core",
      desc: "Our interactive WhatsApp direct dispatches and emails utilize robust transport layers ensuring your project briefings are encrypted and safeguarded from unauthorized snooping.",
      icon: <ShieldAlert className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <div id="privacy-policy-view" className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-2">
        <span className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 inline-block mb-3">
          <ShieldCheck className="w-8 h-8" />
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          WebCraft Pro Privacy Policy
        </h1>
        <p className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          Effective Date: June 19, 2026. Your business trust is our ultimate security.
        </p>
      </section>

      <section className="space-y-6">
        {policies.map((p, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border flex items-start space-x-4 transition duration-250 ${
              darkMode ? "glass border-white/5 shadow-sm" : "bg-white border-slate-100 shadow-sm"
            }`}
          >
            <div className={`p-2.5 rounded-xl ${darkMode ? "bg-slate-800" : "bg-slate-50"}`}>
              {p.icon}
            </div>
            <div>
              <h3 className={`font-bold text-sm sm:text-base mb-1.5 ${darkMode ? "text-white" : "text-slate-900"}`}>
                {p.title}
              </h3>
              <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* governance footer */}
      <section className={`p-6 rounded-2xl text-center border text-xs ${
        darkMode ? "bg-white/5 border-white/5 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-500"
      }`}>
        <p>
          Do you have strict enterprise requirements regarding NDAs or custom data servers? Please address security questions directly to: {" "}
          <a href={`mailto:${AGENCY_EMAIL}`} className="text-blue-500 hover:underline">
            {AGENCY_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

export function TermsAndConditionsView({ setActivePage, darkMode }: CommonViewsProps) {
  const clauses = [
    { num: 1, text: "50% advance payment required.", detail: "All client code assemblies, logo design tasks, and advertising video assets require a verified 50% deposit upfront before entering our queue." },
    { num: 2, text: "Work begins after payment confirmation.", detail: "The active development lifecycle and asset creation is instantly initialized upon screenshot review or general banking confirmation." },
    { num: 3, text: "Remaining payment required before final delivery.", detail: "Live FTP uploads, deployment to production domains, or full HD ad video delivery is held until final fee structure balances are fully settled." },
    { num: 4, text: "Delivery time depends on project complexity.", detail: "Standard landing templates are delivered in 3-5 days. Complex multipage CMS or custom animations can range from 7-15 days depending on features requested." },
    { num: 5, text: "Additional revisions may incur charges.", detail: "Our packages cover reasonable revision structures. Out-of-scope modules or major structural changes late in development will receive clean custom pricing." },
    { num: 6, text: "Clients must provide required content on time.", detail: "In order to meet aggressive delivery metrics, copy texts, product diagrams, brand guidelines, and logos must be dispatched promptly." },
    { num: 7, text: "Payments are non-refundable once work begins.", detail: "Once code production, video rendering, or custom layout structures are actively being drafted, our milestone advances are non-refundable." }
  ];

  return (
    <div id="terms-conditions-view" className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-2">
        <span className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500 inline-block mb-3">
          <FileText className="w-8 h-8" />
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          WebCraft Pro Terms &amp; Conditions
        </h1>
        <p className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          Effective Date: June 19, 2026. Please read our operational guidelines thoroughly.
        </p>
      </section>

      {/* Timeline or Grid list */}
      <section className="space-y-4">
        {clauses.map((clause) => (
          <div
            key={clause.num}
            className={`p-6 rounded-2xl border flex items-start space-x-4 transition ${
              darkMode ? "glass border-white/5 shadow-sm" : "bg-white border-slate-100 shadow-sm"
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-500 font-mono font-bold text-sm flex items-center justify-center shrink-0">
              {clause.num}
            </div>
            <div>
              <h3 className={`font-bold text-sm sm:text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                {clause.text}
              </h3>
              <p className={`text-xs mt-1.5 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                {clause.detail}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center pt-4">
        <button
          onClick={() => {
            setActivePage(ActivePage.Booking);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition cursor-pointer"
        >
          <span>I Accept. Proceed to Booking</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>
    </div>
  );
}
