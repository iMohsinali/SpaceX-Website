import React from "react";
import { Link } from "react-router-dom";
import { data } from "../sectionData";
import Section from "./Section";
const Sections = () => {
  return (
    <Link to={"/"}>
      {data.map((d) => {
        return <Section {...d} />;
      })}
    </Link>
  );
};

export default Sections;
