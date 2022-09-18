import React from "react";
import { Link, NavLink } from "react-router-dom";
import Seventy1Logo from "../../images/logo.svg";
import { ROUTES } from "../../routes";
import { CustomNavLink } from "./CustomNavLink";
import { Button } from "../Button/button";
import { StyledHeader } from "./styles";
import { Wrapper } from "../Wrapper/wrapper";

const SiteHeader = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src={Seventy1Logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="right">
          <nav>
            <ul>
              {ROUTES.map((link) => (
                <li key={link.to}>
                  <CustomNavLink linkTo={link.to} linkName={link.name} />
                </li>
              ))}
              <li>
                <Button to="contact" name="Contact" variant="normal" />
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export { SiteHeader };
