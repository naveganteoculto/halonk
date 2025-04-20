import HeroSection from "@/sections/HeroSection";
import MemeWall from "@/sections/MemeWall";
import Tokenomics from "@/sections/Tokenomics";
import HowToBuy from "@/sections/HowToBuy";
import JoinUs from "@/sections/JoinUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MemeWall />
      <Tokenomics />
      <HowToBuy />
      <JoinUs />
    </main>
  );
}
