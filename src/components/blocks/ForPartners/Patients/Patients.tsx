"use client";

import { PatientsContainer, PatientsSection } from "./Patients.styled";
import Short from "./ui/Short/Short";
import PatientsHeader from "./ui/PatientsHeader/PatientsHeader";
import PatientsButtons from "./ui/PatientsButtons/PatientsButtons";

function Patients() {
  return (
    <PatientsSection>
      <PatientsContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <PatientsHeader />
        <PatientsButtons />
        <Short />
      </PatientsContainer>
    </PatientsSection>
  );
}

export default Patients;
