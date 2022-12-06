import { createGlobalStyle } from "styled-components";
import { scrollbarCssStyles } from "./App.styled";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;

        *, *::before, *:after {
            box-sizing: inherit;
        }

        a {
            text-decoration: none;
        }
        
        ul, li, h1, h2, h3,p,button {
            margin: 0; padding: 0;
        }

        ul { 
            list-style: none;
        }
        
        button {
            background: transparent;
            border: 0;
            outline: 0;
        }

        body {
            background: -webkit-linear-gradient(to bottom, #e4e4e4, #ffffff);
            background: linear-gradient(to bottom, #e4e4e4, #ffffff);
            min-height: 100vh;
            max-width: 100%; 
            overscroll-behavior: none;
            height: 100%;
            width: 100%;
            margin: 0 auto;
            transition: 0.5s;

            ${scrollbarCssStyles}
        }

        .table-responsive-md {
            ${scrollbarCssStyles}
        }

        #root {
            width: 100%;
            overflow-x: hidden;
        }
    }
`;
