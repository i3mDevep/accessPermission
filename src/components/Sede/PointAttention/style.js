import styled from 'styled-components';
import { Card } from 'react-bootstrap';

// eslint-disable-next-line import/prefer-default-export
export const CustomeCard = styled(Card)`
    padding: 1rem 1rem;
    color: #4a3f35;
    width: 23%;
    min-width: 250px;
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
        font-size: calc(11px + .3vw);
    }
    & li {
        margin-left: 2px;
    }
    & footer {
        text-align: right;
    }
    @media (max-width: 1309px) {
    width: 30%;
  }
    @media (max-width: 1060px) {
    width: 45%;
  }
  @media (max-width: 790px) {
    width: 100%;
  }
}`

export const CustomeCardCreate = styled.div`
    color: #332f2e;
    width: 23%;
    padding: 10px;
    min-width: 250px;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
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
    font-size: calc(1em + .5vw);
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    }
    @media (max-width: 1309px) {
    width: 30%;
  }
    @media (max-width: 1060px) {
    width: 45%;
  }
  @media (max-width: 790px) {
    width: 100%;
  }
}
`;
