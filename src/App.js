import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from './styles/GlobalStyle'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Context from './Context'

export const App = () => (
    <Fragment>
      <GlobalStyle />
      <Context.Consumer>
      {
        ({isAuth}) => (
            <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => <Login />} />
              <Route exact path="/login" component={() => <Login />} />
              <Route exact path="/register" component={() => <Register />} />
              <Route exact path="/dashboard" component={() => <Dashboard />} />
            </Switch>
          </BrowserRouter>
        )
      }
      </Context.Consumer>
    </Fragment>
)
