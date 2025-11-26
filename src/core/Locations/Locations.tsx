"use client";
import FAQ from "@/components/blocks/FAQ/FAQ";
import Hero from "@/components/blocks/Locations/Hero/Hero";
import RequestShare from "@/components/blocks/Locations/RequestShare/RequestShare";
import Blog from "@/components/blocks/Locations/Blog/Blog";

import HowItWorks from "@/components/blocks/Locations/HowItWorks/HowItWorks";
import FreeToUse from "@/components/blocks/Locations/FreeToUse/FreeToUse";
import CompareBlock from "@/components/blocks/Locations/CompareBlock/CompareBlock";
import Packages from "@/components/blocks/Locations/Packages/Packages";

export default function Locations() {
  return (
    <>
      <Hero />
      <Packages />
      <CompareBlock />
      <HowItWorks />
      <FreeToUse />
      <Blog />
      <RequestShare />
      <FAQ />
    </>
  );
}
