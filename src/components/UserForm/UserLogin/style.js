import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardLogin = styled(Card)`
  border-radius: 15px;
  width: 27rem;
  @media (max-width: 508px) {
    margin-top: 40px;
    width: 90vw;
  }
`;
