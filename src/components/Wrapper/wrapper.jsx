import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;

  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Wrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};
