import React from 'react';

import HeaderNavBar from '../Header/HeaderLogin/HeaderNavBar';
import FooterLogin from '../Footer/FooterLogin/FooterLogin';

import './Layout.scss';
import {
  Container,
  fluid,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

function Layout({ children }) {
  // const children = props.children;

  return (
    <div>
      <HeaderNavBar />
      {children}
      <FooterLogin />
    </div>
  );
}

export default Layout;
