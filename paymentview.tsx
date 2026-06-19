/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { ActivePage } from "../types";
import { SERVICES_DATA, AGENCY_WHATSAPP } from "../data";
import {
  ShieldAlert,
  Coins,
  CheckCircle,
  Copy,
  Upload,
  ArrowRight,
  Sparkles,
  QrCode,
  Inbox,
  User,
  Receipt,
  RotateCcw,
  AlertCircle
} from "lucide-react";

interface PaymentViewProps {
  setActivePage: (page: ActivePage) => void;
  darkMode: boolean;
}

export default function PaymentView({ setActivePage, darkMode }: PaymentViewProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("basic-web");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // File Upload states matching Usability Patterns
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploaderSuccess, setUploaderSuccess] = useState<boolean>(false);
  const [clientName, setClientName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Calculate pricing breakdown
  const isCustomPrice = selectedService.price.toLowerCase().includes("custom");
  const totalAmount = isCustomPrice ? "Custom Quote Required" : selectedService.price;
  const fiftyPercentAdvance = isCustomPrice 
    ? "Custom Estimate Required" 
    : `₹${((selectedService.priceNumber || 0) * 0.5).toLocaleString("en-IN")}`;
  const finalFiftyPercent = isCustomPrice 
    ? "Custom Estimate Required" 
    : `₹${((selectedService.priceNumber || 0) * 0.5).toLocaleString("en-IN")}`;

  const paymentSteps = [
    { step: 1, name: "Select Service", desc: "Choose the package option or custom project you want to book." },
    { step: 2, name: "Confirm Project", desc: "Consult 1-on-1 on WhatsApp to lock down features & timeline." },
    { step: 3, name: "Pay 50% Advance", desc: "Settle 50% using UPI or bank transfers to start your queue." },
    { step: 4, name: "Development Starts", desc: "Our creative team builds high-converting layouts immediately." },
    { step: 5, name: "Review & Approval", desc: "You review drafts and sign off on revisions." },
    { step: 6, name: "Final Payment", desc: "Clear the remaining 50% balance before delivery." },
    { step: 7, name: "Project Delivery", desc: "Receive all production vector codes and launch live!" }
  ];

  const upiAddresses = [
    { id: "gpay", name: "Google Pay / GPay UPI", val: "arnav20061704@oksbi" },
    { id: "phonepe", name: "PhonePe / YBL UPI", val: "arnav20061704@ybl" },
    { id: "paytm", name: "Paytm Standard UPI", val: "arnav20061704@paytm" }
  ];

  const bankDetails = {
    bankName: "State Bank of India (SBI)",
    accName: "WebCraft Pro Solutions",
    accNum: "39485720194",
    ifsc: "SBIN0012345",
    branch: "Mumbai Corporate HQ, India"
  };

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Drag and drop events matching Usability guidelines
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "draglave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setScreenshotFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshotFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitReceiptDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshotFile || !clientName.trim()) return;
    
    // Simulate API submission and success receipt checklist states
    setUploaderSuccess(true);
  };

  const handleResetReceiptUploader = () => {
    setScreenshotFile(null);
    setUploaderSuccess(false);
    setClientName("");
  };

  const handleWhatsAppNotify = () => {
    const textStr = `Hi WebCraft Pro, I have paid the 50% advance payment of ${fiftyPercentAdvance} for ${selectedService.name}. Client Name: ${clientName}. Please verify my receipt screenshot!`;
    window.open(`https://wa.me/91${AGENCY_WHATSAPP}?text=${encodeURIComponent(textStr)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="payment-portal-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Page Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">
          Secure Payment Portal
        </span>
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
          Settle Your Project Milestone
        </h1>
        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          Review our step-by-step payment pipeline. Upload deposit verification to kickstart design.
        </p>
      </section>

      {/* Critical notice bar */}
      <div className="flex items-start space-x-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 max-w-5xl mx-auto">
        <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <strong>Important Notice:</strong> 50% Advance Payment Is Strictly Required Before Starting Any Software Code, Assets Design, or Video Editing. Work commences instantly upon payment confirmation.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Calculator & payment channels */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Card 1: Interactive calculator */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-100 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-5 flex items-center space-x-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              <Coins className="w-5 h-5 text-blue-500" />
              <span>Milestone Price Calculator</span>
            </h3>

            <div className="space-y-6">
              {/* Dropdown service selector */}
              <div className="space-y-1.5">
                <label className={`text-xs font-bold uppercase block tracking-wider ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Choose service booked:
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className={`w-full p-3 rounded-xl text-sm transition outline-none border ${
                    darkMode 
                      ? "bg-white/5 border-white/10 text-white focus:border-blue-500" 
                      : "bg-slate-50 border-slate-200 text-slate-950 focus:border-blue-600"
                  }`}
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id} className={darkMode ? "bg-slate-950" : "bg-white"}>
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Table breakdown */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className={`p-3.5 rounded-xl border ${darkMode ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-150"}`}>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block mb-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Total Fee
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-blue-500">
                    {totalAmount}
                  </span>
                </div>

                <div className={`p-3.5 rounded-xl border relative overflow-hidden ${
                  darkMode ? "bg-blue-600/10 border-blue-500/25" : "bg-blue-50/40 border-blue-200"
                }`}>
                  {/* micro badge */}
                  <div className="absolute -top-1 -right-1 bg-yellow-500 text-[8px] font-bold text-white px-1.5 rounded-bl">50%</div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block mb-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Due Now
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-emerald-500">
                    {fiftyPercentAdvance}
                  </span>
                </div>

                <div className={`p-3.5 rounded-xl border ${darkMode ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-150"}`}>
                  <span className={`text-[10px] uppercase font-bold tracking-wider block mb-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    On Delivery
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-indigo-400">
                    {finalFiftyPercent}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: UPI Payment methods */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              UPI Payment Channels
            </h3>
            <p className={`text-xs mb-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Make pay deposits of <strong className="text-emerald-500">{fiftyPercentAdvance}</strong> instantly by copying the official UPI IDs listed:
            </p>

            <div className="space-y-3.5 col-span-12">
              {upiAddresses.map((upi) => (
                <div
                  key={upi.id}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    darkMode ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold block uppercase tracking-wider ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      {upi.name}
                    </span>
                    <span className={`text-sm font-mono font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {upi.val}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyText(upi.val, upi.id)}
                    className={`p-2 rounded-lg border transition ${
                      copiedKey === upi.id 
                        ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/30" 
                        : darkMode 
                          ? "bg-slate-800 border-slate-700 text-slate-300 hover:text-white" 
                          : "bg-white border-slate-300 text-slate-700 hover:bg-slate-100"
                    }`}
                    title="Copy UPI address"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Bank account transfers */}
          <div className={`p-6 sm:p-8 rounded-3xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-100 shadow-md"
          }`}>
            <h3 className={`font-bold text-base mb-5 ${darkMode ? "text-white" : "text-slate-900"}`}>
              Direct Bank IMPS / NEFT Transfer
            </h3>

            <div className={`p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              darkMode ? "bg-white/5 border border-white/5" : "bg-slate-50 border border-slate-200"
            }`}>
              {[
                { label: "Bank Name", value: bankDetails.bankName },
                { label: "Account Name", value: bankDetails.accName },
                { label: "Account Number", value: bankDetails.accNum, raw: true },
                { label: "IFSC Code", value: bankDetails.ifsc, raw: true },
                { label: "Bank Branch", value: bankDetails.branch }
              ].map((b, i) => (
                <div key={i} className={i === 4 ? "sm:col-span-2" : "col-span-1"}>
                  <span className={`text-[10px] font-bold uppercase tracking-widest block mb-0.5 ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}>
                    {b.label}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs sm:text-sm font-semibold ${
                      b.raw ? "font-mono font-bold text-blue-500 text-sm" : darkMode ? "text-slate-200" : "text-slate-800"
                    }`}>
                      {b.value}
                    </span>
                    {b.raw && (
                      <button
                        onClick={() => handleCopyText(b.value, b.label)}
                        className="p-1 rounded hover:bg-slate-800 text-slate-500 hover:text-white transition"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column: QR code display & Screenshot drag-and-drop receipt uploader */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* QR Code generator placeholder */}
          <div className={`p-6 rounded-3xl border text-center relative overflow-hidden ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-150 shadow-md"
          }`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
            
            <h3 className={`font-extrabold text-sm uppercase tracking-wider mb-4 flex items-center justify-center space-x-1.5 ${
              darkMode ? "text-blue-400" : "text-blue-700"
            }`}>
              <QrCode className="w-4 h-4" />
              <span>GPay / PhonePe Scan QR</span>
            </h3>

            {/* Custom crafted Vector QR Generator card */}
            <div className="bg-white p-5 rounded-2xl w-48 h-48 mx-auto border border-slate-200 flex flex-col justify-between items-center shadow-inner relative group">
              <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-xs rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-[10px] font-extrabold text-white uppercase bg-blue-600 px-2 py-1 rounded">
                  WebCraft Payment QR
                </span>
              </div>
              
              <div className="grid grid-cols-4 gap-2.5 w-full h-full p-2">
                {/* Simulated high-fidelity agency QR matrix block */}
                {[...Array(16)].map((_, idx) => {
                  const isBlack = (idx % 3 === 0) || (idx % 7 === 1) || (idx === 0) || (idx === 3) || (idx === 12) || (idx === 15);
                  return (
                    <div
                      key={idx}
                      className={`rounded-sm transition-all ${
                        isBlack ? "bg-slate-900" : "bg-white"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            <p className={`text-[10px] leading-relaxed mt-4 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Settle deposits swiftly. Point GPay client scanner at this template workspace QR representation. 
            </p>
          </div>

          {/* Screenshot deposit receipt uploader matching guidelines */}
          <div className={`p-6 rounded-3xl border ${
            darkMode ? "glass border-white/5 shadow-md" : "bg-white border-slate-150 shadow-md"
          }`}>
            
            {uploaderSuccess ? (
              <div id="receipt-upload-success" className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${darkMode ? "text-white" : "text-slate-950"}`}>
                    Screenshot Received!
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Deposit receipt for <strong>{clientName}</strong> is logged. Our accounts team will reconcile in 5-15 minutes!
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleWhatsAppNotify}
                    className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition"
                  >
                    Ping WhatsApp Audit
                  </button>
                  <button
                    onClick={handleResetReceiptUploader}
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition rounded-lg text-[10px] font-mono"
                  >
                    Reset Receipt Uploader
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitReceiptDetails} className="space-y-4">
                
                <div>
                  <h4 className={`font-bold text-xs uppercase tracking-wider mb-2 ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}>
                    Payment Screenshots &amp; Receipts
                  </h4>
                  <p className={`text-[11px] leading-relaxed mb-4 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Please drag-and-drop or click to choose your confirmation ticket. Once verified, active queue begins.
                  </p>
                </div>

                {/* Client Name Input */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    Sender Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Rahul Sharma / Zenith Ltd"
                      className={`w-full pl-9 pr-3 py-2 rounded-lg text-xs outline-none border ${
                        darkMode 
                          ? "bg-white/5 border-white/10 text-white focus:border-blue-500" 
                          : "bg-slate-50 border-slate-200 text-slate-950 focus:border-blue-600 focus:bg-white"
                      }`}
                    />
                  </div>
                </div>

                {/* Drag Area */}
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileInput}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${
                    dragActive 
                      ? "border-blue-500 bg-blue-500/10 text-white" 
                      : darkMode 
                        ? "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:border-white/20" 
                        : "border-slate-200 bg-slate-50/50 text-slate-500 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  <Inbox className="w-8 h-8 mx-auto text-slate-500 mb-2.5" />
                  
                  {screenshotFile ? (
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-sky-500 block truncate max-w-xs mx-auto">
                        {screenshotFile.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        {(screenshotFile.size / 1024).toFixed(1)} KB (Ready)
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xs font-bold block mb-0.5">
                        Choose Image Screenshot
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        Drag &amp; drop file here, or click browser explore
                      </span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!screenshotFile || !clientName.trim()}
                  className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white disabled:bg-slate-800 disabled:text-slate-600 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow transition-all duration-200 cursor-pointer"
                >
                  Settle Deposit Screenshot
                </button>

              </form>
            )}

          </div>

          {/* Workflow Steps overview */}
          <div className="p-4 rounded-xl border border-slate-800/10 bg-slate-500/5 col-span-12">
            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
              Payment Milestones Process
            </h4>
            <div className="space-y-2 text-xs">
              {paymentSteps.slice(2, 7).map((pts) => (
                <div key={pts.step} className="flex items-start space-x-1.5 leading-relaxed">
                  <span className="font-mono font-bold text-blue-500">{pts.step}.</span>
                  <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                    <strong>{pts.name}:</strong> {pts.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
