import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const Rederict = styled.label`
  margin-top: 5px;
  font-size:10px;
`;
export const NavbarResponsive = styled(Navbar)`
  position: relative
  display:flex;
  @media (max-width: 508px) {
    margin-top: 40px;
    width: 90vw;
  }