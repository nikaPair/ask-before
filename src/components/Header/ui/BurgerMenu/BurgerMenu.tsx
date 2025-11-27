"use client";
import React from "react";
import { BurgerButton } from "./BurgerMenu.styled";

import { useHeaderContext } from "../../HeaderContext";

const BurgerMenu = () => {
  const { isShrunk, toggleBurgerMenu } = useHeaderContext();
  return (
    <BurgerButton
      aria-label="Menu"
      $isShrunk={isShrunk}
      onClick={toggleBurgerMenu}
      className="burger-menu-button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 6H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 18H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BurgerButton>
  );
};

export default BurgerMenu;
