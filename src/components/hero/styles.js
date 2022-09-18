import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { media } from "../../styles/responsive";

export const StyledHero = styled.section`
  background-color: ${THEME.colors.bgDark};
  color: ${THEME.colors.textLight};
  text-align: center;
  padding: 80px 0 140px 0;

  .subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.48px;
    color: ${THEME.colors.primary};
    /* width: 100%; */
    margin-bottom: 40px;
  }

  .h1 {
    color: ${THEME.colors.textLight};
    max-width: 1130px;
    margin: 0 auto 30px auto;
  }

  .description {
    max-width: 700px;
    margin: 0 auto 30px auto;

    ${media.up("lg")} {
      margin: 0 auto 60px auto;
    }
  }

  .cta {
    display: flex;
    justify-content: center;
    gap: 32px;
    /* width: 100%; */
    ${media.down("sm")} {
      flex-wrap: wrap;

      a {
        width: 100%;
      }
    }
  }
`;
