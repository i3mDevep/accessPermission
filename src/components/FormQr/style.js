import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const WrapperFormQr = styled.div`
  display: flex;
  padding-left: 200px;
  justify-content: center;
  flex-flow:wrap;
  align-items: center;
  flex-direction: row;
  width: 100%;
  @media (max-width: 508px) {
    padding-left: 30px;
    padding-top: 30px;
  }
`;
export const ContainerHeader = styled.div`
  padding-left: 200px;
  @media (max-width: 508px) {
    padding-left: 30px;
    padding-top: 10px;
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