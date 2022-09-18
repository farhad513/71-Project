import React from "react";
import { Hero } from "../components/hero/Hero";
import { Portfolio } from "../components/portfolio/portfolio";
import AboutUs from "../components/about-us/AboutUs";

export const Home = () => (
  <div>
    <Hero
      title="We craft holistic, people- friendly digital experiences."
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet."
      buttons={[
        {
          to: "/contact",
          name: "Get estimation",
          variant: "normal",
        },
        {
          to: "/contact",
          name: "Get estimation",
          variant: "outline",
        },
      ]}
    />

    <Portfolio />

    <AboutUs />
  </div>
);
