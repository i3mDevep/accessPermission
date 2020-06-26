import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CardSede = styled.div`
    color: #332f2e;
    width: 23%;
    min-width: 250px;
    position: relative;
    min-height: 220px;
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

export const CurrentTime = styled.p`
  font-weight: 900;
  color: #888888;
  position: absolute;
  right: 15px;
  top: 25px;
  font-size: .8em;
`;

export const WrapperImg = styled.div`
  position: absolute;
  padding: 10px;
  top: 20px;
  left: 20px;
  background-color: #111d5e;
  border-radius: 100%;
  & img {
      width: 40px;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
`;
export const Btndelete = styled.button`
  color: #c81912;
  border-radius: 5px;
  &:hover{
    color: white;
    background-color:#c81912;
  }
`;

export const Btnedit = styled.button`
  color: #40bfc1;
  border-radius: 5px;
  &:hover{
    color: white;
    background-color:#40bfc1;
  }
`;