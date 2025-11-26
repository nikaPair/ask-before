"use client";
import FAQ from "@/components/blocks/FAQ/FAQ";
import Hero from "@/components/blocks/Locations/Hero/Hero";
import RequestShare from "@/components/blocks/Locations/RequestShare/RequestShare";
import Blog from "@/components/blocks/Locations/Blog/Blog";

export default function Locations() {
  return (
    <>
      <Hero />
      <RequestShare />
      <Blog />
      <FAQ />
    </>
  );
}
