import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: "Benguiat";
    src: url(fonts/Benguiat\ Bold.ttf);
}

html, body {
    overflow-x: hidden !important;
}

a {
    text-decoration: none;
    cursor: pointer;
}

a:active {
    opacity: .6;
}

body {
    background-color: #0c0102;
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Poppins', sans-serif;
}

section {
    width: 100%;
    display: flex;
    padding: 7vw;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}



`

export default GlobalStyle