"use client";
import React from "react";
import { motion } from "motion/react";
import HoverSlideText from "../HoverSlideText/HoverSlideText";
import LineSVG from "../LineSVG";
import {
  NavItem,
  NavLink,
  NavList,
  PartnerLink,
} from "./HeaderNavigation.styled";

const partnershipLabel = "🌟  For partnership";

import { useHeaderContext } from "../../HeaderContext";

const wrapperVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    position: "relative" as const,
    pointerEvents: "auto" as const,
  },
  shrunk: {
    opacity: 0,
    x: 20,
    position: "absolute" as const,
    pointerEvents: "none" as const,
  },
};

const HeaderNavigation = () => {
  const { effectiveIsShrunk } = useHeaderContext();

  return (
    <motion.div
      initial="expanded"
      animate={effectiveIsShrunk ? "shrunk" : "expanded"}
      variants={wrapperVariants}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: effectiveIsShrunk ? 0 : 0.1,
      }}
      style={{
        display: "flex",
        left: effectiveIsShrunk ? "-9999px" : "auto",
        whiteSpace: "nowrap",
        flexShrink: 0,
        willChange: "transform, opacity",
      }}
    >
      <NavList style={{ whiteSpace: "nowrap" }}>
        <NavItem>
          <NavLink
            href="/exchange"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <HoverSlideText text="Exchange Results" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/locations"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <HoverSlideText text="Test Locations" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="/blog"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            <HoverSlideText text="Blog" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/faq" initial="rest" animate="rest" whileHover="hover">
            <HoverSlideText text="FAQ" />
          </NavLink>
        </NavItem>
        <NavItem style={{ display: "flex", gap: "10px" }}>
          <LineSVG />
          <PartnerLink href="/partners">{partnershipLabel}</PartnerLink>
        </NavItem>
      </NavList>
    </motion.div>
  );
};

export default HeaderNavigation;
