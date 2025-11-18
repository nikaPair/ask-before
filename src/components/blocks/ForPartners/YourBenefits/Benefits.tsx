"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BenefitsContainer,
  BenefitsWrapper,
  BottomSection,
  FirstCenter,
  Item,
  ItemBottom,
  ItemCenter,
  ItemDesxription,
  ItemsWrapper,
  ItemTop,
  PrivilegesItem,
  PrivilegesWrapper,
  ThirdImage,
  ThirdTitle,
  ThirdCenter,
  TopSection,
  SecondCenter,
  SecontSVG,
  SecontSVGInner,
  SecontIcon,
  SecontTextContainer,
  Title,
  Description,
  Percentage,
} from "./Benefits.styled";
import { ItemTitle } from "../HowItWorks/ui/Item/Item.styled";

const HighIntentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M21.96 13.4199C21.8233 12.3214 21.326 11.2993 20.546 10.5139C19.766 9.72844 18.7474 9.22406 17.65 9.07977C17.1768 7.75468 16.2529 6.63824 15.0399 5.92523C13.8269 5.21223 12.4019 4.94801 11.0139 5.17914C9.62597 5.41026 8.36341 6.12202 7.4469 7.18964C6.53039 8.25726 6.01826 9.61302 6 11.02C4.93913 11.02 3.92172 11.4412 3.17157 12.1913C2.42142 12.9415 2 13.9591 2 15.02C2 16.0808 2.42142 17.0982 3.17157 17.8483C3.92172 18.5985 4.93913 19.02 6 19.02H12"
        stroke="#ffffff"
        strokeWidth="1.5"
      ></path>
      <path d="M18.7793 23V15" stroke="#ffffff" strokeWidth="1.5"></path>
      <path
        d="M15.5801 18.2L18.7801 15L21.98 18.2"
        stroke="#ffffff"
        strokeWidth="1.5"
      ></path>
    </g>
  </svg>
);

const useIsBelowBreakpoint = (breakpoint: number) => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isBelowBreakpoint;
};

