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
  Sliders,
  Sparkles,
  Heart,
  Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import VideoSequence from "@/components/VideoSequence";
import { motion } from "framer-motion";

type ModelFolder = "frames-30mm" | "frames" | "frames-video";

interface FeatureCard {
  iconName: string;
  title: string;
  text: string;
}

interface TabContent {
  id: ModelFolder;
  name: string;
  eyebrow: string;
  headline: string;
  subheading: string;
  body: string;
  badges: string[];
  ctaText: string;
  features: FeatureCard[];
  layoutStyle: "left" | "center-left";
  gradientOverlayStyle: string;
  typographyClass: string;
  showDiagram: boolean;
  hideTechnicalBackground: boolean;
}

const tabData: Record<ModelFolder, TabContent> = {
  "frames-30mm": {
    id: "frames-30mm",
    name: "Driver Architecture",
    eyebrow: "Acoustic Engineering",
    headline: "30mm Precision Driver",
    subheading: "Compact size. Full-scale sound.",
    body: "A lightweight 30mm dynamic driver tuned for clean vocals, controlled bass, and detailed everyday listening. Its fast-response diaphragm, copper voice coil, and neodymium magnet system work together to deliver clarity without adding bulk.",
    badges: [
      "30mm Dynamic Driver",
      "Copper Voice Coil",
      "Neodymium Magnet",
      "Tuned Bass Chamber"
    ],
    ctaText: "Explore Engineering",
    features: [
      {
        iconName: "Layers",
        title: "Lightweight diaphragm",
        text: "Reacts quickly for sharper vocals and cleaner transients."
      },
      {
        iconName: "Sliders",
        title: "Copper voice coil",
        text: "Precision winding improves signal response and reduces distortion."
      },
      {
        iconName: "Zap",
        title: "Neodymium magnet",
        text: "Compact magnetic strength for efficient, controlled output."
      },
      {
        iconName: "Activity",
        title: "Tuned airflow",
        text: "Internal acoustic airflow helps bass stay tight and balanced."
      }
    ],
    layoutStyle: "left",
    gradientOverlayStyle: "radial-gradient(circle at 70% 45%, rgba(255,75,0,0.08), transparent 35%), linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.10) 100%)",
    typographyClass: "font-display",
    showDiagram: true,
    hideTechnicalBackground: false
  },
  "frames": {
    id: "frames",
    name: "Chassis Integration",
    eyebrow: "Structural Design",
    headline: "Integrated Comfort Chassis",
    subheading: "Built around sound, shaped for daily wear.",
    body: "The Live M6 chassis balances acoustic performance with long-session comfort. A reinforced headband, soft memory-foam ear cushions, precision hinge system, and sealed earcup chamber keep the headphone stable, comfortable, and acoustically controlled.",
    badges: [
      "Comfort Frame",
      "Foldable Hinge",
      "Memory Foam",
      "Sealed Earcup",
      "Lightweight Build"
    ],
    ctaText: "Explore Chassis",
    features: [
      {
        iconName: "Shield",
        title: "Reinforced headband",
        text: "Distributes pressure evenly for long listening sessions."
      },
      {
        iconName: "Maximize2",
        title: "Precision hinge system",
        text: "Smooth folding movement with strong mechanical stability."
      },
      {
        iconName: "Heart",
        title: "Memory-foam cushions",
        text: "Soft seal improves comfort and passive noise isolation."
      },
      {
        iconName: "Disc",
        title: "Sealed acoustic chamber",
        text: "Helps reduce sound leakage and keeps playback focused."
      }
    ],
    layoutStyle: "left",
    gradientOverlayStyle: "radial-gradient(circle at 70% 45%, rgba(255,75,0,0.08), transparent 35%), linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.10) 100%)",
    typographyClass: "font-sora tracking-tight",
    showDiagram: true,
    hideTechnicalBackground: false
  },
  "frames-video": {
    id: "frames-video",
    name: "Cinematic Showcase",
    eyebrow: "Cinematic Preview",
    headline: "Designed for Immersion",
    subheading: "A studio-inspired headphone experience.",
    body: "A cinematic view of the Live M6 as a complete product — refined materials, bold acoustic engineering, and a clean wireless silhouette designed for music, movies, calls, and focused listening.",
    badges: [
      "Wireless Audio",
      "Premium Finish",
      "Cinematic Design",
      "Everyday Listening"
    ],
    ctaText: "Experience Immersion",
    features: [
      {
        iconName: "Compass",
        title: "Premium silhouette",
        text: "Matte black finish with clean JBL-inspired orange accents."
      },
      {
        iconName: "Sun",
        title: "Studio lighting",
        text: "Product-focused visuals with deep contrast and soft highlights."
      },
      {
        iconName: "Radio",
        title: "Everyday wireless",
        text: "Built for music, calls, movies, and long daily use."
      },
      {
        iconName: "Check",
        title: "Launch-ready design",
        text: "Clean product presentation suitable for a premium landing page."
      }
    ],
    layoutStyle: "center-left",
    gradientOverlayStyle: "radial-gradient(circle at 50% 50%, rgba(255,75,0,0.05), transparent 45%), linear-gradient(90deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.05) 100%)",
    typographyClass: "font-display uppercase tracking-wide",
    showDiagram: false,
    hideTechnicalBackground: true
  }
};

