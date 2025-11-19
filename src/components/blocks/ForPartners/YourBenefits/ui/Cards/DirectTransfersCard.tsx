"use client";
import React, { useCallback, useState } from "react";
import {
  Item,
  ItemBottom,
  ItemCenter,
  ItemDesxription,
  ItemTitle,
  ItemTop,
  ThirdCenter,
  ThirdImage,
  ThirdTitle,
} from "./Cards.styled";

const DirectTransfersCard = () => {
  const [isStripeHovered, setIsStripeHovered] = useState(false);

  const handleStripeHoverOn = useCallback(() => {
    setIsStripeHovered(true);
  }, []);

  const handleStripeHoverOff = useCallback(() => {
    setIsStripeHovered(false);
  }, []);

  const stripeLogoSrc = isStripeHovered
    ? "/images/Benefits/s.png"
    : "/images/Benefits/stripe.png";

  return (
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
  );
};

export default DirectTransfersCard;
