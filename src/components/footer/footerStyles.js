import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledFooter = styled.footer`
  background-color: #000;
  padding-bottom: 110px;

  div {
    width: 100%;
  }

  .h2 {
    font-size: 40px;
    line-height: 62px;
    margin-bottom: 60px;
    max-width: 830px;
    margin-left: auto;
    margin-right: auto;

    ${media.up("lg")} {
      font-size: 72px;
      line-height: 82px;
      margin-bottom: 110px;
    }
  }

  .footer-bottom {
    text-align: center;

    ${media.up("lg")} {
      text-align: left;
    }

    .logo {
      img {
        margin: auto;

        ${media.up("lg")} {
          margin: 0;
        }
      }
    }

    .moto {
      margin: 20px 0;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .col-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .col {
      width: 100%;
      margin-bottom: 40px;

      ${media.up("lg")} {
        margin-bottom: 80px;
        width: auto;
      }

      &:first-child {
        width: 400px;
      }

      h4 {
        margin-bottom: 12px;

        ${media.up("lg")} {
          margin-bottom: 24px;
        }
      }
    }
  }

  .footer-copyright {
    color: #5d6c74;
    text-align: center;

    ${media.up("lg")} {
      text-align: left;
    }
  }
`;
