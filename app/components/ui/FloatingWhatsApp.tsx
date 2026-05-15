'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1a1a24] border border-white/10 rounded-2xl p-4 shadow-2xl max-w-xs"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-white fill-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">PrintCraft Support</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#25d366] rounded-full animate-pulse" />
                  <span className="text-[#25d366] text-xs">Online sekarang</span>
                </div>
              </div>
            </div>
            <p className="text-[#8888a0] text-xs leading-relaxed mb-4">
              Halo! Ada yang bisa kami bantu? Konsultasi kebutuhan seragam custom Anda gratis 😊
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20PrintCraft%2C%20saya%20ingin%20konsultasi%20pesanan%20seragam%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-[#25d366] hover:bg-[#1fb559] text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
            >
              Chat di WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
        style={{
          background: expanded ? '#1a1a24' : '#25d366',
          border: expanded ? '1px solid rgba(255,255,255,0.1)' : 'none',
          boxShadow: expanded ? 'none' : '0 8px 32px rgba(37, 211, 102, 0.45)',
        }}
        aria-label={expanded ? 'Tutup chat' : 'Buka chat WhatsApp'}
      >
        {expanded
          ? <X size={22} className="text-white" />
          : <MessageCircle size={24} className="text-white fill-white" />
        }
      </motion.button>
    </div>
  );
}
