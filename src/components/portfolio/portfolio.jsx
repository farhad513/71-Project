import React from "react";
import { StyledPortfolio } from "./styles";
import { Title } from "../title/title";
import Description from "../Description/Description";
import { Wrapper } from "../Wrapper/wrapper";
import Portfolio1 from "../../images/portfolio/porfolio-1.jpg";
import Portfolio2 from "../../images/portfolio/porfolio-2.jpg";
import Portfolio3 from "../../images/portfolio/porfolio-3.jpg";
import Portfolio4 from "../../images/portfolio/porfolio-4.jpg";
import PortfolioItem from "./PortfolioItem";
import TextLink from "../TextLink/TextLink";

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Wrapper>
        <div className="portfolio-inner">
          <Title tag="h2" className="h2">
            The work we do, and the people we help.
          </Title>

          <Description className="description">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </Description>
        </div>

        <div className="portfolio-items-wrapper">
          <PortfolioItem
            image={Portfolio1}
            title={"Cool item"}
            info={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
          />
          <PortfolioItem
            image={Portfolio2}
            title={"Cool item"}
            info={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
          />
          <PortfolioItem
            image={Portfolio3}
            title={"Cool item"}
            info={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
          />
          <PortfolioItem
            image={Portfolio4}
            title={"Cool item"}
            info={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            }
          />

          <TextLink linkTo={"/work"} name={"View All Projects"} />
        </div>
      </Wrapper>
    </StyledPortfolio>
  );
};
