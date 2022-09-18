import React from "react";
import { Button } from "../components/Button/button";
import Description from "../components/Description/Description";
import { Hero } from "../components/hero/Hero";
import { Title } from "../components/title/title";
import { Wrapper } from "../components/Wrapper/wrapper";
import { StyledContact } from "../styles/StyledContact";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <StyledContact>
      <Hero title={"Contact"} />

      <Wrapper>
        <div className="contact-form">
          <form action="#" onSubmit={handleSubmit}>
            <Title tag={"h2"} className={"h2"}>
              Hey ! Tell us all the things...
            </Title>

            {/* start field */}
            <div className="field field--checkbox">
              <h4 className="field-title">I’m interested in ....</h4>
              <label>
                <input
                  type="checkbox"
                  name="projectType"
                  value="Figma to webflow"
                />
                <span className="label">Figma to webflow</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="projectType"
                  value="Figma to html, css"
                />
                <span className="label">Figma to html, css</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="projectType"
                  value="Figma to React"
                />
                <span className="label">Figma to React</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="projectType"
                  value="Figma to wordpress"
                />
                <span className="label">Figma to wordpress</span>
              </label>
              <label>
                <input type="checkbox" name="projectType" value="Maintenance" />
                <span className="label">Maintenance</span>
              </label>
            </div>
            {/* end field */}

            {/* start field */}
            <div className="field">
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </label>
            </div>
            {/* end field */}

            {/* start field */}
            <div className="field">
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                />
              </label>
            </div>
            {/* end field */}

            {/* start field */}
            <div className="field">
              <label htmlFor="message">
                <input
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Tell us about your project"
                />
              </label>
            </div>
            {/* end field */}

            {/* start field */}
            <div className="field field--checkbox">
              <h4 className="field-title">Project Budget (USD)</h4>
              <label>
                <input type="radio" name="projectBudget" value="1k - 5k" />
                <span className="label">1k - 5k</span>
              </label>
              <label>
                <input type="radio" name="projectBudget" value="10k - 15k" />
                <span className="label">10k - 15k</span>
              </label>
              <label>
                <input type="radio" name="projectBudget" value="15k - 25k" />
                <span className="label">15k - 25k</span>
              </label>
              <label>
                <input type="radio" name="projectBudget" value="25k - 100k" />
                <span className="label">25k - 100k</span>
              </label>
            </div>
            {/* end field */}

            {/* start field */}
            <div className="field field--upload">
              <label>
                <input type="file" name="attachment" />
                <span className="label">Add attachment</span>
              </label>
            </div>
            {/* end field */}

            {/* start field */}
            <div className="field">
              {/* <button type="submit">Submit</button> */}
              <Button name="Submit" variant="normal" type="submit" />
            </div>
            {/* end field */}
          </form>
        </div>
      </Wrapper>
    </StyledContact>
  );
};
