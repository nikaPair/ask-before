"use client";
import React from "react";
import HoverSlideText from "../HoverSlideText/HoverSlideText";
import LineSVG from "../LineSVG";
import {
  NavItem,
  NavLink,
  NavList,
  PartnerLink,
} from "./HeaderNavigation.styled";

const partnershipLabel = "🌟  For partnership";

const HeaderNavigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink href="/users" initial="rest" animate="rest" whileHover="hover">
          <HoverSlideText text="For users" />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/blog" initial="rest" animate="rest" whileHover="hover">
          <HoverSlideText text="Our blog" />
        </NavLink>
      </NavItem>
      <NavItem style={{ display: "flex", gap: "10px" }}>
        <LineSVG />
        <PartnerLink href="/partners">{partnershipLabel}</PartnerLink>
      </NavItem>
    </NavList>
  );
};

export default HeaderNavigation;
