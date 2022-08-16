import React from "react";
import data from "../sectionData";
import Section from "./Section";
const Sections = () => {
  return (
    <>
      {data.map((d) => {
        return <Section {...d} />;
      })}
    </>
  );
};

export default Sections;
