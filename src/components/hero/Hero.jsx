import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/button";
import { Wrapper } from "../Wrapper/wrapper";
import { StyledHero } from "./styles";
import { Title } from "../title/title";
import Description from "../Description/Description";

export const Hero = (props) => {
  // console.log(props);
  const {
    title,
    titleTag = "h1",
    titleClass = "h1",
    subtitle,
    description,
    buttons,
  } = props;

  return (
    <StyledHero>
      <Wrapper>
        <div>
          {subtitle ? <h3 className="subtitle">{subtitle}</h3> : ""}

          {title ? (
            <Title tag={titleTag} className={titleClass}>
              {title}
            </Title>
          ) : (
            ""
          )}

          {description ? (
            <Description className="description text-light">
              <p>{description}</p>
            </Description>
          ) : (
            ""
          )}

          <div className="cta">
            {buttons?.map((button, i) => (
              <Button
                key={i}
                to={button.to}
                name={button.name}
                variant={button.variant}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </StyledHero>
  );
};
