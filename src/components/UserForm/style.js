import styled from 'styled-components';
import { Card, Form, CardDeck } from 'react-bootstrap';

export const ControlForm = styled(Form.Control)`
  font-size:calc(9px + .23vw);
  @media (max-width: 508px) {
    font-size:calc(11px + .23vw);
  }
`;

export const CardResponsive = styled(Card)`
  width: 26rem;
  display:flex;
  height: 100%;
  @media (max-width: 508px) {
    margin-top: 20px;
    width: 90vw;
  }
`;

export const ContainerForm = styled.div`
  font-size:calc(9px + .23vw);
  @media (max-width: 508px) {
    font-size:calc(11px + .23vw);
  }
`;

export const CardDeckCustome = styled(CardDeck)`
  font-size:calc(9px + .23vw);
  margin: 10px;
  @media (max-width: 508px) {
    font-size:calc(11px + .23vw);

  }
`;
