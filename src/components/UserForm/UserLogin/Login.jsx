import React from 'react';
import { FaGofore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style.scss';
import {
  Background,
  Form,
  Mylogo,
  Foother,
  LoginGoogle,
  Error,
  Rederict,
} from './style';
import {
  Button,
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
  UncontrolledTooltip
} from "reactstrap";

import useInputValue from '../../../hooks/useInputValue';

const UserLogin = ({ onSubmit, error, loading }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <div>  
      <div className='main-content'>
        <Form className='m-auto' disabled={loading} onSubmit={handlerSubmit}>
          <Mylogo
            style={{ width: '200px' }}
            src='https://cdn2.iconfinder.com/data/icons/web-store-crayons-volume-2/256/Login-512.png'
          />
          <Input
            disabled={loading}
            type='email'
            required={true}
            placeholder='Email'
            {...email}
          />
          <Input
            disabled={loading}
            type='password'
            required={true}
            placeholder='Password'
            {...password}
          />
          <Button disabled={loading}>Login</Button>
          <LoginGoogle>
            <FaGofore size='30px' />
            <h1>Login with google</h1>
          </LoginGoogle>
          <Rederict disabled={loading}>
            are you not registered?
            <Link style={{ color: '#fff' }} to='/register'>
              sign in
            </Link>
          </Rederict>
          {error && <Error>{error}</Error>}
          <Foother>developed by ardobot</Foother>
        </Form>
      </div>
    </div>

  );
};
export default UserLogin;