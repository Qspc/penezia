'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rizky Pratama',
    role: 'Ketua Tim Futsal FC Garuda',
    review: 'PrintCraft luar biasa! Jersey tim kami datang tepat waktu, kualitas sublimasi sangat tajam dan warna tidak pudar meski sudah dicuci berkali-kali. Recommended banget!',
    rating: 5,
    avatar: 'RP',
    color: '#ff3c00',
  },
  {
    name: 'Siti Rahma',
    role: 'HRD PT. Maju Bersama',
    review: 'Sudah 3 kali order kemeja PDH untuk 200+ karyawan. Jahitan rapi, bordir logo presisi, dan harga sangat kompetitif. Tim CS-nya juga responsif banget!',
    rating: 5,
    avatar: 'SR',
    color: '#3b82f6',
  },
  {
    name: 'Dika Firmansyah',
    role: 'Owner Clothing Brand Lokal',
    review: 'Kaos custom untuk brand saya hasilnya memuaskan. Print DTF-nya tajam dan tahan lama. Produksi cepat 5 hari untuk 300 pcs. Harga per pcs juga terjangkau!',
    rating: 5,
    avatar: 'DF',
    color: '#10b981',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#f5c542]/6 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#ff3c00] text-sm font-semibold tracking-widest uppercase mb-3 block">Testimoni</span>
          <h2 className="font-display text-5xl md:text-6xl text-white">
            APA KATA <span className="gradient-text">MEREKA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111118] border border-white/6 rounded-2xl p-6 flex flex-col gap-4 card-hover"
            >
              <div className="flex gap-0.5">
                {Array(t.rating).fill(0).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#f5c542] text-[#f5c542]" />
                ))}
              </div>
              <p className="text-[#aaaabc] text-sm leading-relaxed flex-1">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: `${t.color}30`, border: `2px solid ${t.color}50` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#555566] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
