import React from 'react';

import HeaderNavBar from '../Header/HeaderLogin/HeaderNavBar';
import FooterLogin from '../Footer/FooterLogin/FooterLogin';

function Layout({ children }) {
  // const children = props.children;

  return (
    <div>
      <HeaderNavBar />
      {children}
      <FooterLogin />
    </div>
  );
}

export default Layout;
