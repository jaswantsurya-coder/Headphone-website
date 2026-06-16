"use client";

import { useState } from "react";
import { Shield, Battery, Radio, Compass, ArrowRight, Award, Zap, Volume2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import VideoSequence from "@/components/VideoSequence";

type ModelFolder = "frames" | "frames-30mm" | "frames-video";

export default function Home() {
  const [activeModel, setActiveModel] = useState<ModelFolder>("frames");

  const modelsList = [
    { id: "frames" as ModelFolder, name: "JBL Tour M6 (40mm)" },
    { id: "frames-30mm" as ModelFolder, name: "JBL Live M6 (30mm)" },
    { id: "frames-video" as ModelFolder, name: "Cinematic Showcase" },
  ];

  return (
    <div className="relative w-full bg-[#050505] text-white">
      <Navbar />

      {/* 1. HERO VIEWPORT - LOOPS AUTOMATICALLY LIKE A VIDEO */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center px-6">
        {/* Full-bleed background video sequence */}
        <VideoSequence folderName={activeModel} />

        {/* Model Switcher Pill (Floating Top Center, premium interactive UI) */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex items-center bg-[#050505]/60 border border-white/10 backdrop-blur-md rounded-full p-1 max-w-[95%] overflow-x-auto whitespace-nowrap scrollbar-none">
          {modelsList.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(model.id)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeModel === model.id
                  ? "bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white shadow-[0_0_12px_rgba(0,214,255,0.3)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Hero Copy (Centered overlay) */}
        <div className="relative z-20 text-center max-w-3xl flex flex-col items-center pointer-events-auto mt-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#050505]/65 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">
              Introducing the Flagship
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 drop-shadow-lg">
            JBL Tour M6
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-white/90 font-medium tracking-tight drop-shadow-md">
            Silence, perfected.
          </p>
          <p className="text-sm md:text-base mt-4 text-white/60 max-w-lg leading-relaxed font-light drop-shadow-sm">
            Flagship wireless noise cancelling, re‑engineered for a world that never stops.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#buy"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,214,255,0.4)] transition-all flex items-center justify-center space-x-2"
            >
              <span>Pre-order Now</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#technology"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold border border-white/20 bg-[#050505]/40 backdrop-blur-sm hover:bg-white/5 hover:border-white/40 transition-all text-white text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Ambient bottom gradient shade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* 2. DEDICATED ENGINEERING SHOWCASE SECTION */}
      <section id="engineering" className="relative z-20 py-24 bg-[#0A0A0C] border-t border-white/5 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0050FF]">
            Engineering Showcase
          </span>
          <h2 className="text-[26px] font-bold tracking-tight leading-tight mt-3 text-white">
            Precision-engineered for silence.
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] mt-6" />
          <p className="text-sm md:text-base mt-6 text-white/60 leading-relaxed font-light space-y-4">
            Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
            Every component is tuned for balance, power, and comfort—hour after hour.
          </p>
        </div>
      </section>

      {/* 3. DEDICATED NOISE CANCELLING SECTION */}
      <section id="anc" className="relative z-20 py-24 bg-[#050505] border-t border-white/5 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full text-left md:text-right flex flex-col md:items-end">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00D6FF]">
            Adaptive Isolation
          </span>
          <h2 className="text-[26px] font-bold tracking-tight leading-tight mt-3 text-white">
            Adaptive noise cancelling, redefined.
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#00D6FF] to-[#0050FF] mt-6" />
          <ul className="text-sm md:text-base mt-6 text-white/60 leading-relaxed font-light space-y-3">
            <li className="flex items-center md:justify-end space-x-2">
              <span>Multi-microphone array listens in every direction</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] hidden md:block" />
            </li>
            <li className="flex items-center md:justify-end space-x-2">
              <span>Real-time noise analysis adjusts to your environment</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] hidden md:block" />
            </li>
            <li className="flex items-center md:justify-end space-x-2">
              <span>Your music stays pure—planes, trains, and crowds fade away</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] hidden md:block" />
            </li>
          </ul>
        </div>
      </section>

      {/* 4. DEDICATED SOUND AND HERITAGE SECTION */}
      <section id="sound" className="relative z-20 py-24 bg-[#0A0A0C] border-t border-white/5 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0050FF]">
            JBL Audio Heritage
          </span>
          <h2 className="text-[26px] font-bold tracking-tight leading-tight mt-3 text-white">
            Immersive, lifelike sound.
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] mt-6" />
          <p className="text-sm md:text-base mt-6 text-white/60 leading-relaxed font-light">
            High-performance drivers unlock detail, depth, and texture in every track. AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
          </p>
        </div>
      </section>

      {/* 5. DYNAMIC FEATURE BENTO GRID */}
      <section id="technology" className="relative z-20 py-24 bg-[#0A0A0C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D6FF] bg-[#00D6FF]/10 px-3 py-1 rounded-full">
              Full Showcase
            </span>
            <h2 className="text-[26px] font-bold tracking-tight mt-6 text-white">
              Redefining acoustic technology.
            </h2>
            <p className="text-sm md:text-base mt-4 text-white/50 leading-relaxed font-light">
              Explore the advanced features that make JBL Tour M6 the pinnacle of personal audio engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Processor */}
            <div className="md:col-span-2 group relative bg-[#050505] border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:border-[#0050FF]/40 transition-all duration-500">
              <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-radial from-[#0050FF]/10 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0050FF]/15 flex items-center justify-center text-[#0050FF] mb-8">
                  <Shield size={22} />
                </div>
                <h3 className="text-[26px] font-bold tracking-tight text-white">
                  JBL V2 Noise Processor
                </h3>
                <p className="text-sm text-white/55 mt-4 leading-relaxed font-light max-w-xl">
                  Re-engineered from the ground up, our custom silicon processes surrounding sound at 96kHz to cancel high-frequency vocals and wind noise in real time, delivering complete auditory isolation.
                </p>
              </div>
              <a href="#" className="mt-8 flex items-center space-x-2 text-xs font-semibold text-[#00D6FF] group-hover:text-white transition-colors w-fit pointer-events-auto">
                <span>View engineering whitepaper</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 2: Battery */}
            <div className="group relative bg-[#050505] border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:border-[#00D6FF]/40 transition-all duration-500">
              <div className="absolute -top-1/4 -right-1/4 w-[200px] h-[200px] rounded-full bg-gradient-radial from-[#00D6FF]/10 to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00D6FF]/15 flex items-center justify-center text-[#00D6FF] mb-8">
                  <Battery size={22} />
                </div>
                <h3 className="text-[26px] font-bold tracking-tight text-white">
                  50-Hour Power
                </h3>
                <p className="text-sm text-white/55 mt-4 leading-relaxed font-light">
                  A new high-density solid-state battery architecture gives you up to 50 hours of playback with ANC active. Fast charging delivers 5 hours of power in just 3 minutes.
                </p>
              </div>
              <div className="mt-8 text-xs font-bold text-white/30 uppercase tracking-widest">
                USB-C Quick Charge
              </div>
            </div>

            {/* Card 3: Spatial Audio */}
            <div className="group relative bg-[#050505] border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:border-[#00D6FF]/40 transition-all duration-500">
              <div className="absolute -top-1/4 -right-1/4 w-[200px] h-[200px] rounded-full bg-gradient-radial from-[#00D6FF]/10 to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00D6FF]/15 flex items-center justify-center text-[#00D6FF] mb-8">
                  <Radio size={22} />
                </div>
                <h3 className="text-[26px] font-bold tracking-tight text-white">
                  JBL Spatial Sound
                </h3>
                <p className="text-sm text-white/55 mt-4 leading-relaxed font-light">
                  Dynamic head tracking anchors the sound source to your environment. Feel like you are sitting front row at a live concert or inside a professional recording studio.
                </p>
              </div>
              <div className="mt-8 text-xs font-bold text-white/30 uppercase tracking-widest">
                Dolby Atmos Compatible
              </div>
            </div>

            {/* Card 4: Materials */}
            <div className="md:col-span-2 group relative bg-[#050505] border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:border-[#0050FF]/40 transition-all duration-500">
              <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-radial from-[#0050FF]/10 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0050FF]/15 flex items-center justify-center text-[#0050FF] mb-8">
                  <Compass size={22} />
                </div>
                <h3 className="text-[26px] font-bold tracking-tight text-white">
                  Crafted for Comfort
                </h3>
                <p className="text-sm text-white/55 mt-4 leading-relaxed font-light max-w-xl">
                  Featuring ultra-soft, pressure-relieving foam ear pads encased in premium bio-based synthetic leather. The reinforced carbon-fiber headband distributes weight for all-day comfort.
                </p>
              </div>
              <a href="#" className="mt-8 flex items-center space-x-2 text-xs font-semibold text-[#0050FF] group-hover:text-white transition-colors w-fit pointer-events-auto">
                <span>Explore comfort metrics</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS */}
      <section id="specs" className="relative z-20 py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0050FF]">
              Engineering Specifications
            </span>
            <h2 className="text-[26px] font-bold tracking-tight mt-4 text-white">
              Every detail matters.
            </h2>
          </div>

          <div className="divide-y divide-white/5">
            {[
              { category: "Acoustics", spec: "40mm Dome Type Driver Unit (or 30mm Slim driver), Neodymium magnets, 4Hz - 45kHz frequency response." },
              { category: "Noise Cancelling", spec: "Dual JBL V2 Noise Cancelling Processor, 8 microphones (4 per side) with wind reduction." },
              { category: "Connectivity", spec: "Bluetooth® 5.4, Multipoint connection (up to 3 devices), LE Audio support, LDAC / AAC / SBC codecs." },
              { category: "Battery Life", spec: "Up to 50 hours (ANC On), Up to 65 hours (ANC Off), USB-C Power Delivery compatible." },
              { category: "Smart Features", spec: "Speak-to-Chat, Adaptive Sound Control, Quick Attention Mode, Wear detection sensor." },
              { category: "Weight", spec: "238 grams (Ultra-light design, 12% lighter than previous models)." },
            ].map((item, idx) => (
              <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <span className="text-sm font-semibold tracking-wide text-white/95">{item.category}</span>
                <span className="text-sm font-light text-white/50 leading-relaxed md:col-span-2">{item.spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRE-ORDER / BUY SECTION */}
      <section id="buy" className="relative z-20 py-24 bg-[#0A0A0C] border-t border-white/5 overflow-hidden">
        {/* Soft neon background glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#0050FF]/5 to-transparent blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#0050FF]/15 to-[#00D6FF]/15 border border-[#00D6FF]/25 mb-8">
            <Award size={14} className="text-[#00D6FF]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#00D6FF]">
              Special Launch Program
            </span>
          </div>
          
          <h2 className="text-[26px] font-extrabold tracking-tight leading-none text-white">
            Secure your soundstage.
          </h2>
          <p className="text-sm md:text-base mt-6 text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Pre-order the JBL Tour M6 today. Enjoy priority shipping, exclusive launch pricing, and a complimentary premium carrying case.
          </p>

          {/* Checkout Card */}
          <div className="bg-[#050505]/60 border border-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-md mx-auto mt-12 text-left hover:border-[#0050FF]/30 transition-all pointer-events-auto">
            <span className="text-xs text-[#00D6FF] uppercase tracking-widest font-bold">In stock soon</span>
            <div className="flex items-baseline justify-between mt-4">
              <h3 className="text-2xl font-bold text-white">JBL Tour M6</h3>
              <div className="text-right">
                <span className="text-sm text-white/40 line-through mr-2">$399</span>
                <span className="text-2xl font-extrabold text-white">$349</span>
              </div>
            </div>
            
            <div className="h-[1px] bg-white/5 my-6" />

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-xs text-white/75 font-light">
                <Zap size={14} className="text-[#0050FF] mr-3" />
                <span>Complimentary Carbon Carrying Case ($50 value)</span>
              </li>
              <li className="flex items-center text-xs text-white/75 font-light">
                <Volume2 size={14} className="text-[#0050FF] mr-3" />
                <span>3 months of JBL Premium Audio subscription</span>
              </li>
              <li className="flex items-center text-xs text-white/75 font-light">
                <Shield size={14} className="text-[#0050FF] mr-3" />
                <span>2-year extended global warranty</span>
              </li>
            </ul>

            <button
              onClick={() => alert("Pre-order processing configured. Launching JBL checkout...")}
              className="w-full py-4 rounded-xl text-xs font-bold bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white hover:brightness-110 shadow-lg hover:shadow-[0_0_20px_rgba(0,80,255,0.3)] transition-all flex items-center justify-center space-x-2"
            >
              <span>Add to Pre-Order</span>
              <ArrowRight size={14} />
            </button>
            <p className="text-[10px] text-white/35 text-center mt-4">
              Free shipping & returns. Exclusions apply.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="relative z-20 bg-[#050505] text-white/40 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-sm font-bold tracking-tight mb-4">JBL Tour M6</h4>
            <p className="text-xs font-light leading-relaxed max-w-xs">
              Pushing the boundaries of acoustics and silence to engineer an unmatched listening experience.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Products</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-white transition-colors">JBL Tour M6</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JBL Tour One M5</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JBL Live Pro 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JBL CLUB</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Support</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-white transition-colors">Product Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Manuals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty & Repairs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Corporate</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-white transition-colors">About JBL</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-light">
          <span>© 2026 Harman International Industries, Incorporated. All rights reserved. JBL is a trademark of Harman International Industries, Incorporated.</span>
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
