import React from 'react';
import { Link } from 'react-router-dom';
import { Background, Form, Input, Mylogo, Foother, Button, Rederict, Error } from './style';
import useInputValue from '../../../hooks/useInputValue';

const UserRegister = ({ onSubmit, loading, error }) => {
  const company = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');
  const chellphone = useInputValue('');
  const address = useInputValue('');
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value,
      password: password.value,
      company: company.value,
      cellphone: chellphone.value,
      address: address.value });
  };
  return (
    <Background>
      <Form disabled={loading} onSubmit={handlerSubmit}>
        <Mylogo style={{ width: '200px' }} src='https://cdn1.iconfinder.com/data/icons/business-finance-53/512/8-512.png' />
        <Input disabled={loading} type='text' required={true} placeholder='Company' {...company} />
        <Input disabled={loading} type='email' required={true} placeholder='Email' {...email} />
        <Input disabled={loading} type='password' required={true} placeholder='Password' {...password} />
        <Input disabled={loading} type='tel' required={true} placeholder='Cellphone' {...chellphone} />
        <Input disabled={loading} type='text' required={true} placeholder='Address' {...address} />
        { error && <Error>{ error }</Error> }
        <Button disabled={loading}>Sign up</Button>
        <Rederict disabled={loading}>
          are you already registered?
          <Link style={{ color: '#fff' }} to='/login'> login</Link>
        </Rederict>
        <Foother>developed by ardobot</Foother>
      </Form>
    </Background>
  );
};
export default UserRegister;
