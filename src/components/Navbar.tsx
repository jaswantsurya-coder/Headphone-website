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
    { label: "Overview", href: "#overview" },
    { label: "Technology", href: "#technology" },
    { label: "Noise Cancelling", href: "#anc" },
    { label: "Specs", href: "#specs" },
    { label: "Buy", href: "#buy" },
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
          className="text-white text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          JBL <span className="font-light text-white/50 ml-1 text-sm tracking-widest">Tour M6</span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-white/60 hover:text-white transition-colors tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#buy"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium text-white rounded-full group bg-gradient-to-br from-[#0050FF] to-[#00D6FF] group-hover:from-[#0050FF] group-hover:to-[#00D6FF] hover:text-white focus:ring-2 focus:outline-none focus:ring-[#00D6FF]/50 transition-all"
          >
            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-[#050505] rounded-full group-hover:bg-opacity-0">
              Experience Tour M6
            </span>
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
              className="text-sm text-white/75 hover:text-white transition-colors tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-4 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,80,255,0.3)]"
          >
            Experience Tour M6
          </a>
        </div>
      </div>
    </nav>
  );
}
