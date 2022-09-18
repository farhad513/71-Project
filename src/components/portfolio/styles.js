import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledPortfolio = styled.section`
  padding: 80px 0 80px 0;

  ${media.up("lg")} {
    padding: 160px 0 80px 0;
  }

  .portfolio-inner {
    width: 100%;
    max-width: 660px;
  }

  .h2 {
    margin-bottom: 32px;
  }

  .description {
    margin-bottom: 90px;
  }

  .portfolio-items-wrapper {
    display: flex;
    flex-wrap: wrap;
    column-gap: 100px;

    article {
      width: 100%;
      margin-bottom: 80px;

      &:last-child {
        margin-bottom: 0;
      }

      ${media.up("lg")} {
        width: calc(50% - 50px);
        margin-bottom: 0;
      }

      &:nth-child(even) {
        ${media.up("lg")} {
          margin-top: 200px;
        }
      }

      img {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
