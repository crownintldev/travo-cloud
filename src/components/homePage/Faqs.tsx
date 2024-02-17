import React from "react";
import { ShadAccordian } from "../ReusableComponents/ShadAccordian";
import Container from "@/utils/Container/Container";

const Faqs = () => {
  return (
    <Container>
      <div className="flex flex-wrap md:flex-nowrap md:space-x-10 space-y-5  md:space-y-0">
        <ShadAccordian />
        <ShadAccordian />
      </div>
    </Container>
  );
};

export default Faqs;
