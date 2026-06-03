import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/app/components/ui/FloatingWhatsApp";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "PENEZIA Percetakan Sahabat Custom Purwakarta",
  description:
    "Penezia adalah solusi percetakan pakaian custom terpercaya: jersey, kemeja PDH, kaos polo, jaket, rompi, dan kaos. Bahan premium, harga terjangkau, kirim ke seluruh Indonesia.",
  keywords:
    "percetakan custom, jersey custom, kemeja PDH, seragam tim, sablon kaos, konveksi bandung",
  openGraph: {
    title: "PENEZIA Percetakan Sahabat Custom Purwakarta",
    description: "Jersey, PDH, Polo, Jaket, Rompi & Kaos Custom berkualitas. Pesan sekarang!",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
