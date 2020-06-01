import React from 'react';
import { BlockLoading } from 'react-loadingg';
import { Background } from './style';

const ScreenLoading = () => {
  return (
    <Background>
      <BlockLoading size='large' />
    </Background>
  );
};
export default ScreenLoading;
