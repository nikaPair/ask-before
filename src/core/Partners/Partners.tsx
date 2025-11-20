"use client";

import Patients from "../../components/blocks/ForPartners/Patients/Patients";
import HowItWorks from "../../components/blocks/ForPartners/HowItWorks/HowItWorks";
import Visibility from "../../components/blocks/ForPartners/LottieBlock/Visibility";
import Benefits from "@/components/blocks/ForPartners/YourBenefits/Benefits";
import WeGrowTogether from "@/components/blocks/ForPartners/WeGrowTogether/WeGrowTogether";
import Built from "@/components/blocks/ForPartners/Built/Built";
import Started from "@/components/blocks/ForPartners/GettingStarted/Started";
import WhatWeNeed from "@/components/blocks/ForPartners/WhatWeNeed/WhatWeNeed";
import ReadyToGrow from "@/components/blocks/ForPartners/ReadyToGrow/ReadyToGrow";
import FAQ from "@/components/blocks/ForPartners/FAQ/FAQ";

const Partners = () => {
  return (
    <div>
      <Patients />
      <HowItWorks />
      <Visibility
        key="visibility-1"
        src="/adduser.json"
        text="We offer providers"
        spanText="free"
        spanColor="rgb(149, 74, 235)"
        text2="visibility on our map + lead generation"
        width="1200"
      />
      <Benefits />
      <Visibility
        key="visibility-2"
        src="/Fire.json"
        text="We bring the user. You receive the payment."
        spanText="No risk, just results."
        spanColor="#ed327e"
        width="1200"
      />
      <Built />
      <Started />
      <Visibility
        key="visibility-3"
        src="/percents.json"
        text={
          <>
            Commission is taken <br /> only from a successful order
          </>
        }
        width="1640"
      />
      <WhatWeNeed />
      <ReadyToGrow />
      <WeGrowTogether />

      <FAQ />
    </div>
  );
};

export default Partners;
