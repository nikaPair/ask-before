import React from "react";
import HowItWorksShared from "@/components/blocks/HowItWorks/HowItWorks";

export default function HowItWorks() {
  const items = [
    {
      badge: 1,
      title: "Get tested without doctor referal",
      description: "Find a clinic that fits your schedule and budget.",
      media: (
        <video src="/videos/visibility.mp4" autoPlay loop muted playsInline />
      ),
      bgColor: "#FFD1F6",
    },
    {
      badge: 2,
      title: "Upload your STI results on your own",
      description: "Make your exchange lovely if you like, or keep it simple.",
      media: <video src="/videos/attach.mp4" autoPlay loop muted playsInline />,
      bgColor: "#F3F3F3",
    },
    {
      badge: 3,
      title: "Show QR code to partner",
      description:
        "They’ll land on your exchange page and get the message instantly 😉",
      media: <img src="/images/howitworks/EN/3.png" alt="Show QR code" />,
      bgColor: "#FCD875",
    },
  ];

  return (
    <HowItWorksShared
      title="Make it quick, convenient and affordable"
      subtitle="We make STI test sharing comfortable, private and stigma-free."
      items={items}
    />
  );
}
