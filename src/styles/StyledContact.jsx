import styled from "styled-components";
import { media } from "./responsive";

export const StyledContact = styled.section`
  div {
    width: 100%;
  }

  .h1 {
    text-align: center;
  }

  .contact-form {
    padding: 80px 0;

    ${media.up("lg")} {
      padding: 160px 0;
    }

    /* fields */
    input[type="checkbox"],
    input[type="radio"] {
      appearance: none;
      &:checked + span.label {
        background-color: #00ed6499;
      }
    }

    input[type="file"] {
      display: none;
    }

    input[type="radio"] + .label {
      ${media.up("lg")} {
        min-width: 240px;
      }
    }

    span.label {
      /* min-height: 80px; */
      background: #ffffff;
      border: 1px solid #00ed64;
      border-radius: 50px;
      display: inline-block;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 25px;
      font-size: 12px;

      ${media.up("lg")} {
        padding: 26px 33px;
        font-size: 16px;
      }
    }

    input[type="text"],
    input[type="email"] {
      border: none;
      outline: none;
      box-shadow: none;
      border-bottom: 1px solid rgba(93, 108, 116, 0.8);
      width: 100%;
      max-width: 920px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      padding: 14px;

      ${media.up("lg")} {
        font-size: 26px;
        line-height: 36px;
      }

      &::placeholder {
        color: rgba(93, 108, 116, 0.6);
      }
    }

    .field {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 20px;
      margin-bottom: 50px;

      label {
        width: 100%;
        display: block;
      }

      &.field--checkbox {
        label {
          width: auto;
          display: inline-block;
        }
      }

      &.field--upload {
        label {
          display: inline-block;
          width: auto;
        }

        span.label {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          border: 0;
          padding: 0;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUwNTUgMy40Mzc4MmUtMDdINy43MDA1MUM1LjY3ODU4IDMuNDM3ODJlLTA3IDMuNzU1NjUgMC43ODk2NDMgMi4yODM3NSAyLjIyNDI5QzAuODEwNzU0IDMuNjU4OTMgMCA1LjUzMTc5IDAgNy41QzAgOS40NjkyOSAwLjgxMDc1NCAxMS4zNDIxIDIuMjgzNzUgMTIuNzc1N0MzLjc1NTY1IDE0LjIxMDQgNS42Nzg1OCAxNSA3LjcwMDUxIDE1SDE2LjUwMTFWMTIuODU3MUg3LjcwMDUxQzYuMjY3MTIgMTIuODU3MSA0Ljg5NTMzIDEyLjI5MDQgMy44MzkyNiAxMS4yNjA3QzIuNzgyMDggMTAuMjMyMSAyLjIwMDE1IDguODk2MDcgMi4yMDAxNSA3LjVDMi4yMDAxNSA2LjEwNSAyLjc4MjA4IDQuNzY4OTMgMy44MzkyNiAzLjczOTI5QzQuODk1MzMgMi43MDk2NCA2LjI2NzEyIDIuMTQyODYgNy43MDA1MSAyLjE0Mjg2SDE2LjUwMTFIMTYuNTA1NUMxNy4zNzQ2IDIuMTQyODYgMTguMTk4NSAyLjQ3OTI5IDE4LjgyNTYgMy4wOTIxNEMxOS40NTM3IDMuNzAzOTMgMTkuODAwMiA0LjUwODU3IDE5LjgwMTMgNS4zNTkyOUMxOS44MDEgNS43ODAwNSAxOS43MTQ4IDYuMTk2NTUgMTkuNTQ3OSA2LjU4NDYzQzE5LjM4MDkgNi45NzI3MSAxOS4xMzY1IDcuMzI0NjQgMTguODI4OSA3LjYyQzE4LjUyNDQgNy45MjAxNyAxOC4xNjIgOC4xNTg3NSAxNy43NjI1IDguMzIyMDRDMTcuMzYzIDguNDg1MzIgMTYuOTM0MyA4LjU3MDA3IDE2LjUwMTEgOC41NzE0M0g3LjcwMDUxQzcuNTU3MSA4LjU2OTczIDcuNDE1NDQgOC41NDA0NyA3LjI4MzY3IDguNDg1MzFDNy4xNTE5IDguNDMwMTUgNy4wMzI2MSA4LjM1MDE4IDYuOTMyNjYgOC4yNUM2LjgyOTE5IDguMTUyNTQgNi43NDY1NiA4LjAzNjA5IDYuNjg5NTQgNy45MDczNkM2LjYzMjUyIDcuNzc4NjMgNi42MDIyNCA3LjY0MDE4IDYuNjAwNDQgNy41QzYuNjAwNDQgNy4yMyA2LjcyMTQ1IDYuOTU2NzkgNi45MzE1NiA2Ljc1MjE0QzcuMDMxMzUgNi42NTEzIDcuMTUwNzEgNi41NzA3NyA3LjI4MjcxIDYuNTE1MjNDNy40MTQ3MSA2LjQ1OTY4IDcuNTU2NzMgNi40MzAyMyA3LjcwMDUxIDYuNDI4NTdIMTYuNTAxMVY0LjI4NTcxSDcuNzAwNTFDNi44MzE0NSA0LjI4NTcxIDYuMDA1MyA0LjYyMzIxIDUuMzc0OTYgNS4yMzgyMUM0Ljc0NTcyIDUuODUxMDcgNC40MDAyOSA2LjY1NDY0IDQuNDAwMjkgNy41QzQuNDAwMjkgOC4zNDUzNiA0Ljc0NTcyIDkuMTUgNS4zNzcxNiA5Ljc2NUM1LjY4MDc4IDEwLjA2NDkgNi4wNDI0NSAxMC4zMDMzIDYuNDQxMjUgMTAuNDY2MkM2Ljg0MDA0IDEwLjYyOTIgNy4yNjgwNSAxMC43MTM1IDcuNzAwNTEgMTAuNzE0M0gxNi41MDIyQzE3LjIyNCAxMC43MTM4IDE3LjkzODcgMTAuNTc0MSAxOC42MDQ4IDEwLjMwMzJDMTkuMjcwOSAxMC4wMzIzIDE5Ljg3NTMgOS42MzU2NCAyMC4zODMzIDkuMTM2MDdDMjAuODk1NiA4LjY0MTI0IDIxLjMwMjMgOC4wNTI0NiAyMS41Nzk4IDcuNDAzNzNDMjEuODU3MyA2Ljc1NSAyMi4wMDAxIDYuMDU5MTYgMjIgNS4zNTYzOEMyMS45OTk5IDQuNjUzNjEgMjEuODU2OSAzLjk1NzgxIDIxLjU3OTIgMy4zMDkxNUMyMS4zMDE1IDIuNjYwNSAyMC44OTQ3IDIuMDcxODQgMjAuMzgyMiAxLjU3NzE0QzE5Ljg3NTQgMS4wNzczMiAxOS4yNzE4IDAuNjgwNTE4IDE4LjYwNjMgMC40MDk3NzZDMTcuOTQwOCAwLjEzOTAzNSAxNy4yMjY3IC0wLjAwMDI1MjU2MSAxNi41MDU1IDMuNDM3ODJlLTA3WiIgZmlsbD0iIzAwMUUyQiIvPgo8L3N2Zz4K);
          background-repeat: no-repeat;
          background-position: 0 center;
          padding-left: 40px;
        }
      }
    }

    .field-title {
      width: 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 46px;
      color: #5d6c74;

      ${media.up("lg")} {
        font-size: 30px;
        line-height: 66px;
      }
    }

    .h2 {
      max-width: 620px;
      padding-bottom: 50px;

      ${media.up("lg")} {
        font-size: 78px;
        line-height: 88px;
        font-weight: 500;
        padding-bottom: 90px;
      }
    }
  }
`;
