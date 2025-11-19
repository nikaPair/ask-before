"use client";
import React from "react";
import { motion } from "motion/react";
import { Container, Section } from "./FAQ.styled";
import FAQHeader from "./ui/FAQHeader/FAQHeader";
import FAQList from "./ui/FAQList/FAQList";
import FAQContact from "./ui/FAQContact/FAQContact";

const FAQ = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FAQHeader />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <FAQList />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <FAQContact />
        </motion.div>
      </Container>
    </Section>
  );
};

export default FAQ;
