"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useHeaderMotion } from "./hooks/useHeaderMotion";
import { useLangSelect } from "./hooks/useLangSelect";
import { MotionStyle } from "motion/react";

type HeaderContextType = {
  isShrunk: boolean;
  isLangSelectOpen: boolean;
  handleLangSelectOpen: () => void;
  handleLangSelectClose: () => void;
  handleLangSelectKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  clearScheduledClose: () => void;
  scheduleLangSelectClose: () => void;
  controls: any;
  headerStyle: MotionStyle;
  isBurgerOpen: boolean;
  toggleBurgerMenu: () => void;
  effectiveIsShrunk: boolean;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };

  const { controls, headerStyle, isShrunk, forceExpand } = useHeaderMotion(
    isBurgerOpen,
    closeBurger
  );
  const langSelect = useLangSelect();

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  // Force header to expand when burger menu is open
  useEffect(() => {
    if (isBurgerOpen && forceExpand) {
      forceExpand();
    }
  }, [isBurgerOpen, forceExpand]);

  // Effective shrunk state considers burger menu
  const effectiveIsShrunk = isShrunk && !isBurgerOpen;

  const value = {
    isShrunk,
    controls,
    headerStyle,
    isBurgerOpen,
    toggleBurgerMenu,
    effectiveIsShrunk,
    ...langSelect,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
