'use client';

export default function MarqueeTicker() {
  const items = [
    'JERSEY CUSTOM', 'KEMEJA PDH', 'KAOS POLO', 'JAKET VARSITY', 'ROMPI TACTICAL',
    'KAOS CUSTOM', 'SERAGAM TIM', 'BAHAN PREMIUM', 'SABLON DIGITAL', 'BORDIR EKSKLUSIF',
    'JERSEY CUSTOM', 'KEMEJA PDH', 'KAOS POLO', 'JAKET VARSITY', 'ROMPI TACTICAL',
    'KAOS CUSTOM', 'SERAGAM TIM', 'BAHAN PREMIUM', 'SABLON DIGITAL', 'BORDIR EKSKLUSIF',
  ];

  return (
    <div className="relative overflow-hidden bg-[#ff3c00] py-4 border-y border-[#ff5a1f]">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="font-display text-white text-xl tracking-[0.15em] mx-8 flex items-center gap-8">
            {item}
            <span className="text-white/40 text-sm">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
