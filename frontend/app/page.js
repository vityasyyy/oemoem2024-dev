import DiceAd from "@/components/DiceAd";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Kelas from "@/components/Kelas";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Kelas />
      <Information />
      <DiceAd />
    </>
  );
}