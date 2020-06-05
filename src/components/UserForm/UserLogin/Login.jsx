import React from 'react';
import { FaGofore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillEnvelopeFill, BsFillShieldLockFill } from 'react-icons/bs';
import {
  Button,
  Card,
  Container,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';

import {
  Mylogo,
  Foother,
  LoginGoogle,
  Error,
  Rederict,
} from './style';

import useInputValue from '../../../hooks/useInputValue';

const UserLogin = ({ onSubmit, error, loading }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (

    <Container>
      <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs='3'>.col-3</Col>
        <Col xs='auto'>.col-auto - variable width content</Col>
        <Col xs='3'>.col-3</Col>
      </Row>
      <Row>
        <Col xs='6'>.col-6</Col>
        <Col xs='6'>.col-6</Col>
      </Row>
      <Row>
        <Col xs='6' sm='4'>.col-6 .col-sm-4</Col>
        <Col xs='6' sm='4'>.col-6 .col-sm-4</Col>
        <Col sm='4'>.col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row>
    </Container>

  );
};
export default UserLogin;
