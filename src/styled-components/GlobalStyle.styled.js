import { createGlobalStyle } from "styled-components"
import { themeColors } from "./Theme.styled"

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
        }

        body::-webkit-scrollbar{
            width: 12px;
            background: #e4e4e4;
        }

        body::-webkit-scrollbar-thumb{
            background: hsla(187, 97%, 29%, .3);
            border-radius: 5px;
            border: 1px solid hsla(187, 97%, 29%, .55);
            border-right: 1px solid #e4e4e4;

            &:hover{
                background: hsla(187, 97%, 29%, .6);
                border: 1px solid hsla(187, 97%, 29%, .85);
                 border-right: 1px solid #e4e4e4;
            }

            &:active{
                background: hsla(187, 97%, 29%, .8);
                border: 1px solid hsla(187, 97%, 29%, 1);
                 border-right: 1px solid #e4e4e4;
            }
        }

        #root {
            width: 100%;
            overflow-x: hidden;
        }
    }
`
