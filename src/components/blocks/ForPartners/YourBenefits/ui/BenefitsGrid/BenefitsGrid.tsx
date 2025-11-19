"use client";
import React, { useEffect, useState } from "react";
import { BottomSection, ItemsWrapper } from "./BenefitsGrid.styled";
import VisibilityCard from "../Cards/VisibilityCard";
import HighIntentCard from "../Cards/HighIntentCard";
import DirectTransfersCard from "../Cards/DirectTransfersCard";
import BenefitsPrivileges from "../BenefitsPrivileges/BenefitsPrivileges";

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

const BenefitsGrid = () => {
  const isCompactLayout = useIsBelowBreakpoint(1440);

  const itemsContent = (
    <>
      <VisibilityCard />
      <HighIntentCard />
      <DirectTransfersCard />
    </>
  );

  return (
    <BottomSection>
      {isCompactLayout ? (
        <ItemsWrapper>
          {itemsContent}
          <BenefitsPrivileges />
        </ItemsWrapper>
      ) : (
        <>
          <ItemsWrapper>{itemsContent}</ItemsWrapper>
          <BenefitsPrivileges />
        </>
      )}
    </BottomSection>
  );
};

export default BenefitsGrid;
