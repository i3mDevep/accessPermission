import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ScreenLoading from '../components/ScreenLoading';

import { Context } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <div>
      <GlobalStyle />
      {
        isAuth.update ?
          <ScreenLoading /> : (
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={() => <Login />} />
                <Route exact path='/login' component={() => <Login />} />
                <Route exact path='/register' component={() => <Register />} />
                <Route exact path='/dashboard' component={() => <Dashboard />} />
              </Switch>
            </BrowserRouter>
          )
      }
    </div>
  );
};

export default App;
