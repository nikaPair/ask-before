"use client";
import React from "react";
import {
  Avatar,
  AvatarStack,
  ContactWrapper,
  Description,
  Form,
  Input,
  SubmitButton,
  Title,
} from "./FAQContact.styled";

const FAQContact = () => {
  return (
    <ContactWrapper>
      <AvatarStack>
        <Avatar
          src="/images/FAQ/1.png"
          alt="Support Agent 1"
          width={42}
          height={42}
        />
        <Avatar
          src="/images/FAQ/2.png"
          alt="Support Agent 2"
          width={42}
          height={42}
        />
        <Avatar
          src="/images/FAQ/3.png"
          alt="Support Agent 3"
          width={42}
          height={42}
        />
        <Avatar
          src="/images/FAQ/4.png"
          alt="Support Agent 4"
          width={42}
          height={42}
        />
      </AvatarStack>
      <Title>Still have questions?</Title>
      <Description>
        Still have questions? Enter your email address and we&apos;ll get back
        to you within 48 hours.
      </Description>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input type="email" placeholder="Enter your email" required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactWrapper>
  );
};

export default FAQContact;
