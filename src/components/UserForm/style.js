import styled from 'styled-components';
import { Card, Form } from 'react-bootstrap';

export const ControlForm = styled(Form.Control)`
  font-size: 13px;
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
