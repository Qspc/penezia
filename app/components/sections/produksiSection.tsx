"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, Package, ShieldCheck, Truck } from "lucide-react";

const stats = [
  {
    number: "10+",
    label: "Tahun Pengalaman",
    icon: Factory,
  },
  {
    number: "5.000+",
    label: "Pesanan Selesai",
    icon: Package,
  },
  {
    number: "100.000+",
    label: "Produk Diproduksi",
    icon: ShieldCheck,
  },
  {
    number: "Seluruh",
    label: "Indonesia",
    icon: Truck,
  },
];

const checklist = [
  "Printing menggunakan mesin berkualitas tinggi",
  "Dijahit oleh tenaga berpengalaman",
  "Quality Control sebelum pengiriman",
  "Packing rapi dan aman",
];

export default function ProductionSection() {
  return (
    <section id="produksi" className="relative py-28 overflow-hidden bg-[#0a0a0f]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff3c00]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff3c00] uppercase tracking-[0.25em] text-sm font-semibold">
            Behind The Scene
          </span>

          <h2 className="font-display text-5xl md:text-7xl text-white mt-3 mb-5">
            PROSES <span className="gradient-text">PRODUKSI</span>
          </h2>

          <p className="max-w-4xl mx-auto text-[#8888a0] text-lg leading-relaxed">
            Kami memproduksi setiap pesanan dengan standar kualitas tinggi, mulai dari proses
            desain, printing, jahit, quality control, hingga packing sebelum dikirim ke seluruh
            Indonesia.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 bg-[#111118]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover aspect-video"
            >
              <source src="/galeri/produksi/produksi-video-1.mp4" type="video/mp4" />
            </video>

            {/* Badge */}

            <div className="absolute top-5 left-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                <span className="text-white text-sm font-medium">Produksi Sedang Berlangsung</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGES */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <img
              src="/galeri/produksi/produksi-foto-1.jpeg"
              className="rounded-3xl border border-white/10 object-cover aspect-[4/3]"
            />

            <img
              src="/galeri/produksi/produksi-foto-2.jpeg"
              className="rounded-3xl border border-white/10 object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>

        {/* ================= INFO ================= */}

        {/* <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display text-white mb-8">
              Setiap Produk Diproses Dengan Teliti
            </h3>

            <div className="space-y-5">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={22} className="text-[#ff3c00] mt-0.5 flex-shrink-0" />

                  <p className="text-[#b5b5c3] text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-2xl bg-[#111118] border border-white/6 p-6 hover:border-[#ff3c00]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ff3c00]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#ff3c00]" />
                  </div>

                  <h4 className="text-4xl font-bold text-white mb-2">{item.number}</h4>

                  <p className="text-[#8888a0]">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
