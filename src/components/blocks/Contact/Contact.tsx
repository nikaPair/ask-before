"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  ContactSection,
  ContactContainer,
  FormWrapper,
  Header,
  Title,
  Description,
  Form,
  FieldGroup,
  Label,
  Input,
  TextArea,
  FooterText,
  Link,
  SubmitButton,
  ErrorText,
} from "./Contact.styled";
import { useContactForm } from "./hooks/useContactForm";
import { SuccessMessage } from "./ui/SuccessMessage";

export const Contact = () => {
  const { formData, errors, isSubmitted, handleChange, handleSubmit } =
    useContactForm();

  return (
    <ContactSection>
      <ContactContainer>
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <FormWrapper
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Header>
                <Title>Contact us 📮</Title>
                <Description>
                  Let’s bring more patients to your clinic.
                  <br />
                  Whether you’re ready to start or just curious — we’d love to
                  hear from you.
                </Description>
              </Header>

              <Form onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    $hasError={!!errors.name}
                    placeholder=""
                  />
                  {errors.name && <ErrorText>{errors.name}</ErrorText>}
                </FieldGroup>

                <FieldGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    $hasError={!!errors.email}
                    placeholder=""
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </FieldGroup>

                <FieldGroup>
                  <Label>Your message</Label>
                  <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    $hasError={!!errors.message}
                    placeholder=""
                  />
                  {errors.message && <ErrorText>{errors.message}</ErrorText>}
                </FieldGroup>

                <FooterText>
                  By submitting this form, you agree to our{" "}
                  <Link href="#">Privacy Policy</Link>. We may contact you to
                  discuss partnership opportunities.
                </FooterText>

                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            </FormWrapper>
          ) : (
            <SuccessMessage />
          )}
        </AnimatePresence>
      </ContactContainer>
    </ContactSection>
  );
};
