import styled from "styled-components";
import BackgroundMonster from './assets/images/bgMonster.webp'

export const BgMonster = styled.div`
  background: url("${BackgroundMonster}");
  background-position: center;
  background-size: cover;
  z-index: 2;
  position: relative;
  background-color: #0c0102;

  &::before {
      content: "";
      background-image: linear-gradient(to bottom, #0c0102, rgba(12, 1, 2, 0.00) 90%);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
}

`