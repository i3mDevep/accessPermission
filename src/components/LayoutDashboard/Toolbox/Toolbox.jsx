import React, { useState } from 'react';
import ListItemsToolbox from '../ListItemsToolbox';
import { HeaderToolbox } from '../HeaderToolbox';
import useGetsize from '../../../hooks/useGetsize';
import { ToolboxContainer, Menu, Wrapper } from './style';

const Toolbox = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [width, height] = useGetsize(window.innerWidth, window.innerHeight);

  return (width > 508 ? (
    <ToolboxContainer show={true}>
      <HeaderToolbox />
      <ListItemsToolbox />
    </ToolboxContainer>
  ) : (
    <div>
      <Menu color={showMenu ? '#fff' : '#0a97b0'} onClick={() => setShowMenu(!showMenu)} />
      <ToolboxContainer modeCellPhone={true} show={showMenu}>
        <HeaderToolbox />
        <ListItemsToolbox onClick={() => setShowMenu(false)} />
        <Wrapper />
      </ToolboxContainer>
    </div>
  )
  );
};

export default Toolbox;
