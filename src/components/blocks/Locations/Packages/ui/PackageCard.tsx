import React from "react";
import { Card, CardTitle, List, ListItem, CheckIcon } from "./Packages.styled";

const Checkmark = () => (
  <CheckIcon>
    <svg viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </CheckIcon>
);

interface PackageCardProps {
  title: string;
  items: string[];
}

export const PackageCard = ({ title, items }: PackageCardProps) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <List>
        {items.map((item, i) => (
          <ListItem key={i}>
            <Checkmark />
            {item}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
