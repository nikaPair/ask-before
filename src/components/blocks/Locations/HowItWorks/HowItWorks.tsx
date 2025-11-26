import React from "react";
import HowItWorksShared from "@/components/blocks/HowItWorks/HowItWorks";

export default function HowItWorks() {
  const items = [
    {
      badge: 1,
      title: (
        <>
          Choose which STI tests to
          <br />
          take and at what price
        </>
      ),
      description:
        "Select location, time, and preferred sample types for your appointment.",
      media: (
        <img
          src="/images/Locations/howitworks-1.png"
          alt="Choose which STI tests to take"
        />
      ),
      bgColor: "#FFD1F6",
    },
    {
      badge: 2,
      title: (
        <>
          Book your test appointment
          <br />
          through the platform
        </>
      ),
      description: "Explore all preparation materials there as well.",
      media: (
        <img
          src="/images/Locations/howitworks-2.png"
          alt="Book your test appointment"
        />
      ),
      bgColor: "#F3F3F3",
    },
    {
      badge: 3,
      title: (
        <>
          Get tested at the clinic and
          <br />
          receive your results directly
        </>
      ),
      description: "Receive your results the way you usually do.",
      media: (
        <img src="/images/Locations/howitworks-3.png" alt="Show QR code" />
      ),
      bgColor: "#FCD875",
    },
  ];

  return (
    <HowItWorksShared
      title="How it works"
      subtitle="Testing made easy. Find a clinic, book online, and get your results."
      items={items}
    />
  );
}
