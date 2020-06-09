import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import GlobalStyle from '../styles/GlobalStyle';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ScreenLoading from '../components/ScreenLoading';
import 'bootstrap/dist/css/bootstrap.min.css';

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email, update: false });
    } else {
      callback({ loggedIn: false, update: false, email: '' });
    }
  });
}

const App = ({ signIn, isAuth }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChange(signIn);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>

      {
        isAuth.update ?
          <ScreenLoading /> : (
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={() => <Redirect to='/login' />} />
                <Route exact path='/login' component={() => (!isAuth.loggedIn ? <Login /> : <Redirect to='/dashboard' />)} />
                <Route exact path='/register' component={() => (!isAuth.loggedIn ? <Register /> : <Redirect to='/dashboard' />)} />
                <Route exact path='/dashboard' component={() => (isAuth.loggedIn ? <Dashboard /> : <Redirect to='/login' />)} />
              </Switch>
            </BrowserRouter>
          )
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (info) => dispatch(signIn(info)),
  };
};
const mapStateProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateProps, mapDispatchToProps)(App);
