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
import GenerateQR from '../pages/GenerateQR';
import CreateSede from '../pages/CreateSede';
import SedesPage from '../pages/SedesPage';
import LayoutDashboard from '../components/LayoutDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth';
import 'firebase/firestore';

const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged(async (user) => {
    try {
      const idTokenResult = await user.getIdTokenResult();
      console.log(idTokenResult);
      callback({ loggedIn: true, uid: user.uid, update: false, businness: idTokenResult.claims.business });
    } catch (error) {
      callback({ loggedIn: false, update: false, uid: '' });
    }
  });
};
const LoggedInRoutesWithbusiness = [
  <Route path='/register' component={() => <Redirect to='/dashboard' />} />,
  <Route path='/' component={() => <Redirect to='/dashboard' />} />,
  <Route path='/dashboard' component={Dashboard} />,
  <Route path='/dashboardsedes' component={() => <Redirect to='/dashboard' />} />,
  <Route path='/generateqr' component={GenerateQR} />,
  <Route path='/sedes' component={CreateSede} />,
];
const LoggedInRoutesWithOutbusiness = [
  <Route path='/dashboardsedes' component={SedesPage} />,
  <Route path='/login' component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/register' component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/generateqr' component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/dashboard' component={() => <Redirect to='/dashboardsedes' />} />,
  <Route path='/sedes' component={() => <Redirect to='/dashboardsedes' />} />,
];
const LoggedOut = [
  <Route path='/register' component={Register} />,
  <Route path='/login' component={Login} />,
  <Route path='/' component={() => <Redirect to='/login' />} />,
  <Route path='/dashboard' component={() => <Redirect to='/login' />} />,
  <Route path='/dashboardsedes' component={<Route path='/login' component={Login} />} />,
  <Route path='/generateqr' component={<Route path='/login' component={Login} />} />,
  <Route path='/sedes' component={<Route path='/login' component={Login} />} />,
];
const App = ({ signIn, isAuth }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChange(signIn);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <GlobalStyle />
      {
        isAuth.update ?
          <ScreenLoading /> : (
            <BrowserRouter>
              <Switch>
                {[
                  isAuth.loggedIn && isAuth.businness === true && <LayoutDashboard>{LoggedInRoutesWithbusiness}</LayoutDashboard>,
                  isAuth.loggedIn && isAuth.businness === undefined && LoggedInRoutesWithOutbusiness,
                  !isAuth.loggedIn && LoggedOut,
                ]}
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
