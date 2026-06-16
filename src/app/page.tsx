"use client";

import { useState } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Volume2,
  Cpu,
  Layers,
  Activity,
  Maximize2,
  Check,
  Disc,
  Compass,
  Radio,
  Sliders
} from "lucide-react";
import Navbar from "@/components/Navbar";
import VideoSequence from "@/components/VideoSequence";
import { motion } from "framer-motion";

type ModelFolder = "frames-30mm" | "frames" | "frames-video";

export default function Home() {
  const [activeModel, setActiveModel] = useState<ModelFolder>("frames-30mm");

  const modelsList = [
    { id: "frames-30mm" as ModelFolder, name: "Driver Architecture" },
    { id: "frames" as ModelFolder, name: "Chassis Integration" },
    { id: "frames-video" as ModelFolder, name: "Cinematic Showcase" },
  ];

  return (
    <div className="relative w-full bg-[#050505] text-[#f5f5f5] font-sans overflow-x-hidden selection:bg-[#ff4b00]/30 selection:text-white">
      <Navbar />

      {/* 1. HERO VIEWPORT */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 pt-24 pb-20">
        {/* Full-bleed background video */}
        <VideoSequence folderName={activeModel} />

        {/* Model Switcher Pill */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 flex items-center bg-[#050505]/80 border border-white/10 backdrop-blur-xl rounded-full p-1 max-w-[95%] overflow-x-auto whitespace-nowrap scrollbar-none shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          {modelsList.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(model.id)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeModel === model.id
                  ? "bg-[#ff4b00] text-white shadow-[0_0_15px_rgba(255,75,0,0.5)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Hero Content Area */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center pointer-events-auto mt-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#050505]/80 border border-[#ff4b00]/25 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,75,0,0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b00] animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#ff4b00] font-sans">
              JBL Live M6
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[clamp(2.4rem,8vw,7rem)] font-extrabold tracking-tight leading-[1.05] font-display text-[#f5f5f5] drop-shadow-xl"
          >
            30mm Precision Driver
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(1.2rem,3vw,2rem)] mt-6 text-[#ff4b00] font-semibold tracking-wide uppercase font-display"
          >
            Compact size. Full-scale sound.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base md:text-[18px] mt-6 text-[#a1a1a1] max-w-2xl leading-[1.6] font-light drop-shadow-md"
          >
            A lightweight dynamic driver engineered for clean vocals, controlled bass, and detailed everyday listening inside a slim wireless headphone design.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
          >
            <a
              href="#engineering"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff4b00] text-white hover:bg-[#ff621f] hover:shadow-[0_0_25px_rgba(255,75,0,0.4)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Engineering</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#specs"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-white text-center"
            >
              View Specs
            </a>
          </motion.div>

          {/* Hero Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 w-full max-w-4xl"
          >
            {[
              "30mm Dynamic Driver",
              "Neodymium Magnet",
              "Copper Voice Coil",
              "Lightweight Diaphragm",
              "Tuned Airflow Chamber"
            ].map((badge, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-xl bg-[#050505]/50 border border-white/5 backdrop-blur-md flex items-center justify-center text-center text-[10px] font-bold uppercase tracking-wider text-white/75 hover:border-[#ff4b00]/30 hover:text-white transition-all duration-300"
              >
                {badge}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Ambient bottom gradient shade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* 2. ENGINEERING SHOWCASE SECTION */}
      <section id="engineering" className="relative z-20 py-32 md:py-48 bg-[#0A0A0C] border-t border-white/5 overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-[#ff4b00]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Header info */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff4b00]">
                Acoustic Engineering
              </span>
              <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-extrabold tracking-tight leading-[1.1] mt-4 font-display text-[#f5f5f5]">
                Small driver.<br />Serious sound.
              </h2>
              <div className="w-16 h-[2px] bg-[#ff4b00] mt-8 mb-8" />
              <p className="text-[16px] md:text-[18px] text-[#a1a1a1] leading-[1.6] font-light max-w-md">
                The 30mm precision driver is tuned to deliver punchy low-end, balanced mids, and crisp highs without adding unnecessary weight. A lightweight diaphragm reacts quickly to transients, while the neodymium magnet system keeps output stable and controlled.
              </p>
            </div>

            {/* Feature cards grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Layers size={22} />,
                  title: "Fast-response diaphragm",
                  text: "A lightweight diaphragm improves clarity and helps vocals, drums, and acoustic details stay sharp."
                },
                {
                  icon: <Zap size={22} />,
                  title: "Neodymium magnetic system",
                  text: "A compact high-strength magnet improves efficiency while keeping the driver slim and lightweight."
                },
                {
                  icon: <Sliders size={22} />,
                  title: "Copper voice coil",
                  text: "Precision-wound copper wiring helps convert signal into clean movement with reduced distortion."
                },
                {
                  icon: <Activity size={22} />,
                  title: "Tuned acoustic chamber",
                  text: "Controlled airflow reduces pressure build-up and helps bass remain tight instead of muddy."
                }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:border-[#ff4b00]/30 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Subtle orange corner glow on hover */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#ff4b00]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#ff4b00]/10 flex items-center justify-center text-[#ff4b00] mb-8 group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#f5f5f5] font-display">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#a1a1a1] mt-4 leading-[1.6] font-light">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACOUSTIC TECHNOLOGY SECTION */}
      <section id="acoustics" className="relative z-20 py-32 md:py-48 bg-[#050505] border-t border-white/5 overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
        
        {/* Glow behind the driver visualization */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ff4b00]/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff4b00]">
            Precision Engineering
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-extrabold tracking-tight leading-[1.1] mt-4 mb-8 font-display text-[#f5f5f5]">
            Acoustic Technology
          </h2>
          <p className="text-base md:text-[18px] text-[#a1a1a1] max-w-2xl mx-auto font-light leading-[1.6] mb-16">
            Explore the advanced mechanical structure that coordinates magnetic fields, coils, and air containment to generate pure, undistorted audio transients.
          </p>

          {/* Technical Diagram Mockup */}
          <div className="relative max-w-5xl mx-auto bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 md:p-12 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#ff4b00]/40" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
              {/* Left Details */}
              <div className="md:col-span-4 text-left space-y-8">
                <div className="border-l-2 border-[#ff4b00] pl-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">01 / Magnetic Flux</h4>
                  <p className="text-xs text-[#a1a1a1] mt-1 font-light">Concentrated neodymium field provides high power output with extremely low spatial distortion.</p>
                </div>
                <div className="border-l-2 border-white/25 pl-4 hover:border-[#ff4b00] transition-colors">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">02 / Heat Dispersion</h4>
                  <p className="text-xs text-[#a1a1a1] mt-1 font-light">Tuned exhaust ports direct thermal energy away from the copper coils, maintaining structural rigidity.</p>
                </div>
              </div>

              {/* Center Visualization Box */}
              <div className="md:col-span-4 flex justify-center py-6">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center bg-[#050505]/60 shadow-[0_0_40px_rgba(255,75,0,0.08)] group hover:border-[#ff4b00]/20 transition-all duration-700">
                  <div className="absolute w-[80%] h-[80%] rounded-full border border-[#ff4b00]/10 animate-pulse" />
                  <div className="absolute w-[60%] h-[60%] rounded-full border border-white/5 flex items-center justify-center">
                    <Disc size={64} className="text-[#ff4b00]/30 animate-[spin_12s_linear_infinite]" />
                  </div>
                  {/* Glowing core */}
                  <div className="w-8 h-8 rounded-full bg-[#ff4b00] opacity-80 shadow-[0_0_25px_#ff4b00] z-10" />
                </div>
              </div>

              {/* Right Details */}
              <div className="md:col-span-4 text-left space-y-8">
                <div className="border-l-2 border-white/25 pl-4 hover:border-[#ff4b00] transition-colors">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">03 / Resonance Filter</h4>
                  <p className="text-xs text-[#a1a1a1] mt-1 font-light">Lightweight composite barriers cancel micro-resonance, allowing high frequencies to stay perfectly linear.</p>
                </div>
                <div className="border-l-2 border-white/25 pl-4 hover:border-[#ff4b00] transition-colors">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">04 / Venting Geometry</h4>
                  <p className="text-xs text-[#a1a1a1] mt-1 font-light">Aerodynamic rear ports optimize airflow resistance, reducing diaphragm counter-pressure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOISE CONTROL SECTION */}
      <section id="noise-control" className="relative z-20 py-32 md:py-48 bg-[#0A0A0C] border-t border-white/5 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Description */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff4b00]">
                Listening Experience
              </span>
              <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-extrabold tracking-tight leading-[1.1] mt-4 font-display text-[#f5f5f5]">
                Tuned for focus, energy, and detail.
              </h2>
              <div className="w-16 h-[2px] bg-[#ff4b00] mt-8 mb-8" />
              <p className="text-[16px] md:text-[18px] text-[#a1a1a1] leading-[1.6] font-light">
                Designed for modern wireless listening, the 30mm driver balances deep bass impact with vocal clarity and smooth highs. It is made for music, movies, calls, and long daily listening sessions.
              </p>
            </div>

            {/* Right Column Highlights */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {[
                {
                  title: "Controlled Bass",
                  desc: "Low frequencies feel full and punchy without overpowering vocals."
                },
                {
                  title: "Clear Vocals",
                  desc: "Midrange tuning keeps voices natural in music, calls, and podcasts."
                },
                {
                  title: "Crisp Highs",
                  desc: "Treble stays detailed and smooth for long listening comfort."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-[#ff4b00]/30 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-lg bg-[#ff4b00]/10 flex items-center justify-center text-[#ff4b00] text-xs font-bold font-sans">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-wide font-display">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#a1a1a1] mt-1 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2 text-[#ff4b00] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Performance Target</span>
                    <Check size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATION SECTION */}
      <section id="specs" className="relative z-20 py-32 md:py-48 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff4b00]">
              Engineering Specsheet
            </span>
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-extrabold tracking-tight leading-[1.1] mt-4 font-display text-white">
              Driver specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Table 1: Driver Component Specifications */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4 font-display text-[#ff4b00]">
                Acoustic Components
              </h3>
              <div className="divide-y divide-white/5">
                {[
                  { label: "Driver Type", val: "30mm Dynamic Driver" },
                  { label: "Magnet", val: "Neodymium" },
                  { label: "Diaphragm", val: "Lightweight polymer composite" },
                  { label: "Voice Coil", val: "Copper-clad precision winding" },
                  { label: "Frequency Response", val: "20Hz – 20kHz" },
                  { label: "Impedance", val: "32Ω" },
                  { label: "Sensitivity", val: "100dB ±3dB" },
                  { label: "Rated Input Power", val: "20mW" },
                  { label: "Maximum Input Power", val: "30mW" },
                  { label: "Total Harmonic Distortion", val: "<0.5% at 1kHz" },
                  { label: "Acoustic Design", val: "Closed-back tuned chamber" },
                  { label: "Primary Use", val: "Wireless headphone audio system" },
                  { label: "Sound Profile", val: "Controlled bass, clear mids, smooth highs" }
                ].map((item, idx) => (
                  <div key={idx} className="py-4 flex justify-between items-center text-sm">
                    <span className="font-semibold text-white/95">{item.label}</span>
                    <span className="font-light text-[#a1a1a1] text-right ml-4">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table 2: Full Headphone Integration Specifications */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4 font-display text-[#ff4b00]">
                System Integration
              </h3>
              <div className="divide-y divide-white/5">
                {[
                  { label: "Bluetooth", val: "Bluetooth 5.4" },
                  { label: "Codecs", val: "SBC, AAC" },
                  { label: "Battery Life", val: "Up to 50 hours playback" },
                  { label: "Charging", val: "USB-C fast charge" },
                  { label: "Microphones", val: "Dual beamforming microphones" },
                  { label: "Noise Control", val: "Adaptive noise reduction and ambient mode" },
                  { label: "Weight", val: "Lightweight everyday design" }
                ].map((item, idx) => (
                  <div key={idx} className="py-4 flex justify-between items-center text-sm">
                    <span className="font-semibold text-white/95">{item.label}</span>
                    <span className="font-light text-[#a1a1a1] text-right ml-4">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRE-ORDER / BUY SECTION */}
      <section id="buy" className="relative z-20 py-32 md:py-48 bg-[#0A0A0C] border-t border-white/5 overflow-hidden">
        {/* Soft background orange glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff4b00]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff4b00]">
            Launch Program
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-extrabold tracking-tight leading-[1.1] mt-4 mb-6 font-display text-white">
            Built for everyday immersion.
          </h2>
          <p className="text-base md:text-[18px] text-[#a1a1a1] max-w-xl mx-auto font-light leading-[1.6] mb-12">
            Experience a compact driver system designed for clean sound, lightweight comfort, and premium wireless listening.
          </p>

          {/* Checkout Card */}
          <div className="bg-[#050505]/60 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-md mx-auto text-left hover:border-[#ff4b00]/30 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <span className="text-xs text-[#ff4b00] uppercase tracking-widest font-bold font-sans">
              Limited Pre-Order
            </span>
            <div className="flex items-baseline justify-between mt-4">
              <h3 className="text-3xl font-extrabold text-[#f5f5f5] font-display">
                JBL Live M6
              </h3>
              <div className="text-right">
                <span className="text-sm text-white/40 line-through mr-2">$149</span>
                <span className="text-3xl font-extrabold text-white text-[#ff4b00] font-display">
                  $129
                </span>
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-6" />

            <ul className="space-y-4 mb-8">
              {[
                "Premium carrying case included",
                "USB-C fast charging",
                "1-year limited warranty",
                "Free shipping on launch orders"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center text-xs text-[#a1a1a1] font-light">
                  <Check size={14} className="text-[#ff4b00] mr-3 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => alert("Pre-order processing configured. Launching checkout...")}
              className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-[#ff4b00] text-white hover:bg-[#ff621f] hover:shadow-[0_0_20px_rgba(255,75,0,0.3)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Add to Pre-order</span>
              <ArrowRight size={14} />
            </button>
            <p className="text-[10px] text-white/35 text-center mt-4 tracking-wide font-light">
              Free shipping & returns. Exclusions apply.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="relative z-20 bg-[#050505] text-white/40 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-sm font-bold tracking-tight mb-4 font-display">
              JBL Live M6
            </h4>
            <p className="text-xs font-light leading-relaxed max-w-xs text-[#a1a1a1]">
              Pushing the boundaries of acoustics to engineer an unmatched compact listening experience.
            </p>
          </div>
          <div>
            <h4 className="text-[#ff4b00] text-xs font-bold uppercase tracking-widest mb-4 font-sans">
              Technology
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#engineering" className="hover:text-white transition-colors">Acoustic Engineering</a></li>
              <li><a href="#acoustics" className="hover:text-white transition-colors">Precision Drivers</a></li>
              <li><a href="#noise-control" className="hover:text-white transition-colors">Sound Profile</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 font-sans">
              Support
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-white transition-colors">Product Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Manuals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty & Repairs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 font-sans">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-white transition-colors">About JBL</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-light">
          <div className="flex flex-col space-y-1">
            <span>© 2026 Harman International Industries, Incorporated. All rights reserved.</span>
            <span className="text-white/20 italic">Concept product page created for design and development showcase.</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
