"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Engineering", href: "#engineering" },
    { label: "Acoustics", href: "#acoustics" },
    { label: "Noise Control", href: "#noise-control" },
    { label: "Specs", href: "#specs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#050505]/75 backdrop-blur-md border-white/5 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Brand */}
        <a
          href="#"
          className="text-white text-lg font-extrabold tracking-tight hover:opacity-90 transition-opacity font-display"
        >
          JBL <span className="font-light text-[#ff4b00] ml-1 text-sm tracking-widest uppercase">Live M6</span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase text-white/60 hover:text-white transition-colors tracking-widest font-bold font-sans"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#buy"
            className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-[#ff4b00] hover:bg-[#ff621f] hover:shadow-[0_0_15px_rgba(255,75,0,0.4)] transition-all duration-300"
          >
            Pre-order
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase text-white/75 hover:text-white transition-colors tracking-widest font-bold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-4 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff4b00] text-white hover:bg-[#ff621f] transition-all"
          >
            Pre-order
          </a>
        </div>
      </div>
    </nav>
  );
}
