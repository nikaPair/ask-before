"use client";

import React from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Subtitle,
  SliderWrapper,
  SliderTrack,
  NavigationButton,
} from "./ui/Packages.styled";
import { PackageCard } from "./ui/PackageCard";
import { packagesData } from "./data/packagesData";
import { usePackagesSlider } from "./hooks/usePackagesSlider";

export default function Packages() {
  const {
    sliderRef,
    x,
    width,
    canScrollLeft,
    canScrollRight,
    slideLeft,
    slideRight,
  } = usePackagesSlider();

  return (
    <Section>
      <Container>
        <Header>
          <Title>
            Cheaper with ready-made
            <br />
            packages
          </Title>
          <Subtitle>
            We've already grouped the required tests into a comprehensive
            packages — complete all necessary tests in a single visit.
          </Subtitle>
        </Header>
        <SliderWrapper>
          {canScrollLeft && (
            <NavigationButton
              type="button"
              $direction="left"
              onClick={slideLeft}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavigationButton>
          )}

          <SliderTrack
            ref={sliderRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
          >
            {packagesData.map((pkg, index) => (
              <PackageCard key={index} title={pkg.title} items={pkg.items} />
            ))}
          </SliderTrack>

          {canScrollRight && (
            <NavigationButton
              type="button"
              $direction="right"
              onClick={slideRight}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavigationButton>
          )}
        </SliderWrapper>
      </Container>
    </Section>
  );
}
