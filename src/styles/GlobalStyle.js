import { createGlobalStyle } from 'styled-components';
import myFontURL from '../assets/typegraphic/Poppins-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
    @import '~bootstrap/scss/bootstrap.scss';
    *::before,
    *::after {
     box-sizing: border-box; }
     @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${myFontURL}) format('truetype');
    }
    html {
        font-family: 'Poppins';
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(34, 42, 66, 0); }

    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }

    ul {
        list-style: none;
    }
    th, td {

    }

    span {

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
        font-family: 'Poppins';
        overscroll-behavior: none;
        background-color:#f6f5f8;
    }

    #app {
        overflow-x: auto;
    }
    .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto; }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px; }


    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
    .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
    .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
    .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
    .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
    .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px; }




`;
export default GlobalStyle;
