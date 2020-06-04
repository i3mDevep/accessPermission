import React from 'react';
import { FaGofore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillEnvelopeFill, BsFillShieldLockFill } from 'react-icons/bs';
import './style.scss';
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
    <div className='main-content'>
      <Col>
        <Container>
          <div className='header-body text-center mb-7'>
            <Row className='justify-content-center'>
              <Col lg='5' md='6'>
                <h1 className='text-white'>Bienvenido!</h1>
                <p className='text-lead text-light'>
                  Inicie sesión o Cree una cuenta.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Card role='form' className='Form'>
          <CardBody className='px-lg-5 py-lg-5'>
            <div className='text-center text-muted mb-4'>
              <small>Incie sesión </small>
            </div>
            <Form disabled={loading} onSubmit={handlerSubmit}>
              <FormGroup className='mb-3'>
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <BsFillEnvelopeFill />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    disabled={loading}
                    type='email'
                    required={true}
                    placeholder='Email'
                    {...email}
                    autoComplete='new-email'
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className='mb-3'>
                <InputGroup className='input-group-alternative'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <BsFillShieldLockFill />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    disabled={loading}
                    type='password'
                    required={true}
                    placeholder='Password'
                    {...password}
                    autoComplete='new-password'
                  />
                </InputGroup>
              </FormGroup>
              <div className='text-center'>
                <Button className='my-4' disabled={loading} color='primary' type='button'>
                  Sign in
                </Button>
              </div>
              {error && <Error>{error}</Error>}
              <Foother>developed by ardobot</Foother>
            </Form>
          </CardBody>
        </Card>
        <Row className='mt-3'>
          <Col xs='6'>
            <a
              className='text-light'
              href='#pablo'
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className='text-right' xs='6'>
            <a
              className='text-light'
              href='#pablo'
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </div>

  );
};
export default UserLogin;
