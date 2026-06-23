"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Camera, MessageCircle, Video } from "lucide-react";
import {
  ContactInstagram,
  ContactWhatsapp,
  LinkInstagram,
  LinkWhatsapp,
  LinkTiktok,
  ContactTiktok,
} from "../environment/contact";

const socials = [
  {
    icon: MessageCircle,
    platform: "WhatsApp",
    handle: ContactWhatsapp,
    desc: "Chat langsung & konsultasi order",
    color: "#25d366",
    bg: "#00150a",
    href: LinkWhatsapp,
  },
  {
    icon: Camera,
    platform: "Instagram",
    handle: ContactInstagram,
    desc: "Lihat portfolio & update terbaru",
    color: "#e1306c",
    bg: "#1a0010",
    href: LinkInstagram,
  },
  {
    icon: Video,
    platform: "TikTok",
    handle: ContactTiktok,
    desc: "Behind the scenes produksi kami",
    color: "#69c9d0",
    bg: "#001518",
    href: LinkTiktok,
  },
];

const infos = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Kp.Neglasari RT 011/002 Desa Jatiluhur Kec Jatiluhur, Purwakarta 41152",
    color: "#ff3c00",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: ContactWhatsapp,
    color: "#f5c542",
  },
  // {
  //   icon: Clock,
  //   label: "Jam Operasional",
  //   value: "Senin – Sabtu: 08.00 – 17.00 WIB",
  //   color: "#60a5fa",
  // },
];

export default function KontakSection() {
  return (
    <section id="kontak" className="py-24 md:py-32 relative overflow-hidden">
      {/* BG accents */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#ff3c00]/8 rounded-full blur-[130px] pointer-events-none" />

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
            Hubungi Kami
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">
            KONTAK & <span className="gradient-text">LOKASI</span>
          </h2>
          <p className="text-[#8888a0] text-lg max-w-xl mx-auto">
            Siap melayani pertanyaan, konsultasi, dan pesanan Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Socials + Info */}
          <div className="flex flex-col gap-6">
            {/* Social cards */}
            <div className="grid gap-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex items-center gap-5 p-5 rounded-2xl border border-white/6 transition-all duration-300 hover:border-white/15 hover:-translate-y-1"
                    style={{ background: `linear-gradient(135deg, ${s.bg}, #0a0a0f)` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${s.color}20`, border: `1px solid ${s.color}40` }}
                    >
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold">{s.platform}</div>
                      <div className="text-[#8888a0] text-sm">{s.handle}</div>
                      <div className="text-[#555566] text-xs mt-0.5">{s.desc}</div>
                    </div>
                    <div
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: `${s.color}20`, color: s.color }}
                    >
                      Buka →
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Info boxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#111118] border border-white/6 rounded-2xl p-6 flex flex-col gap-5"
            >
              {infos.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${info.color}15`,
                        border: `1px solid ${info.color}30`,
                      }}
                    >
                      <Icon size={16} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-[#555566] text-xs font-medium uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-white text-sm font-medium">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-white/8 h-[420px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Kp.Neglasari+RT+011/002+Desa+Jatiluhur+Kec+Jatiluhur+Purwakarta+41152&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) contrast(0.9) brightness(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Penezia"
            />
            {/* Overlay label */}
            <div className="absolute bottom-4 left-4 bg-[#0a0a0f]/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ff3c00] rounded-lg flex items-center justify-center">
                <MapPin size={14} className="text-white" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Penezia</div>
                <div className="text-[#8888a0] text-xs">Purwakarta, Jawa Barat</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
