import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { media } from "../../styles/responsive";

export const StyledHeader = styled.header`
  background-color: ${THEME.colors.bgDark};
  padding: 30px 0;

  ${media.up("lg")} {
    padding: 60px 0;
  }

  .left {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding-bottom: 40px;

    ${media.up("lg")} {
      width: 40%;
      padding-bottom: 0;
      justify-content: flex-start;
    }

    .logo {
      display: flex;
      flex-wrap: wrap;
    }

    a {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 37px;
        height: auto;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    ${media.up("lg")} {
      width: 60%;
      justify-content: flex-end;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 40px;
      padding: 0;
      margin: 0;

      ${media.up("lg")} {
        justify-content: flex-end;
      }

      a {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 40px;
        text-decoration: none;
        color: #fff;

        &.active {
          color: ${THEME.colors.primary};
        }
      }
    }
  }
`;
