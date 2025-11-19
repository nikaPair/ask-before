"use client";
import React from "react";
import {
  ItemDesxription,
  ItemTitle,
  PrivilegesItem,
  PrivilegesWrapper,
} from "./BenefitsPrivileges.styled";

const BenefitsPrivileges = () => {
  return (
    <PrivilegesWrapper>
      <PrivilegesItem
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.3 }}
      >
        <ItemTitle>
          Reduces the number of repetitive questions at reception
        </ItemTitle>
        <ItemDesxription>
          Patients already know pricing, availability, and requirements.
        </ItemDesxription>
      </PrivilegesItem>
      <PrivilegesItem
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.25, once: true }}
        transition={{ duration: 0.3 }}
      >
        <ItemTitle>New revenue opportunities</ItemTitle>
        <ItemDesxription>
          Doctors can offer vaccinations, follow-up visits, or preventive care —
          and patients are more receptive because they value their health.
        </ItemDesxription>
      </PrivilegesItem>
    </PrivilegesWrapper>
  );
};

export default BenefitsPrivileges;
