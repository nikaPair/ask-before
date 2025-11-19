"use client";
import React from "react";
import {
  BottomSection,
  Column,
  Copyright,
  EmailLink,
  FooterContainer,
  FooterLink,
  FooterWrapper,
  TopSection,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TopSection>
          <Column>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">
              Terms of Use / Terms & Conditions
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/cookie">
              Cookie Notice / Consent Banner
            </FooterLink>
            <FooterLink href="/consent">Consent to Data Processing</FooterLink>
          </Column>
          <Column>
            <EmailLink href="mailto:support@intimka.io">
              support@intimka.io
            </EmailLink>
          </Column>
        </TopSection>
        <BottomSection>
          <Copyright>© 2025. All rights reserved.</Copyright>
        </BottomSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
