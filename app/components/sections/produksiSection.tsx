"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Factory, Package, ShieldCheck, Truck } from "lucide-react";

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

        <div className="grid lg:grid-cols-[1fr_0.96fr] gap-6 items-start">
          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111118] group"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-[9/16] object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/galeri/produksi/produksi-video-1.mp4" type="video/mp4" />
            </video>

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute top-5 left-5">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 md:px-4 md:py-2 px-2 py-1 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="md:text-sm text-xs font-medium text-white">Produksi Printing</span>
              </div>
            </div>
          </motion.div>

          {/* PHOTOS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {/* Hero Photo */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/galeri/produksi/produksi-foto-1.jpeg"
                className="w-full aspect-[16/9] object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute top-5 left-5">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 md:px-4 md:py-2 px-2 py-1 backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="md:text-sm text-xs font-medium text-white">Proses Jahit</span>
                </div>
              </div>
            </div>

            {/* Bottom Photos */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/galeri/produksi/produksi-foto-2.jpeg"
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 md:px-4 md:py-2 px-2 py-1 backdrop-blur">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="md:text-sm text-xs font-medium text-white">Proses Bordir</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/galeri/produksi/produksi-foto-3.jpeg"
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 md:px-4 md:py-2 px-2 py-1 backdrop-blur">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="md:text-sm text-xs font-medium text-white">Stok Kain</span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/galeri/produksi/produksi-foto-6.jpeg"
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 md:px-4 md:py-2 px-2 py-1 backdrop-blur">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="md:text-sm text-xs font-medium text-white">
                      Proses Packing
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/galeri/produksi/produksi-foto-5.jpeg"
                  className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 md:px-4 md:py-2 px-2 py-1 backdrop-blur">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="md:text-sm text-xs font-medium text-white">
                      Proses Pengiriman
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
