import React from "react";
import { StyledAboutUs } from "./styles";
import { Wrapper } from "../Wrapper/wrapper";
import { Title } from "../title/title";
import Description from "../Description/Description";
import { Link } from "react-router-dom";
import RightArrow from "../../images/right-arrow.svg";
import { Card } from "../card/card";
import AboutImage1 from "../../images/about/about-icon-2.png";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Wrapper>
        <div className="about-us-inner">
          <div className="icon">
            <img src="" alt="" />
          </div>
          <Title tag="h2" className="h2">
            We Are Different
          </Title>
          <Description>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Description>
        </div>

        <div className="about-us-cards">
          <Card
            className="custom-card"
            img={AboutImage1}
            title={"Quality Assurance & Testing"}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
            link={"/"}
          />

          <Card
            className="custom-card"
            img={AboutImage1}
            title={"Quality Assurance & Testing"}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
            link={"/"}
          />

          <Card
            className="custom-card"
            img={AboutImage1}
            title={"Quality Assurance & Testing"}
            description={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
            link={"/"}
          />
        </div>
      </Wrapper>
    </StyledAboutUs>
  );
};

export default AboutUs;
