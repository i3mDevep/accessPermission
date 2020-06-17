import React from 'react';
import HeaderNavBar from './Header';
import Footer from './Footer';
import { Background } from './style';

const Layout = ({ children }) => (
  <Background>
    <HeaderNavBar />
    { children }
    <Footer />
  </Background>
);

export default Layout;
