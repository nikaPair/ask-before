import React from "react";
import {
  SuccessWrapper,
  SuccessIcon,
  SuccessTitle,
  SuccessMessage as Message,
} from "../../Contact/Contact.styled";

export const SuccessMessage = () => {
  return (
    <SuccessWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      key="success"
    >
      <SuccessIcon>🎉</SuccessIcon>
      <SuccessTitle>Thank you!</SuccessTitle>
      <Message>
        We have received your message and will get back to you as soon as
        possible.
      </Message>
    </SuccessWrapper>
  );
};
