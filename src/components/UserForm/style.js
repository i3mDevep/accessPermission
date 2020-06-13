import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const Rederict = styled.label`
  margin-top: 5px;
  font-size:10px;
`;
export const Error = styled.span`
  margin-top: 5px;
  padding: 5px;
  text-align: center;
  color: white;
  width: 100%;
  background-color: rgba(240,0,0,.5);
  font-size: 15px;
`;
export const Background = styled.div`
  background: linear-gradient(to bottom, #0b4779, #1b6ca8);
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 3rem!important;
  padding-top: 5rem!important;
  flex-direction: column;

`;

export const CardResponsive = styled(Card)`
  width: 27rem;
  display:flex;
  @media (max-width: 508px) {
    margin-top: 40px;
    width: 90vw;
  }
`;