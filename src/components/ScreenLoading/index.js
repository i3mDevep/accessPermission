import React from 'react';
import { BlockLoading, LoopCircleLoading } from 'react-loadingg';
import { Background, Background2 } from './style';

const ScreenLoading = () => {
  return (
    <Background>
      <BlockLoading size='large' />
    </Background>
  );
};

export const ScreenLoading2 = () => {
  return (
    <Background2>
      <LoopCircleLoading size='large' />
    </Background2>
  );
};
export default ScreenLoading;
