import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserRegister } from '../components/UserForm';
import LayoutUserForm from '../components/LayoutUserForm';
import { showAlert } from '../store/actions/sweetAlertActions';

const RegisterContainer = ({ showAlert }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const handlerOnsubmit = async ({ email, password, company, celphone, address, city, plan }) => {
    setLoading(true);
    const data = { email, password, company, celphone, address, city, myplan: plan, displayName: company };
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(
        'https://us-central1-coronavirus-control.cloudfunctions.net/apiReset/createBusiness',
        config,
      );
      const res = await response.json();
      if (!res.result) {
        setError(res.responseError);
      } else {
        setError('');
        showAlert({
          type: 'success',
          title: 'Exitoso!',
          content: 'Registro exitoso',
          showCancel: false,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <LayoutUserForm>
      <UserRegister
        error={error}
        loading={loading}
        onSubmit={handlerOnsubmit}
      />
    </LayoutUserForm>
  );
};

export default connect(null, { showAlert })(RegisterContainer);
