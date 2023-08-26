import React from "react";
import Hero from "./Hero";
import LiveClassesAndMentorship from "./LiveClassesAndMentorship/LiveClassesAndMentorship";
import Alumni from "./OurAlumni/OurAlumni";
import OurEarners from "./OurEarners/OurEarners";
import DeanDemo from "./DeanIntro/DeanIntro";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <LiveClassesAndMentorship />
      <Alumni />
      <OurEarners />
      <DeanDemo />
    </>
  );
};

export default HomePage;
