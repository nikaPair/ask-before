"use client";
import React from "react";
import { Container, Section } from "./WhatWeNeed.styled";
import WhatWeNeedImage from "./ui/WhatWeNeedImage/WhatWeNeedImage";
import WhatWeNeedContent from "./ui/WhatWeNeedContent/WhatWeNeedContent";

const WhatWeNeed = () => {
  return (
    <Section>
      <Container>
        <WhatWeNeedImage />
        <WhatWeNeedContent />
      </Container>
    </Section>
  );
};

export default WhatWeNeed;
