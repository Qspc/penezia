"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Palette, Zap, Wallet, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Bahan Premium",
    desc: "Material grade-A terpilih: Dryfit, Polyester Sport, Cotton Combed 30s & 24s, Taslan, dan lebih banyak pilihan eksklusif.",
    color: "#f5c542",
  },
  {
    icon: Palette,
    title: "Custom Desain Bebas",
    desc: "Desain full custom, logo, nomor punggung, nama pemain, pattern, warna bebas. Tim desainer kami siap membantu.",
    color: "#ff3c00",
  },
  {
    icon: Zap,
    title: "Produksi Cepat",
    desc: "Proses kilat 3–7 hari kerja untuk pesanan reguler. Tersedia layanan ekspres untuk kebutuhan mendesak.",
    color: "#ff7c40",
  },
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    desc: "Harga grosir mulai dari Rp 45.000/pcs. Semakin banyak jumlah, semakin hemat. Tanpa biaya desain.",
    color: "#4ade80",
  },
  {
    icon: Truck,
    title: "Kirim Seluruh Indonesia",
    desc: "Menjangkau seluruh penjuru Indonesia via JNE, J&T, SiCepat, dan ekspedisi terpercaya lainnya.",
    color: "#60a5fa",
  },
  {
    icon: Shield,
    title: "Garansi Kualitas",
    desc: "Jaminan 100% — jika produk tidak sesuai spesifikasi, kami revisi atau ganti tanpa biaya tambahan.",
    color: "#c084fc",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function KeunggulanSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="keunggulan" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#ff3c00]/8 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

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
            Kenapa Pilih Kami
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">
            KEUNGGULAN <span className="gradient-text">KAMI</span>
          </h2>
          <p className="text-[#8888a0] text-lg max-w-xl mx-auto">
            Kami bukan sekadar percetakan biasa, kami partner terpercaya untuk seragam tim & bisnis
            Anda
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="card-hover group relative bg-[#111118] border border-white/6 rounded-2xl p-7 overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${feat.color}18 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative"
                  style={{
                    backgroundColor: `${feat.color}18`,
                    border: `1px solid ${feat.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: feat.color }} />
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">{feat.title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{feat.desc}</p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, ${feat.color}25 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
