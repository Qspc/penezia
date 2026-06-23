"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[#ff3c00] font-semibold mb-4">500</p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Terjadi Kesalahan</h1>

        <p className="text-[#8888a0] mb-8">
          Mohon maaf, terjadi kesalahan saat memuat halaman ini.
        </p>

        <button
          onClick={reset}
          className="bg-[#ff3c00] hover:bg-[#ff5a1f] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
