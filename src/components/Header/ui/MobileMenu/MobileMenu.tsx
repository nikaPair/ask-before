"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { useHeaderContext } from "../../HeaderContext";
import {
  MenuContainer,
  MenuContent,
  MenuLogo,
  MenuItem,
  MenuLink,
  MenuDivider,
  LangContainer,
  LangOption,
  SignInButton,
  StarIcon,
} from "./MobileMenu.styled";
import Deutsch from "../Select/ui/Deutsch/Deutsch";
import English from "../Select/ui/English/English";
import Romanian from "../Select/ui/Romanian/Romanian";

const MobileMenu = () => {
  const { isBurgerOpen, closeBurgerMenu } = useHeaderContext();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".burger-menu-button")
      ) {
        closeBurgerMenu();
      }
    };

    if (isBurgerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBurgerOpen, closeBurgerMenu]);

  return (
    <AnimatePresence>
      {isBurgerOpen && (
        <MenuContainer
          ref={menuRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <MenuContent>
            <MenuLogo>
              <Image
                src="/images/Logo.png"
                alt="AskBefore"
                width={113}
                height={26}
                style={{ objectFit: "contain" }}
              />
            </MenuLogo>
            <MenuItem>
              <MenuLink href="/" onClick={closeBurgerMenu}>
                Exchange Results
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/map" onClick={closeBurgerMenu}>
                Test Locations
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/blogs" onClick={closeBurgerMenu}>
                Blog
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/faq" onClick={closeBurgerMenu}>
                FAQ
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink href="/partners" onClick={closeBurgerMenu}>
                <StarIcon>🌟</StarIcon> For partnership
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="/contact" onClick={closeBurgerMenu}>
                Contact us
              </MenuLink>
            </MenuItem>
            <MenuDivider />

            <LangContainer>
              <LangOption>
                <English /> En
              </LangOption>
              <LangOption>
                <Deutsch /> De
              </LangOption>
              <LangOption>
                <Romanian /> Ro
              </LangOption>
            </LangContainer>

            <SignInButton>Sign in</SignInButton>
          </MenuContent>
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
