'use client'

import DiceAd from "@/components/DiceAd";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Kelas from "@/components/Kelas";

export default function Home() {
  return (
    <>
      <Hero />
      <Kelas />
      <Information />
      <DiceAd />
    </>
  );
}