const Benefits = () => {
  const isCompactLayout = useIsBelowBreakpoint(1440);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [isStripeHovered, setIsStripeHovered] = useState(false);
  const [percentageValue, setPercentageValue] = useState(75);
  const percentageTimerRef = useRef<number | null>(null);

  const stopPercentageTimer = useCallback(() => {
    if (percentageTimerRef.current) {
      window.clearInterval(percentageTimerRef.current);
      percentageTimerRef.current = null;
    }
  }, []);

  const animatePercentage = useCallback(
    (target: number) => {
      stopPercentageTimer();
      percentageTimerRef.current = window.setInterval(() => {
        setPercentageValue((prev) => {
          if (prev === target) {
            stopPercentageTimer();
            return prev;
          }
          const direction = prev < target ? 1 : -1;
          return prev + direction;
        });
      }, 35);
    },
    [stopPercentageTimer]
  );

  const handleSecondHoverOn = useCallback(() => {
    setIsSecondHovered(true);
    animatePercentage(85);
  }, [animatePercentage]);

  const handleSecondHoverOff = useCallback(() => {
    setIsSecondHovered(false);
    animatePercentage(75);
  }, [animatePercentage]);

  useEffect(() => {
    return () => {
      stopPercentageTimer();
    };
  }, [stopPercentageTimer]);

  const handleStripeHoverOn = useCallback(() => {
    setIsStripeHovered(true);
  }, []);

  const handleStripeHoverOff = useCallback(() => {
    setIsStripeHovered(false);
  }, []);

  useEffect(() => {
    return () => {
      stopPercentageTimer();
    };
  }, [stopPercentageTimer]);

  const stripeLogoSrc = isStripeHovered
    ? "/images/Benefits/s.png"
    : "/images/Benefits/stripe.png";

  const itemsContent = (
    <>
      <Item
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.3 }}
      >
        <ItemTop>
          <ItemCenter style={{ width: "285px" }}>
            <FirstCenter
              src="/videos/visibility.mp4"
              autoPlay
              muted
              loop
            ></FirstCenter>
          </ItemCenter>
        </ItemTop>
        <ItemBottom>
          <ItemTitle>Increased visibility</ItemTitle>
          <ItemDesxription>
            Users find your practice faster than through independent search.
          </ItemDesxription>
        </ItemBottom>
      </Item>
      <Item
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <ItemTop>
          <ItemCenter>
            <SecondCenter
              onMouseEnter={handleSecondHoverOn}
              onMouseLeave={handleSecondHoverOff}
            >
              <SecontSVG>
                <SecontSVGInner $isHovered={isSecondHovered}>
                  <SecontIcon $variant="primary" $isHovered={isSecondHovered}>
                    <HighIntentIcon />
                  </SecontIcon>
                  <SecontIcon $variant="secondary" $isHovered={isSecondHovered}>
                    <HighIntentIcon />
                  </SecontIcon>
                </SecontSVGInner>
              </SecontSVG>
              <SecontTextContainer>
                <Title>High-intent users</Title>
                <Percentage>{percentageValue}%</Percentage>
                <Description>
                  People who already decided to get tested — no cold leads.
                </Description>
              </SecontTextContainer>
            </SecondCenter>
          </ItemCenter>
        </ItemTop>
        <ItemBottom>
          <ItemTitle>High-intent users</ItemTitle>
          <ItemDesxription>
            People who already decided to get tested — no cold leads.
          </ItemDesxription>
        </ItemBottom>
      </Item>
      <Item
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <ItemTop>
          <ItemCenter>
            <ThirdCenter
              onMouseEnter={handleStripeHoverOn}
              onMouseLeave={handleStripeHoverOff}
            >
              <ThirdTitle $isHovered={isStripeHovered}>
                Payment connection via
              </ThirdTitle>
              <ThirdImage
                src={stripeLogoSrc}
                alt="Stripe payment integration"
                width={isStripeHovered ? 65 : 115}
                height={isStripeHovered ? 65 : 50}
                $isHovered={isStripeHovered}
              />
            </ThirdCenter>
          </ItemCenter>
        </ItemTop>
        <ItemBottom>
          <ItemTitle>Direct transfers</ItemTitle>
          <ItemDesxription>
            Just connect your Stripe — payments go straight to your account.
          </ItemDesxription>
        </ItemBottom>
      </Item>
    </>
  );

  const privilegesContent = (
    <PrivilegesWrapper>
      <PrivilegesItem
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.3 }}
      >
        <ItemTitle>
          Reduces the number of repetitive questions at reception
        </ItemTitle>
        <ItemDesxription>
          Patients already know pricing, availability, and requirements.
        </ItemDesxription>
      </PrivilegesItem>
      <PrivilegesItem
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.3 }}
      >
        <ItemTitle>New revenue opportunities</ItemTitle>
        <ItemDesxription>
          Doctors can offer vaccinations, follow-up visits, or preventive care —
          and patients are more receptive because they value their health.
        </ItemDesxription>
      </PrivilegesItem>
    </PrivilegesWrapper>
  );

  return (
    <BenefitsWrapper>
      <BenefitsContainer>
        <TopSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.25, once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="first-section">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                color="var(--white)"
                style={{
                  userSelect: "none",
                  width: "20px",
                  height: "20px",
                  display: "inline-block",
                  fill: "var(--white)",
                  color: "var(--white)",
                  flexShrink: "0",
                }}
              >
                <g color="var(--white)">
                  <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"></path>
                </g>
              </svg>
            </div>
            <p className="icon-text">
              Why Intimka works for Healthcare Providers
            </p>
          </div>
          <h2 className="title">Your benefits</h2>
          <p className="description">
            We bring the user. You receive the payment. No risk, just results.
          </p>
        </TopSection>
        <BottomSection>
          {isCompactLayout ? (
            <ItemsWrapper>
              {itemsContent}
              {privilegesContent}
            </ItemsWrapper>
          ) : (
            <>
              <ItemsWrapper>{itemsContent}</ItemsWrapper>
              {privilegesContent}
            </>
          )}
        </BottomSection>
      </BenefitsContainer>
    </BenefitsWrapper>
  );
};

export default Benefits;
