import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        margin: 0;
        padding: 0;
        
        font-family: arial;
        background-color: #b3b1b1;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
