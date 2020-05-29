import React, { Fragment } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Context from './Context'

export const App = () => (
    <Fragment>
      <GlobalStyle />
      <Context.Consumer>
      {
        ({isAuth}) => (
            <BrowserRouter>
            <Switch>
              {/* <Route exact path="/login" component={() => isAuth.loggedIn?
                <Redirect to="/dashboard" />:
                <Login />}
                /> */}
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
