import styled from 'styled-components';
import { Card, Container, CardDeck, Button, Row, Col } from 'react-bootstrap';

export const CustomeCard = styled(Card)`
    padding: 1rem 1rem;
    color: #303f9f;
    width: 30%;
    min-width: 300px;
    margin:10px;
    text-align: justify;
    border-radius: .25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    position: relative;
    overflow: hidden;
    cursor: default;
    z-index: 2;
    & div {
        text-align: center;
        color: #ffff;
        background: linear-gradient(40deg, #111d5e, #303f9f);
    }
    & ul {
        padding: 5px;
        font-size:calc(11px + .38vw);
        color: #888;
    }

    & li {
        margin-left: 2px;
    }
    & footer {
        text-align: right;
    }
}`

export const CustomeCardCreate = styled.div`
    color: #888;
    width: 30%;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    min-width: 300px;
    margin:10px;
    text-align: center;
    border-radius: .25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    background: linear-gradient(40deg, #fff, #fff);
    position: relative;
    overflow: hidden;
    cursor: default;
    z-index: 2;
    & h2{
    margin-top:0;
    display: block;
    font-size: 1.6em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    }
}
`
