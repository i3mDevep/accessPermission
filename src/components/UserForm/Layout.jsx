import React from 'react';

import HeaderNavBar from '../Header/HeaderLogin/HeaderNavBar';
import FooterLogin from '../Footer/FooterLogin/FooterLogin';

function Layout({ children }) {
  // const children = props.children;

  return (
    <>
      <HeaderNavBar />
      {children}
      <FooterLogin />
    </>
  );
}

export default Layout;
