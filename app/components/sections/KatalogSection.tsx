"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { LinkWhatsapp } from "../environment/contact";

// SVG Product Illustrations
function JerseyIllustration() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="j1" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff3c00" />
          <stop offset="1" stopColor="#ff7c40" />
        </linearGradient>
      </defs>
      <path
        d="M55 18 L28 48 L8 43 L16 85 L38 80 L38 162 L122 162 L122 80 L144 85 L152 43 L132 48 L105 18C98 28 82 34 80 34C78 34 62 28 55 18Z"
        fill="url(#j1)"
        opacity="0.9"
      />
      <path
        d="M55 18C60 38 75 44 80 44C85 44 100 38 105 18"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path d="M38 100 L122 100" stroke="white" strokeWidth="1" opacity="0.2" />
      <rect x="62" y="110" width="36" height="30" rx="4" fill="rgba(0,0,0,0.3)" />
      <text
        x="80"
        y="131"
        textAnchor="middle"
        fill="white"
        fontSize="18"
        fontFamily="Bebas Neue, sans-serif"
        fontWeight="bold"
      >
        10
      </text>
      <path d="M38 70 L60 65 M122 70 L100 65" stroke="white" strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

function KemejaPDHIllustration() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="k1" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M52 15 L25 45 L5 40 L14 82 L36 77 L36 165 L124 165 L124 77 L146 82 L155 40 L135 45 L108 15C102 25 88 30 80 30C72 30 58 25 52 15Z"
        fill="url(#k1)"
        opacity="0.9"
      />
      <path d="M80 30 L80 165" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <circle cx="80" cy="55" r="3" fill="white" opacity="0.6" />
      <circle cx="80" cy="75" r="3" fill="white" opacity="0.6" />
      <circle cx="80" cy="95" r="3" fill="white" opacity="0.6" />
      <rect
        x="52"
        y="15"
        width="28"
        height="22"
        rx="3"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      <rect
        x="80"
        y="15"
        width="28"
        height="22"
        rx="3"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      <rect
        x="50"
        y="80"
        width="24"
        height="16"
        rx="3"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
    </svg>
  );
}

function KaosPoloIllustration() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="p1" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#064e3b" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M50 20 L20 50 L5 45 L12 84 L35 78 L35 165 L125 165 L125 78 L148 84 L155 45 L140 50 L110 20C103 30 90 36 80 36C70 36 57 30 50 20Z"
        fill="url(#p1)"
        opacity="0.9"
      />
      <path
        d="M65 20 C68 35 76 40 80 40 C84 40 92 35 95 20"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <rect x="72" y="20" width="16" height="12" rx="3" fill="rgba(0,0,0,0.3)" />
      <circle cx="80" cy="55" r="3" fill="white" opacity="0.5" />
      <circle cx="80" cy="68" r="3" fill="white" opacity="0.5" />
      <path d="M50 100 L110 100" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
    </svg>
  );
}

