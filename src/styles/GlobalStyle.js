import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }

    ul {
        list-style: none;
    }
    label, h1{
      font-family: 'Noto Sans JP', sans-serif;
    }
    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        overscroll-behavior: none;
    }

    #app {
        overflow-x: hidden;
    }
`