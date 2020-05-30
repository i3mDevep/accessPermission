import React from 'react'
import { ListItemsToolbox } from '../ListItemsToolbox'
import { HeaderToolbox } from '../HeaderToolbox'
import { ToolboxContainer } from './style'

export const Toolbox = () => {
    return (
      <ToolboxContainer>
        <HeaderToolbox/>
        <ListItemsToolbox/>
      </ToolboxContainer>
    )
}