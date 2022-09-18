import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./style";

export const Button = ({ to, name, variant, type = "button" }) => {
  return (
    <StyledButton className={variant}>
      {to ? (
        <Link to={to}>{name}</Link>
      ) : (
        <button className={variant} type={type}>
          {name}
        </button>
      )}
    </StyledButton>
  );
};
