import React from 'react';
import LayoutUserForm from '../components/LayoutUserForm';
import ComingSoon from '../components/CommingSoon/CommingSoon';
import Header from '../components/LayoutUserForm/Header';
import Footer from '../components/LayoutUserForm/Footer';
import { Background } from '../components/LayoutUserForm/style';

const DonacionesPage = () => {
  return (
    <>
      <Background style={{ height: '15vh' }}>
        <Header />
      </Background>
      <body>
        <ComingSoon />
      </body>
      <Background style={{ height: '10vh' }}>
        <Footer />
      </Background>
    </>

  );

};

export default DonacionesPage;
