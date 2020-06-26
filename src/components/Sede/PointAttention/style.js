import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
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
    -webkit-box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 7px -2px rgba(0,0,0,0.75);
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
