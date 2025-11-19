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
  ThirdImageContainer,
  ThirdImageLayer,
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
            <ThirdImageContainer $isHovered={isStripeHovered}>
              <ThirdImageLayer
                src="/images/Benefits/stripe.png"
                alt="Stripe payment integration"
                width={115}
                height={50}
                $isVisible={!isStripeHovered}
                $radius="0px"
              />
              <ThirdImageLayer
                src="/images/Benefits/s.png"
                alt="Stripe payment integration"
                width={65}
                height={65}
                $isVisible={isStripeHovered}
                $radius="15px"
              />
            </ThirdImageContainer>
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
