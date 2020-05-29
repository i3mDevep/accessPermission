import React from 'react'
import { LoopCircleLoading } from 'react-loadingg';
import { Background } from './style'

export const ScreenLoading = () => {
    return (
      <Background>
        <LoopCircleLoading />
      </Background>
    )
}