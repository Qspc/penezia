"use client";

export default function MarqueeTicker() {
  // 𝗝𝗲𝗿𝘀𝗲𝘆 | 𝗞𝗲𝗺𝗲𝗷𝗮 𝗣𝗗𝗛 | 𝗞𝗮𝗼𝘀 𝗣𝗼𝗹𝗼 | 𝗝𝗮𝗸𝗲𝘁 | 𝗥𝗼𝗺𝗽𝗶 | 𝗸𝗮𝗼𝘀 𝗗𝗹𝗹

  const items = [
    "JERSEY CUSTOM",
    "KEMEJA PDH",
    "KAOS POLO",
    "JAKET VARSITY",
    "ROMPI TACTICAL",
    "KAOS CUSTOM",
    "SERAGAM",
    "JERSEY CUSTOM",
    "KEMEJA PDH",
    "KAOS POLO",
    "JAKET VARSITY",
    "ROMPI TACTICAL",
    "KAOS CUSTOM",
    "SERAGAM",
  ];

  return (
    <div className="relative overflow-hidden bg-[#ff3c00] py-4 border-y border-[#ff5a1f]">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-white text-xl tracking-[0.15em] mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-white/40 text-sm">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
