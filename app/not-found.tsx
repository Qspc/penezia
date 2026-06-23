import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[#ff3c00] font-semibold mb-4">404</p>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Halaman Tidak Ditemukan</h1>

        <p className="text-[#8888a0] mb-8">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#ff3c00] hover:bg-[#ff5a1f] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
