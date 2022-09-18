import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { media } from "../../styles/responsive";

export const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid ${THEME.colors.primary};
  border-radius: 8px;
  padding: 25px;

  ${media.up("md")} {
    padding: 45px;
  }

  ${media.up("lg")} {
    padding: 65px;
  }

  .h4 {
    margin-top: 40px;
    margin-bottom: 14px;
  }

  .description {
    margin-bottom: 40px;
  }

  .link {
    a {
      display: flex;
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 32px;
      display: flex;
      align-items: center;
      color: #000000;
    }

    .icon {
      margin-left: 10px;
    }
  }
`;
