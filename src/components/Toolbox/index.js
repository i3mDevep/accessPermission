import React, { useState } from 'react'
import { ListItemsToolbox } from '../ListItemsToolbox'
import { HeaderToolbox } from '../HeaderToolbox'
import { useGetsize } from '../../hooks/useGetsize'
import { ToolboxContainer, Menu, Wrapper } from './style'

export const Toolbox = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [width, height] = useGetsize(window.innerWidth,window.innerHeight)

  return (width > 508 ?
    <ToolboxContainer>
      <HeaderToolbox />
      <ListItemsToolbox />
    </ToolboxContainer> : showMenu ?
    <div>
      <Menu color="#fff" onClick = { () => setShowMenu(!showMenu) }/>
      <ToolboxContainer modeCellPhone = { true }>
        <HeaderToolbox />
        <ListItemsToolbox />
        <Wrapper />
      </ToolboxContainer>
    </div> : <Menu color="#16817a" onClick = { () => setShowMenu(!showMenu) }/>
  )
}