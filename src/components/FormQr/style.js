import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';

// eslint-disable-next-line import/prefer-default-export

export const CustomeForm = styled(Form)`

`
export const MycustomeCard = styled(Card)`
 width: 33%;
 @media (max-width: 1000px) {
  width: 73%;
  }
  @media (max-width: 808px) {
  width: 90%;
  margin-top: 20px;
  }

`;
export const WrapperFormQr = styled.div`
  display: flex;
  padding-left: 210px;
  flex-flow:nowrap;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  & form  {
    background-color: white;
    padding: 30px;
    margin-right: 40px;
    &[disabled]{
    opacity: .6;
    }
    @media (max-width: 1000px) {
      width: 60%;
    }
    @media (max-width: 808px) {
      width: 90%;
    }
    @media (max-width: 508px) {
      width: 90%;
  }
  }
  @media (max-width: 808px) {
    padding-left: 200px;
    padding-top: 30px;
    flex-direction: column;
  }
  @media (max-width: 508px) {
    padding-left: 30px;
  }

`;
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
