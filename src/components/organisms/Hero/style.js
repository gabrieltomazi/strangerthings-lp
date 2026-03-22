import styled from "styled-components";


export const Container = styled.section`
  width: 100%;
  display: flex;
  padding: 7vw;
  background-position: 50% 0%;
  background-size: cover;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 7vw 7vw 7vw;
  position: relative;

  picture {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
      }
  }
  .left, .right {
      z-index: 3;
  }
  .left {
      width: 30%;
      h3 {
          font-size: 2vw;
          font-weight: 400;
          letter-spacing: 4px;
      }
      h1 {
          font-size: 3.7vw;
          font-family: "Benguiat", sans-serif;
      }
  }
  .right {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: end;
      p {
          font-size: 2vw;
          font-size: clamp(2vw, 2vw, 2vw);
          margin-bottom: 32px;
          text-align: end;
      }
  }
  &::before {
    content: "";
    background: linear-gradient(180deg, rgba(12, 1, 2, 0.00) 60%, #0c0102 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
  }


`