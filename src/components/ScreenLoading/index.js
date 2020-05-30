import React from 'react'
import { BlockLoading } from 'react-loadingg';
import { Background } from './style'

export const ScreenLoading = () => {
    return (
      <Background>
        <BlockLoading size="large" />
      </Background>
    )
}