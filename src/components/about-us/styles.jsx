import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledAboutUs = styled.section`
  padding: 80px 0;

  .about-us-inner {
    width: 100%;
    text-align: center;
  }

  .about-us-cards {
    padding-top: 90px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    .custom-card {
      width: 100%;

      ${media.up("md")} {
        width: 32%;
      }
    }
  }
`;
