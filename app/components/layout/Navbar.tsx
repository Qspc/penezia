"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { LinkWhatsapp } from "../environment/contact";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Katalog", href: "#katalog" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#ff3c00] to-[#f5c542] rounded-lg flex items-center justify-center animate-pulse-glow">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="font-display text-2xl text-white tracking-widest">
              PENEZIA
              {/* <span className="text-[#ff3c00]">CRAFT</span> */}
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#8888a0] hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3c00] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`${LinkWhatsapp}?text=Halo%20PENEZIA%2C%20saya%20mau%20pesan%20seragam%20custom`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#ff3c00] hover:bg-[#ff5a1f] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff3c00]/30"
            >
              Pesan Sekarang
            </a>
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg border border-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-4xl text-white hover:text-[#ff3c00] transition-colors tracking-widest"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={LinkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4 bg-[#ff3c00] text-white font-semibold px-8 py-3.5 rounded-xl text-lg"
            >
              Pesan Sekarang
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
