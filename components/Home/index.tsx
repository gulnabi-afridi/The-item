import React from "react";
import Hero from "./Hero";
import LiveClassesAndMentorship from "./LiveClassesAndMentorship/LiveClassesAndMentorship";
import Alumni from "./OurAlumni/OurAlumni";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <LiveClassesAndMentorship />
      <Alumni />
    </>
  );
};

export default HomePage;
