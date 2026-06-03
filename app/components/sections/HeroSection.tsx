"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { LinkWhatsapp } from "../environment/contact";

const stats = [
  { value: "5000+", label: "Pelanggan Puas" },
  { value: "50+", label: "Jenis Produk" },
  { value: "3 Hari", label: "Produksi Kilat" },
  { value: "100%", label: "Garansi Kualitas" },
];

// SVG apparel shapes as decorative elements
function JerseyShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M60 20 L30 50 L10 45 L20 90 L45 85 L45 200 L155 200 L155 85 L180 90 L190 45 L170 50 L140 20 C130 30 110 38 100 38 C90 38 70 30 60 20Z"
        fill="currentColor"
        stroke="rgba(255,60,0,0.4)"
        strokeWidth="1.5"
      />
      <path
        d="M75 20 C80 50 95 55 100 55 C105 55 120 50 125 20"
        fill="none"
        stroke="rgba(255,60,0,0.6)"
        strokeWidth="1.5"
      />
      <path d="M50 100 L150 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path d="M45 130 L155 130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle
        cx="100"
        cy="140"
        r="20"
        fill="rgba(255,60,0,0.2)"
        stroke="rgba(255,60,0,0.4)"
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="145"
        textAnchor="middle"
        fill="rgba(255,60,0,0.8)"
        fontSize="12"
        fontFamily="Bebas Neue, sans-serif"
      >
        NO
      </text>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff3c00]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f5c542]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3c00]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating jersey decorations */}
      <div
        className="absolute right-8 top-24 md:right-16 lg:right-32 opacity-20 md:opacity-30 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <JerseyShape className="w-32 h-36 md:w-48 md:h-56 text-[#ff3c00]/40" />
      </div>
      <div
        className="absolute left-4 bottom-32 md:left-12 opacity-10 md:opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <JerseyShape className="w-24 h-28 md:w-36 md:h-42 text-[#f5c542]/30" />
      </div>
      <div
        className="absolute right-1/3 top-16 opacity-10 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <JerseyShape className="w-16 h-20 text-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-[#ff3c00]/30 text-[#ff7c40] text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <Star size={14} className="fill-[#f5c542] text-[#f5c542]" />
            <span>Sahabat Custom Purwakarta</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.9] mb-6"
          >
            <span className="block text-white">SERAGAM</span>
            <span className="block gradient-text">CUSTOM</span>
            <span className="block text-white/80">SPESIALIST</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#8888a0] text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Wujudkan identitas tim & bisnis Anda dengan jersey, kemeja PDH, polo, jaket, dan kaos
            premium — desain bebas, bahan terbaik, pengiriman ke seluruh Indonesia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href={`${LinkWhatsapp}?text=Halo%20PENEZIA%2C%20saya%20mau%20pesan%20seragam%20custom`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-[#ff3c00] hover:bg-[#ff5a1f] text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#ff3c00]/35"
            >
              Pesan Sekarang
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#katalog"
              className="group inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all duration-200"
            >
              <Play size={16} className="fill-white" />
              Lihat Katalog
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display text-3xl md:text-4xl gradient-text">
                  {stat.value}
                </span>
                <span className="text-[#8888a0] text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}