function JaketIllustration() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="ja1" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1c1917" />
          <stop offset="1" stopColor="#44403c" />
        </linearGradient>
      </defs>
      <path
        d="M45 18 L15 55 L5 50 L10 90 L35 84 L35 168 L125 168 L125 84 L150 90 L155 50 L145 55 L115 18 L100 30 L80 35 L60 30Z"
        fill="url(#ja1)"
        opacity="0.95"
      />
      <path d="M80 35 L80 168" stroke="#ff3c00" strokeWidth="2" opacity="0.7" />
      <rect
        x="50"
        y="22"
        width="30"
        height="18"
        rx="3"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <rect
        x="80"
        y="22"
        width="30"
        height="18"
        rx="3"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <rect
        x="38"
        y="85"
        width="22"
        height="14"
        rx="3"
        fill="rgba(255,60,0,0.3)"
        stroke="rgba(255,60,0,0.5)"
        strokeWidth="1"
      />
      <path
        d="M80 35 L80 40 M80 40 C80 40 60 38 55 42 M80 40 C80 40 100 38 105 42"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RompiIllustration() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="r1" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4c1d95" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path
        d="M50 20 L30 50 L30 168 L130 168 L130 50 L110 20 L95 32 L80 36 L65 32Z"
        fill="url(#r1)"
        opacity="0.9"
      />
      <path d="M80 36 L80 168" stroke="rgba(245,197,66,0.6)" strokeWidth="2" />
      <path
        d="M50 20 C50 20 55 15 80 12 C105 15 110 20 110 20"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />
      <rect
        x="40"
        y="80"
        width="28"
        height="18"
        rx="4"
        fill="rgba(245,197,66,0.2)"
        stroke="rgba(245,197,66,0.4)"
        strokeWidth="1"
      />
      <rect
        x="92"
        y="80"
        width="28"
        height="18"
        rx="4"
        fill="rgba(245,197,66,0.2)"
        stroke="rgba(245,197,66,0.4)"
        strokeWidth="1"
      />
      <rect
        x="62"
        y="120"
        width="36"
        height="22"
        rx="4"
        fill="rgba(0,0,0,0.3)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
    </svg>
  );
}

function KaosIllustration() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="ka1" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#881337" />
          <stop offset="1" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      <path
        d="M55 18 L28 48 L8 43 L16 85 L38 80 L38 162 L122 162 L122 80 L144 85 L152 43 L132 48 L105 18C98 28 82 34 80 34C78 34 62 28 55 18Z"
        fill="url(#ka1)"
        opacity="0.9"
      />
      <path
        d="M55 18C60 38 75 44 80 44C85 44 100 38 105 18"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <text
        x="80"
        y="120"
        textAnchor="middle"
        fill="white"
        fontSize="32"
        fontFamily="Bebas Neue, sans-serif"
        opacity="0.4"
      >
        PC
      </text>
      <path d="M50 140 L110 140" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
    </svg>
  );
}

