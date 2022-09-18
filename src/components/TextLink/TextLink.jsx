import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { THEME } from "../../styles/theme";

const StyledTextLink = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 90px;

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 38px;
    color: #5d6c74;
    font-family: ${THEME.fonts.heading};
    border-bottom: 1px solid ${THEME.colors.text};
    display: inline-block;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${THEME.colors.text};
    }
  }
`;

const TextLink = ({ linkTo, name }) => {
  return (
    <StyledTextLink>
      <Link to={linkTo}>{name}</Link>
    </StyledTextLink>
  );
};

export default TextLink;
