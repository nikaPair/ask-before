"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

type UseLangSelectResult = {
  isLangSelectOpen: boolean;
  handleLangSelectOpen: () => void;
  handleLangSelectClose: () => void;
  clearScheduledClose: () => void;
  scheduleLangSelectClose: () => void;
  handleLangSelectKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
};

export function useLangSelect(): UseLangSelectResult {
  const [isLangSelectOpen, setIsLangSelectOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLangSelectOpen = useCallback(() => {
    setIsLangSelectOpen(true);
  }, []);

  const handleLangSelectClose = useCallback(() => {
    setIsLangSelectOpen(false);
  }, []);

  const clearScheduledClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleLangSelectClose = useCallback(() => {
    clearScheduledClose();
    closeTimeoutRef.current = setTimeout(() => {
      setIsLangSelectOpen(false);
      closeTimeoutRef.current = null;
    }, 150);
  }, [clearScheduledClose]);

  const handleLangSelectKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleLangSelectOpen();
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        handleLangSelectClose();
      }
    },
    [handleLangSelectClose, handleLangSelectOpen]
  );

  useEffect(() => {
    return () => {
      clearScheduledClose();
    };
  }, [clearScheduledClose]);

  return {
    isLangSelectOpen,
    handleLangSelectOpen,
    handleLangSelectClose,
    clearScheduledClose,
    scheduleLangSelectClose,
    handleLangSelectKeyDown,
  };
}




