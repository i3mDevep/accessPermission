import React from 'react';

import HeaderNavBar from '../Header/HeaderLogin/HeaderNavBar';
import FooterLogin from '../Footer/FooterLogin/FooterLogin';

import './Layout.scss';


function Layout({ children }) {
  // const children = props.children;

  return (
    <div container>
      <HeaderNavBar />
      {children}
      <FooterLogin />
    </div>
  );
}

export default Layout;
