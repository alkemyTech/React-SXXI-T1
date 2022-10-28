import { createGlobalStyle, css } from "styled-components";

const minHeight = "100vh - 112px";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;

        *, *::before, *:after {
            box-sizing: inherit;
        }

        a{
            text-decoration: none;
        }
        
        ul, li, h1, h2, h3,p,button {
            margin: 0; padding: 0;
        }

        ul { list-style: none}
        
        button{background: transparent; border: 0; outline: 0;}

        body{
            background: white;
            min-height: ${({ windowSize: { height } }) =>
              height > 600 ? "100vh" : css`calc(${minHeight})`};
            max-width: ${({ windowSize: { width } }) =>
              width > 1199 ? "1200px" : "650px"};
            overscroll-behavior: none;
            width: 100%;
            margin: 0 auto;
            transition: 0.5s;
            padding: 0 1.5rem;
        }

        #root {
            width: 100%;
            overflow-x: hidden;
            min-height: 100vh;
            padding: 0 1.5rem;
        }
    }
`;
