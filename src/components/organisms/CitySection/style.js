import styled from "styled-components";
import Card1 from "../../../assets/images/card1.webp"
import Card2 from "../../../assets/images/card2.webp"
import Card3 from "../../../assets/images/card3.webp"


export const Container = styled.section`

  flex-direction: column;
    .title {
        margin-top: -100px;
        z-index: 12;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cards {
        z-index: 20;
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        .card {
            z-index: 20;
            background-image: url('${Card1}');
            width: 32%;
            aspect-ratio: 16/9;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: end;
            justify-content: space-between;
            padding: 20px;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.3s ease;
        }
        .card:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
        .card:nth-child(2) {
            background-image: url('${Card2}');
            h3{
                max-width: 100px;
            }
        }
        .card:nth-child(3) {
            background-image: url('${Card3}');
        }
    }

`