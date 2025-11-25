import Hero from "@/components/blocks/Exchange/Hero/Hero";
import Animation from "@/components/blocks/Exchange/Animation/Animation";
import Benefits from "@/components/blocks/Exchange/Benefits/Benefits";
import MapBlock from "@/components/blocks/Exchange/MapBlock/MapBlock";
import FAQ from "@/components/blocks/Exchange/FAQ/FAQ";
import Standards from "@/components/blocks/Exchange/Standards/Standards";
import LottieBlock from "@/components/blocks/Exchange/LottieBlock/LottieBlock";
import ExchangeGallery from "@/components/blocks/Exchange/ExchangeGallery/ExchangeGallery";
import HowItWorks from "@/components/blocks/Exchange/HowItWorks/HowItWorks";
import Privacy from "@/components/blocks/Exchange/Privacy/Privacy";
import RelationshipSupport from "@/components/blocks/Exchange/RelationshipSupport/RelationshipSupport";

export default function Exchange() {
  return (
    <>
      <Hero />
      <Animation />
      <Benefits />
      <ExchangeGallery />
      <LottieBlock />
      <HowItWorks />
      <Privacy />
      <Standards />
      <MapBlock />
      <RelationshipSupport />
      <FAQ />
    </>
  );
}
