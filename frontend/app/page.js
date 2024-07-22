'use client'

import DiceAd from "@/components/DiceAd";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Classes from "@/components/Classes";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-basicBlack-10 px-[min(10%,512px)]">
        <Classes />
      </div>
      <Information />
      <DiceAd />
    </>
  );
}