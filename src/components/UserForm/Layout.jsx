import React from 'react';

import HeaderNavBar from '../Header/HeaderNavBar';
import FooterLogin from '../Footer/FooterLogin';

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
