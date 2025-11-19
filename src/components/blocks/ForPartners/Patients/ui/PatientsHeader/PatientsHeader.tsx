"use client";
import React from "react";
import {
  PatientsDescription,
  PatientsTextContainer,
  PatientsTitle,
} from "./PatientsHeader.styled";

const PatientsHeader = () => {
  return (
    <PatientsTextContainer
      initial={{ scale: 0.75 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <PatientsTitle>
        Reach more patients. <br /> Increase revenue. Build trust.
      </PatientsTitle>
      <PatientsDescription>
        Join Intimka — a STI test platform connecting motivated patients to your
        healthcare provider.
      </PatientsDescription>
    </PatientsTextContainer>
  );
};

export default PatientsHeader;
