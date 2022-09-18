import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledTitle = styled.div`
  .h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 50px;

    ${media.up("md")} {
      font-size: 55px;
      line-height: 65px;
    }

    ${media.up("lg")} {
      font-size: 80px;
      line-height: 98px;
      margin: 0 auto 60px auto;
    }
  }

  .h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 46px;
    letter-spacing: 0.88px;

    ${media.up("md")} {
      font-size: 38px;
      line-height: 56px;
    }

    ${media.up("lg")} {
      font-size: 56px;
      line-height: 66px;
    }
  }

  .h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 34px;
    letter-spacing: 0.68px;

    ${media.up("md")} {
      font-size: 26px;
      line-height: 38px;
    }

    ${media.up("lg")} {
      font-size: 48px;
      line-height: 58px;
    }
  }

  .h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.88px;
    color: #000000;

    ${media.up("lg")} {
      font-size: 28px;
      line-height: 38px;
    }
  }
`;
