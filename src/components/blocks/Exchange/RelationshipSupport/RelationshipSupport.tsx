"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Section,
  Container,
  Heading,
  InlineBlock,
  AnimationWrapper,
  Button,
} from "./RelationshipSupport.styled";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function RelationshipSupport() {
  const [bookAnimation, setBookAnimation] = useState(null);
  const [heartAnimation, setHeartAnimation] = useState(null);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBookAnimation(data))
      .catch((err) => console.error("Failed to load book animation:", err));

    fetch("heart.json")
      .then((res) => res.json())
      .then((data) => setHeartAnimation(data))
      .catch((err) => console.error("Failed to load heart animation:", err));
  }, []);

  return (
    <Section>
      <Container>
        <Heading>
          AskBefore respects every kind of relationship
          <br />
          <InlineBlock>
            <AnimationWrapper>
              {bookAnimation && (
                <Lottie
                  animationData={bookAnimation}
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </AnimationWrapper>
          </InlineBlock>
          supports healthy, honest communication
          <br />
          at your own pace
          <InlineBlock>
            <AnimationWrapper>
              {heartAnimation && (
                <Lottie
                  animationData={heartAnimation}
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </AnimationWrapper>
          </InlineBlock>
        </Heading>
        <Button>Start exchange</Button>
      </Container>
    </Section>
  );
}
