import { Title } from "../title/title";
import Description from "../Description/Description";
import { Link } from "react-router-dom";
import RightArrow from "../../images/right-arrow.svg";
import { StyledCard } from "./styles";
import AboutImage1 from "../../images/about/about-icon-2.png";

export const Card = (props) => {
  const { className, img, title, description, link } = props;

  return (
    <StyledCard className={className}>
      <div className="thumbnail">
        <img src={img} alt="about icon" />
      </div>

      <Title tag="h3" className="h4">
        {title}
      </Title>

      <Description className="description">{description}</Description>

      <div className="cta">
        <div className="link">
          <Link to={link}>
            <span className="text">Learn More</span>
            <span className="icon">
              <img src={RightArrow} alt="right arrow icon" />
            </span>
          </Link>
        </div>
      </div>
    </StyledCard>
  );
};