const getIcon = (name: string) => {
  switch (name) {
    case "Layers": return <Layers size={22} />;
    case "Sliders": return <Sliders size={22} />;
    case "Zap": return <Zap size={22} />;
    case "Activity": return <Activity size={22} />;
    case "Shield": return <Shield size={22} />;
    case "Maximize2": return <Maximize2 size={22} />;
    case "Heart": return <Heart size={22} />;
    case "Disc": return <Disc size={22} />;
    case "Compass": return <Compass size={22} />;
    case "Sun": return <Sparkles size={22} />;
    case "Radio": return <Radio size={22} />;
    case "Check": return <Check size={22} />;
    default: return <Cpu size={22} />;
  }
};

export default function Home() {
  const [activeModel, setActiveModel] = useState<ModelFolder>("frames-30mm");
  const activeTab = tabData[activeModel];

  const modelsList = [
    { id: "frames-30mm" as ModelFolder, name: "Driver Architecture" },
    { id: "frames" as ModelFolder, name: "Chassis Integration" },
    { id: "frames-video" as ModelFolder, name: "Cinematic Showcase" },
  ];

  return (
    <div className="relative w-full bg-[#050505] text-[#f5f5f5] font-sans overflow-x-hidden selection:bg-[#ff4b00]/30 selection:text-white">
      <Navbar />

      {/* 1. HERO VIEWPORT */}
      <section className="relative w-full min-h-[100dvh] sm:min-h-screen overflow-hidden flex items-center justify-center px-6 pt-28 pb-20">
        {/* Full-bleed background video: Clearly visible at native 80% opacity set inside VideoSequence */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <VideoSequence folderName={activeModel} />
        </div>

        {/* Dynamic Gradient Overlay: Scrim on the left, orange radial glow on the right */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-all duration-700 ease-in-out"
          style={{
            background: activeTab.gradientOverlayStyle,
            opacity: 1,
          }}
        />

        {/* Edge Vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.25)_100%)]" />

        {/* Dynamic decorative tech grid lines */}
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,75,0,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,75,0,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none transition-opacity duration-700 z-10 ${
            activeTab.hideTechnicalBackground ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Model Switcher Pill */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-40 flex items-center bg-[#050505]/65 border border-white/5 backdrop-blur-2xl rounded-full p-1.5 max-w-[95%] overflow-x-auto whitespace-nowrap scrollbar-none shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {modelsList.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(model.id)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeModel === model.id
                  ? "bg-[#ff4b00] text-white shadow-[0_0_20px_rgba(255,75,0,0.4)]"
                  : "text-[#a1a1a1] hover:text-[#f5f5f5] hover:bg-white/5"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Hero Content Area */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-center min-h-[calc(100vh-6rem)] mt-12 md:mt-16">
          <motion.div
            key={activeModel}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[640px] flex flex-col text-left items-start sm:text-center sm:items-center sm:mx-auto md:text-left md:items-start md:ml-0 md:mr-auto px-5 sm:px-0 transition-all duration-700 ease-in-out"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
            }}
          >
            {/* Cinematic localized radial scrim behind the text */}
            <div
              className="absolute pointer-events-none -z-10 select-none transition-all duration-700 ease-in-out inset-[-32px_-24px] sm:inset-[-40px_-50px] md:inset-[-40px_-70px] blur-[10px] sm:blur-[12px] md:blur-[16px] rounded-[40px]"
              style={{
                background: activeModel === "frames-video"
                  ? "radial-gradient(ellipse at center, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.16) 75%, transparent 100%)"
                  : "radial-gradient(ellipse at center, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 40%, rgba(0,0,0,0.12) 70%, transparent 100%)",
              }}
            />

            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#050505]/80 border border-[#ff4b00]/25 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,75,0,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b00] animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#ff4b00] font-sans">
                {activeTab.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-[clamp(3rem,7vw,6.5rem)] font-extrabold tracking-tight leading-[1.05] text-[#f5f5f5] drop-shadow-xl ${activeTab.typographyClass}`}
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {activeTab.headline}
            </h1>

            {/* Subheading */}
            <h2
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] mt-6 text-[#ff4b00] font-extrabold tracking-wide uppercase font-display"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              {activeTab.subheading}
            </h2>

            {/* Body Description */}
            <p
              className="text-base md:text-[17px] mt-6 text-[#d8d8d8] leading-[1.6] font-normal max-w-2xl"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              {activeTab.body}
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto justify-start sm:justify-center md:justify-start"
            >
              <a
                href="#engineering"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#ff4b00] text-white hover:bg-[#ff621f] hover:shadow-[0_0_25px_rgba(255,75,0,0.4)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{activeTab.ctaText}</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#specs"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-white text-center cursor-pointer"
              >
                View Specs
              </a>
            </div>

            {/* Technical Badges */}
            <div
              className="mt-10 flex flex-wrap gap-2.5 w-full justify-start sm:justify-center md:justify-start"
            >
              {activeTab.badges.map((badge, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-center text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/85 hover:border-[#ff4b00]/30 hover:text-white transition-all duration-300"
                >
                  {badge}
                </div>
              ))}
            </div>
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
                {activeTab.eyebrow}
              </span>
              <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold tracking-tight leading-[1.1] mt-4 font-display text-[#f5f5f5]">
                {activeTab.id === "frames-30mm" ? (
                  <>Small driver.<br />Serious sound.</>
                ) : activeTab.id === "frames" ? (
                  <>Structure.<br />Optimized comfort.</>
                ) : (
                  <>Complete.<br />Immersion ready.</>
                )}
              </h2>
              <div className="w-16 h-[2px] bg-[#ff4b00] mt-8 mb-8" />
              <p className="text-[16px] md:text-[18px] text-[#b8b8b8] leading-[1.6] font-light max-w-md">
                {activeTab.id === "frames-30mm" ? (
                  "The 30mm precision driver is tuned to deliver punchy low-end, balanced mids, and crisp highs without adding unnecessary weight. A lightweight diaphragm reacts quickly to transients, while the neodymium magnet system keeps output stable and controlled."
                ) : activeTab.id === "frames" ? (
                  "The Live M6 comfort chassis integrates a reinforced metal-spring headband structure with plush memory foam ear cushions to distribute clamping force evenly, ensuring fatigue-free listening all day long."
                ) : (
                  "Live M6 is built for the modern multi-device life. Effortlessly switch between phone, laptop, and media hub with studio-grade wireless audio transmission and zero noticeable lag."
                )}
              </p>
            </div>

            {/* Feature cards grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeTab.features.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:border-[#ff4b00]/30 hover:-translate-y-1 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Subtle orange corner glow on hover */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#ff4b00]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#ff4b00]/10 flex items-center justify-center text-[#ff4b00] mb-8 group-hover:scale-105 transition-transform duration-300">
                      {getIcon(card.iconName)}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#f5f5f5] font-display">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#b8b8b8] mt-4 leading-[1.6] font-light">
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
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none transition-opacity duration-500 ${
          activeTab.hideTechnicalBackground ? "opacity-10" : "opacity-50"
        }`} />
        
        {/* Glow behind the visualization */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ff4b00]/5 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff4b00]">
            Precision Engineering
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold tracking-tight leading-[1.1] mt-4 mb-8 font-display text-[#f5f5f5]">
            Acoustic Technology
          </h2>
          <p className="text-base md:text-[18px] text-[#b8b8b8] max-w-2xl mx-auto font-light leading-[1.6] mb-16">
            Explore the advanced mechanical structure that coordinates magnetic fields, coils, and air containment to generate pure, undistorted audio transients.
          </p>

          {/* Technical Diagram or Cinematic Showroom depending on active tab */}
          {activeTab.showDiagram ? (
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
                    <p className="text-xs text-[#b8b8b8] mt-1 font-light">Concentrated neodymium field provides high power output with extremely low spatial distortion.</p>
                  </div>
                  <div className="border-l-2 border-white/25 pl-4 hover:border-[#ff4b00] transition-colors">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">02 / Heat Dispersion</h4>
                    <p className="text-xs text-[#b8b8b8] mt-1 font-light">Tuned exhaust ports direct thermal energy away from the copper coils, maintaining structural rigidity.</p>
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
                    <p className="text-xs text-[#b8b8b8] mt-1 font-light">Lightweight composite barriers cancel micro-resonance, allowing high frequencies to stay perfectly linear.</p>
                  </div>
                  <div className="border-l-2 border-white/25 pl-4 hover:border-[#ff4b00] transition-colors">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">04 / Venting Geometry</h4>
                    <p className="text-xs text-[#b8b8b8] mt-1 font-light">Aerodynamic rear ports optimize airflow resistance, reducing diaphragm counter-pressure.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative max-w-5xl mx-auto rounded-3xl p-8 md:p-16 overflow-hidden border border-[#ff4b00]/15 bg-gradient-to-b from-[#0A0A0C] to-[#050505] shadow-[0_0_50px_rgba(255,75,0,0.08)]">
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <Headphones size={80} className="text-[#ff4b00] animate-pulse animate-duration-1000" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display">Pure Acoustic Comfort</h3>
                <p className="text-[#b8b8b8] max-w-xl font-light text-sm md:text-base leading-relaxed">
                  JBL Live M6 is engineered for pure high-fidelity output. Without cables or clutter, its sleek matte finish is complemented by signature copper accents, creating a timeless look that fits any modern workspace or lifestyle.
                </p>
              </div>
            </div>
          )}
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
              <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold tracking-tight leading-[1.1] mt-4 font-display text-[#f5f5f5]">
                Tuned for focus, energy, and detail.
              </h2>
              <div className="w-16 h-[2px] bg-[#ff4b00] mt-8 mb-8" />
              <p className="text-[16px] md:text-[18px] text-[#b8b8b8] leading-[1.6] font-light">
                Designed for modern wireless listening, the JBL Live M6 balances deep bass impact with vocal clarity and smooth highs. It is made for music, movies, calls, and long daily listening sessions.
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
                      <p className="text-sm text-[#b8b8b8] mt-1 font-light">
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
            <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold tracking-tight leading-[1.1] mt-4 font-display text-white">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Table 1: Driver Component Specifications */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4 font-display text-[#ff4b00]">
                Acoustic Architecture
              </h3>
              <div className="divide-y divide-white/5">
                {[
                  { label: "Product Name", val: "JBL Live M6" },
                  { label: "Product Type", val: "Wireless Over-Ear Headphones" },
                  { label: "Driver Type", val: "30mm Dynamic Driver" },
                  { label: "Magnet", val: "Neodymium" },
                  { label: "Voice Coil", val: "Copper precision winding" },
                  { label: "Frequency Response", val: "20Hz – 20kHz" },
                  { label: "Impedance", val: "32Ω" },
                  { label: "Sensitivity", val: "100dB ±3dB" },
                  { label: "Sound Profile", val: "Controlled bass, clear mids, smooth highs" }
                ].map((item, idx) => (
                  <div key={idx} className="py-4 flex justify-between items-center text-sm">
                    <span className="font-semibold text-white/95">{item.label}</span>
                    <span className="font-light text-[#b8b8b8] text-right ml-4">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table 2: Full Headphone Integration Specifications */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-4 font-display text-[#ff4b00]">
                Connectivity & Build
              </h3>
              <div className="divide-y divide-white/5">
                {[
                  { label: "Bluetooth", val: "Bluetooth 5.4" },
                  { label: "Audio Codecs", val: "SBC, AAC" },
                  { label: "Noise Control", val: "Adaptive noise reduction and ambient mode" },
                  { label: "Microphones", val: "Dual beamforming microphones" },
                  { label: "Battery Life", val: "Up to 50 hours playback" },
                  { label: "Charging", val: "USB-C fast charge" },
                  { label: "Comfort", val: "Memory-foam ear cushions" },
                  { label: "Build", val: "Foldable lightweight chassis" }
                ].map((item, idx) => (
                  <div key={idx} className="py-4 flex justify-between items-center text-sm">
                    <span className="font-semibold text-white/95">{item.label}</span>
                    <span className="font-light text-[#b8b8b8] text-right ml-4">{item.val}</span>
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
          <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold tracking-tight leading-[1.1] mt-4 mb-6 font-display text-white">
            Built for everyday immersion.
          </h2>
          <p className="text-base md:text-[18px] text-[#b8b8b8] max-w-xl mx-auto font-light leading-[1.6] mb-12">
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
                <span className="text-3xl font-extrabold text-[#ff4b00] font-display">
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
                <li key={idx} className="flex items-center text-xs text-[#b8b8b8] font-light">
                  <Check size={14} className="text-[#ff4b00] mr-3 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => alert("Pre-order processing configured. Launching checkout...")}
              className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-[#ff4b00] text-white hover:bg-[#ff621f] hover:shadow-[0_0_20px_rgba(255,75,0,0.3)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
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
            <p className="text-xs font-light leading-relaxed max-w-xs text-[#b8b8b8]">
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
