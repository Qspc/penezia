"use client";

import { Zap, Camera, MessageCircle, Music2 } from "lucide-react";
import { LinkInstagram, LinkTiktok, LinkWhatsapp } from "../environment/contact";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Katalog", href: "#katalog" },
  { label: "Kontak", href: "#kontak" },
];

const products = [
  "Jersey Sport",
  "Kemeja PDH",
  "Kaos Polo",
  "Jaket Custom",
  "Rompi",
  "Kaos Custom",
];

const socials = [
  { icon: MessageCircle, href: LinkWhatsapp, label: "WhatsApp", color: "#25d366" },
  {
    icon: Camera,
    href: LinkInstagram,
    label: "Instagram",
    color: "#e1306c",
  },
  {
    icon: Music2,
    href: LinkTiktok,
    label: "TikTok",
    color: "#69c9d0",
  },
];

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="relative border-t border-white/6 bg-[#080808]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <a href="#hero" className="flex items-center gap-2 mb-5">
            <img src="/logo/logo-putih.png" className="w-10 h-10 " />{" "}
            <span className="font-display text-2xl text-white tracking-widest">
              PENEZIA
              {/* <span className="text-[#ff3c00]">CRAFT</span> */}
            </span>
          </a>
          <p className="text-[#555566] text-sm leading-relaxed max-w-xs mb-6">
            Percetakan custom terpercaya sejak 2018. Melayani ribuan pelanggan dari seluruh
            Indonesia dengan kualitas premium dan harga bersahabat.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/8 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-white/20"
                  style={{ color: s.color }}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
            Navigasi
          </h4>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#555566] hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Produk</h4>
          <ul className="flex flex-col gap-2.5">
            {products.map((p) => (
              <li key={p}>
                <a
                  href="#katalog"
                  className="text-[#555566] hover:text-white text-sm transition-colors duration-200"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-3 text-[#444454] text-xs">
          <p>© {new Date().getFullYear()} Penezia. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://qspc.github.io/cv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff3c00] cursor-pointer"
            >
              Qspc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
