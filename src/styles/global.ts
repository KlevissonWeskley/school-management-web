import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: #efefef;
        font-family: "Poppins", sans-serif;
    }
`