import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import GlobalStyle from '../styles/GlobalStyle';
import Dashboard from '../pages/company/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ScreenLoading from '../components/ScreenLoading';
import GenerateQR from '../pages/company/GenerateQR';
import Sedes from '../pages/company/Sedes';
import ApointWorkerPage from '../pages/subcompany/ApointWorkerPage';
import WorkerPage from '../pages/company/WorkerPage';
import Payroll from '../pages/company/Payroll';
import LayoutDashboard from '../components/LayoutDashboard';
import AuthPage from '../pages/subcompany/AuthPage';
import LayoutApointIndex from '../components/LayoutPointAttention/ApointIndex';
import Client from '../pages/company/Client';
import PricesPage from '../pages/PricesPage';
import UserHomePage from '../pages/UserHomePage';
import ClientPointPage from '../pages/subcompany/ClientPointPage';
import Informs from '../pages/company/Informs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const onAuthStateChange = (callback) => {
  return firebase.auth().onAuthStateChanged(async (user) => {
    try {
      const idTokenResult = await user.getIdTokenResult();
      //console.log(idTokenResult.claims);
      {
        idTokenResult.claims.business && callback({ loggedIn: true, displayName: user.displayName, uid: user.uid, update: false, businness: true, myplan: idTokenResult.claims.myplan });
        !idTokenResult.claims.business && callback({ loggedIn: true, displayName: user.displayName, uid: user.uid, update: false, businness: false, companyId: idTokenResult.claims.companyId });

      }
    } catch (error) {
      callback({ loggedIn: false, update: false, uid: '' });
    }
  });
};

const LoggedInRoutesWithbusiness = [
  <Route key='register' path='/register' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='login' path='/login' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='/' path='/' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='client' path='/client' exact={true} component={Client} />,
  <Route key='dashboard' path='/dashboard' exact={true} component={Dashboard} />,
  <Route key='prices' path='/prices' exact={true} component={PricesPage} />,
  <Route key='dashboardsedes' path='/dashboardsedes' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='generateqr' path='/generateqr' exact={true} component={GenerateQR} />,
  <Route key='worker' path='/worker' exact={true} component={WorkerPage} />,
  <Route key='sedes' path='/sedes' exact={true} component={Sedes} />,
  <Route key='payroll' path='/payroll' exact={true} component={Payroll} />,
  <Route key='userhomepage' path='/userhomepage' exact={true} component={() => <Redirect to='/dashboard' />} />,
  <Route key='clientpoint' path='/clientpoint' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='informs' path='/informs' exact={true} component={Informs} />,
];

const LoggedInRoutesWithOutbusiness = [
  <Route key='home' path='/home' exact={true} component={ApointWorkerPage} />,
  <Route key='control' path='/control' exact={true} component={AuthPage} />,
  <Route key='prices' path='/prices' exact={true} component={PricesPage} />,
  <Route key='clientpoint' path='/clientpoint' exact={true} component={ClientPointPage} />,
  <Route key='/' path='/' exact={true} component={() => <Redirect to='/home' />} />,
  <Route key='login' path='/login' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='register' path='/register' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='generateqr' path='/generateqr' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='dashboard' path='/dashboard' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='sedes' path='/sedes' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='userhomepage' path='/userhomepage' exact={true} component={() => <Redirect to='/home' />} />,
  <Route key='informs' path='/informs' exact={true} component={() => <Redirect to='/home' />} />,
];

const LoggedOut = [
  <Route key='register' path='/register' exact={true} component={Register} />,
  <Route key='login' path='/login' exact={true} component={Login} />,
  <Route key='prices' path='/prices' exact={true} component={PricesPage} />,
  <Route key='userhomepage' path='/userhomepage' exact={true} component={UserHomePage} />,
  <Route key='/' path='/' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='dashboard' path='/dashboard' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='dashboardsedes' path='/dashboardsedes' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='generateqr' path='/generateqr' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='worker' path='/worker' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='sedes' path='/sedes' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='sedes2' path='*' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='informs' path='/informs' exact={true} component={() => <Redirect to='/userhomepage' />} />,
  <Route key='clientpoint' path='/clientpoint' exact={true} component={() => <Redirect to='/userhomepage' />} />,
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
                  isAuth.loggedIn && isAuth.businness === false && (
                    <LayoutApointIndex>
                      { LoggedInRoutesWithOutbusiness }
                    </LayoutApointIndex>
                  ),
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
