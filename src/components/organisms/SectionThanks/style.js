import styled from "styled-components";



export const Container = styled.section`

  flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    background-color: #060101;
    .scrollContainer {
        width: max-content;
    }
    .scrollContent {
        display: flex;
        gap: 3vw;
        margin-top: 20px;
    }
    .scrollContent:nth-child(2), .scrollContent:nth-child(3) {
        display: none;
    }

`