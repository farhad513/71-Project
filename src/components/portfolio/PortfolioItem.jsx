import React from "react";
import { Title } from "../title/title";
import Description from "../Description/Description";
import styled from "styled-components";
import { media } from "../../styles/responsive";

const StyledPortfolio = styled.article`
  .h3 {
    margin-top: 20px;
    margin-bottom: 5px;

    ${media.up("lg")} {
      margin-top: 60px;
      margin-bottom: 14px;
    }
  }
`;

const PortfolioItem = ({ image, title, info }) => {
  return (
    <StyledPortfolio>
      <div className="thumbnail">
        <img src={image} alt="portfolio item" />
      </div>

      <Title tag={"h3"} className={"h3"}>
        {title}
      </Title>

      <Description>
        <p>{info}</p>
      </Description>
    </StyledPortfolio>
  );
};

export default PortfolioItem;
