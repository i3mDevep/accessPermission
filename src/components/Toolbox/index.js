import React from 'react'
import { ItemsList } from '../ItemsList'
import { HeaderToolbox } from '../HeaderToolbox'
import { ToolboxContainer } from './style'

export const Toolbox = () => {
    return (
      <ToolboxContainer>
        <HeaderToolbox/>
        <ItemsList />
      </ToolboxContainer>
    )
}