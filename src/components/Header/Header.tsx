"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AuthButton,
  AuthButtonIcon,
  AuthButtonText,
  HeaderContainer,
  HeaderContent,
  HeaderLink,
  HeaderLinkItem,
  HeaderLinks,
  LangAndAuth,
  LangSelect,
  SelectIcon,
  SelectText,
} from "./Header.styled";
import { useHeaderMotion } from "./hooks/useHeaderMotion";

function Header() {
  const { controls, headerStyle } = useHeaderMotion();

  return (
    <HeaderContainer animate={controls} style={headerStyle}>
      <HeaderContent>
        <Link href="/">
          <Image
            src="/images/logo.avif"
            alt="AskBefore"
            width={95}
            height={25}
          />
        </Link>
        <HeaderLinks>
          <HeaderLink>
            <HeaderLinkItem href="/users">For users</HeaderLinkItem>
          </HeaderLink>

          <HeaderLink>
            <HeaderLinkItem href="/blog">Our Blog</HeaderLinkItem>
          </HeaderLink>
          <HeaderLink>
            <span>|</span>
          </HeaderLink>
          <HeaderLink>
            <HeaderLinkItem
              href="/partners"
              style={{ color: "#ED327E", fontFamily: "var(--geist-medium)" }}
            >
              🌟 For partnership
            </HeaderLinkItem>
          </HeaderLink>
        </HeaderLinks>
        <LangAndAuth>
          <LangSelect>
            <SelectIcon src="/images/flag-eng.png" alt="Lang"  width={24} height={24}/>
            <SelectText>EN</SelectText>
          </LangSelect>
          <AuthButton>
            <AuthButtonText>Sign in</AuthButtonText>
            <AuthButtonIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                style={{ userSelect: "none", width: "100%", height: "100%", display: "inline-block", fill: "rgb(26, 29, 33)", color: "rgb(26, 29, 33)", flexShrink: "0" }}
              >
                <g>
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </g>
              </svg>
            </AuthButtonIcon>
          </AuthButton>
        </LangAndAuth>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
