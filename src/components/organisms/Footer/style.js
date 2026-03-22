import styled from "styled-components";
import BgFooter from "../../../assets/images/bg-footer.webp"


export const Container = styled.footer`

  width: 100%;
  display: flex;
  flex-direction: column;
  background: url("${BgFooter}");
  background-position: center;
  background-size: cover;
  .bgFooter {
      background-position: center;
      background-size: cover;
      position: absolute;
      z-index: -2;
  }
  .footerContent {
      display: flex;
      width: 100%;
      padding: 7vw;
      .footerLogo {
          width: 30%;
          h3 {
              font-size: 24px;
              font-weight: 400;
              letter-spacing: 4px;
          }
          h2 {
              font-size: 3.7vw;
              font-family: "Benguiat", sans-serif;
          }
      }
  }
  .footerSections {
      display: flex;
      flex: 1;
      justify-content: end;
      gap: 6%;
      align-items: end;
      h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 12px;
      }
  }
  .socials {
      ul {
          flex-direction: row;
          gap: 12px;
          display: flex;
      }
  }
  .footerLogos {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 4vw;
  }
  .infiniteText {
    display: flex;
    width: max-content;
    justify-content: end;
    align-items: end;
    h3 {
        color: rgb(191, 191, 191);
        font-size: 12vw;
        font-family: 'Benguiat', sans-serif;
        mix-blend-mode: color-dodge;
        animation: infiniteText 10s infinite linear;
        padding-left: 8vw;
    }
    @keyframes infiniteText {
    100% {
        transform: translateX(-100%);
    }
  }
  }

`