const products = [
  {
    name: "Jersey Sport",
    desc: "Jersey futsal, basket, voli, & sepak bola. Full sublimasi, custom nama & nomor.",
    tag: "Best Seller",
    tagColor: "#ff3c00",
    Illustration: "/galeri/katalog/foto-jersey-1.jpeg",
    bgFrom: "#200a00",
    bgTo: "#3a1000",
    minOrder: "Min. 6 pcs",
    startPrice: "Rp 85.000",
  },
  {
    name: "Kemeja PDH",
    desc: "Kemeja seragam instansi & perusahaan. Bordir logo, lengan panjang/pendek.",
    tag: "Populer",
    tagColor: "#3b82f6",
    Illustration: "/galeri/katalog/foto-kameja-1.jpeg",
    bgFrom: "#000d20",
    bgTo: "#001a3a",
    minOrder: "Min. 12 pcs",
    startPrice: "Rp 95.000",
  },
  {
    name: "Kaos Polo",
    desc: "Polo shirt premium untuk seragam kantor, komunitas, dan event korporat.",
    tag: "Premium",
    tagColor: "#10b981",
    Illustration: "/galeri/katalog/foto-polo-1.jpeg",
    bgFrom: "#001a0d",
    bgTo: "#00301a",
    minOrder: "Min. 12 pcs",
    startPrice: "Rp 85.000",
  },
  {
    name: "Jaket",
    desc: "Jaket varsity, bomber, dan windbreaker. Custom patch, bordir, & zipper.",
    tag: "Eksklusif",
    tagColor: "#f5c542",
    Illustration: "/galeri/katalog/foto-jaket-1.jpeg",
    bgFrom: "#0f0d0b",
    bgTo: "#1f1b18",
    minOrder: "Min. 6 pcs",
    startPrice: "Rp 150.000",
  },
  {
    name: "Rompi",
    desc: "Rompi multi-pocket untuk industri, logistik, & lapangan. Bahan Taslan tebal.",
    tag: "Industri",
    tagColor: "#c084fc",
    Illustration: "/galeri/katalog/foto-rompi-1.jpeg",
    bgFrom: "#0d0520",
    bgTo: "#1a0a38",
    minOrder: "Min. 6 pcs",
    startPrice: "Rp 95.000",
  },
  {
    name: "Kaos Custom",
    desc: "Kaos sablon DTF, screen printing, & sublimasi. Cocok untuk merchandise & event.",
    tag: "Serba Bisa",
    tagColor: "#f43f5e",
    Illustration: "/galeri/katalog/foto-kaos-1.jpeg",
    bgFrom: "#1a0008",
    bgTo: "#2d0010",
    minOrder: "Min. 12 pcs",
    startPrice: "Rp 45.000",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function KatalogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const waBase = LinkWhatsapp;

  return (
    <section id="katalog" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5c542]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff3c00] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Produk Unggulan
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">
            KATALOG <span className="gradient-text">PRODUK</span>
          </h2>
          <p className="text-[#8888a0] text-lg max-w-xl mx-auto">
            Semua kebutuhan seragam custom tim & bisnis Anda ada di sini
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, i) => {
            const { Illustration } = product;
            const waMsg = encodeURIComponent(
              `Halo Penezia! Saya ingin pesan ${product.name} custom. Bisa minta info lebih lanjut?`,
            );
            return (
              <motion.div
                key={i}
                variants={cardVariant}
                className="card-hover group relative rounded-2xl overflow-hidden border border-white/6 flex flex-col"
                style={{
                  background: `linear-gradient(145deg, ${product.bgFrom}, ${product.bgTo})`,
                }}
              >
                {/* Tag */}
                {/* <div
                  className="absolute top-4 left-4 z-10 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: `${product.tagColor}25`,
                    color: product.tagColor,
                    border: `1px solid ${product.tagColor}50`,
                  }}
                >
                  {product.tag}
                </div> */}

                {/* Illustration area */}
                <div className="relative flex items-center justify-center h-72 lg:h-80 p-6 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background: `radial-gradient(circle at 50% 60%, ${product.tagColor}, transparent 70%)`,
                    }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={product.Illustration}
                      alt={product.name}
                      className="
      w-[90%]
      max-w-[280px]
      object-contain
      drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:-translate-y-2
    "
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-white font-bold text-lg">{product.name}</h3>
                    <p className="text-[#8888a0] text-sm mt-1 leading-relaxed">{product.desc}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-auto pt-3 border-t border-white/6">
                    <div>
                      {/* <span className="text-[#8888a0] text-xs">{product.minOrder}</span> */}
                      <div className="text-white text-lg font-semibold">
                        Mulai {product.startPrice}
                      </div>
                    </div>
                    <a
                      href={`${waBase}?${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: product.tagColor }}
                    >
                      <MessageCircle size={14} />
                      Pesan
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-[#ff3c00]/30 p-8 md:p-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a0800, #0a0a0f)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff3c00]/10 via-transparent to-[#f5c542]/5 pointer-events-none" />
          <h3 className="font-display text-3xl md:text-5xl text-white mb-3 relative z-10">
            ADA KEBUTUHAN <span className="gradient-text">LAINNYA?</span>
          </h3>
          <p className="text-[#8888a0] mb-6 relative z-10">
            Silakan diskusikan terlebih dahulu untuk kebutuhan seragam custom yang tidak ada di
            katalog. Kami siap membantu mencarikan solusi terbaik untuk Anda!
          </p>
          <a
            href={`${LinkWhatsapp}?text=Halo%20PENEZIA%2C%20saya%20mau%20pesan%20seragam%20custom`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 bg-[#ff3c00] hover:bg-[#ff5a1f] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff3c00]/30"
          >
            <ShoppingBag size={16} />
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
