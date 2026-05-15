import HeroSection from "@/app/components/sections/HeroSection";
import KeunggulanSection from "@/app/components/sections/KeunggulanSection";
import KatalogSection from "@/app/components/sections/KatalogSection";
import TestimonialSection from "@/app/components/sections/TestimonialSection";
import KontakSection from "@/app/components/sections/KontakSection";
import MarqueeTicker from "@/app/components/ui/MarqueeTicker";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeTicker />
      <KeunggulanSection />
      <KatalogSection />
      <TestimonialSection />
      <KontakSection />
    </main>
  );
}
