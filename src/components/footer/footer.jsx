import React from "react";
import { Hero } from "../hero/Hero";
import { Wrapper } from "../Wrapper/wrapper";
import { StyledFooter } from "./footerStyles";
import FooterLogo from "../../images/footer-logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <Hero
        title={"Have a project in mind? Let’s get to work."}
        titleTag="h2"
        titleClass="h2"
        subtitle={"Lets Work Together"}
        buttons={[
          {
            to: "/contact",
            name: "Start a Project",
            variant: "normal",
          },
        ]}
      />

      <section className="footer-bottom text-light">
        <Wrapper>
          <div className="col-wrap">
            <div className="col">
              <div className="logo">
                <img src={FooterLogo} alt="logo" />
              </div>
              <p className="moto">
                We challange <br />
                core assumptions.
              </p>
              <p>
                <a href="mailto:info@71.agency">info@71.agency</a>
              </p>
            </div>

            <div className="col">
              <h4>What we do</h4>
              <div className="footer-link">
                <div className="link">
                  <Link to={"/"}>Home</Link>
                </div>
                <div className="link">
                  <Link to={"/work"}>Work</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Services</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <h4>What we do</h4>
              <div className="footer-link">
                <div className="link">
                  <Link to={"/"}>Home</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Work</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Services</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <h4>What we do</h4>
              <div className="footer-link">
                <div className="link">
                  <Link to={"/"}>Home</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Work</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Services</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <h4>What we do</h4>
              <div className="footer-link">
                <div className="link">
                  <Link to={"/"}>Home</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Work</Link>
                </div>
                <div className="link">
                  <Link to={"/"}>Services</Link>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="footer-copyright">
        <Wrapper>
          <div>© 71 Studio 2022. All rights reserved.</div>
        </Wrapper>
      </section>
    </StyledFooter>
  );
};
