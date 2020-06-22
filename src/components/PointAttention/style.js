import styled from 'styled-components';

export const CustomeCard = styled.div`
    padding: 1.6rem 1rem;
    color: #fff;
    width: 20%;
    min-width: 300px;
    margin: 20px;
    text-align: center;
    border-radius: .25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    background: linear-gradient(40deg, #111d5e, #303f9f);
    position: relative;
    overflow: hidden;
    cursor: default;
    z-index: 2;
    & h2{
    margin-top:0;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    }
    & p {
    padding: 2px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
`