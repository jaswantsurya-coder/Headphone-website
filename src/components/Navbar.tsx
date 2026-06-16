"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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

        {!mounted ? (
          /* Server-side / Initial client render fallback (desktop only, to prevent duplication in HTML output) */
          <>
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

            {/* Hidden mobile trigger element to prevent layout shift during mount */}
            <div className="md:hidden w-5 h-5" />
          </>
        ) : !isMobile ? (
          /* Desktop Navigation (Client Rendered) */
          <>
            {/* Center: Desktop Navigation Links */}
            <div className="flex items-center space-x-8">
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
            <div className="flex items-center">
              <a
                href="#buy"
                className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-[#ff4b00] hover:bg-[#ff621f] hover:shadow-[0_0_15px_rgba(255,75,0,0.4)] transition-all duration-300"
              >
                Pre-order
              </a>
            </div>
          </>
        ) : (
          /* Mobile Navigation Toggle (Client Rendered) */
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown (Client Rendered only) */}
      {mounted && isMobile && isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-lg border-b border-white/5">
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
      )}
    </nav>
  );
}
