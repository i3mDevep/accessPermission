import styled from 'styled-components';
import { FaAlignJustify } from 'react-icons/fa';
import { Traslation } from '../../styles/Traslation';
import { HiddenToolbox } from '../../styles/HiddenToolbox';

export const ToolboxContainer = styled.nav`
  /*background-color: #0b4779;*/
  background-image:url(https://cdn.pixabay.com/photo/2020/04/22/12/12/background-5077810_960_720.png);
  background-position: left;
  background-attachment: contain;
  background-size: cover;
  object-fit: cover;
  height: 100vh;
  max-width: 200px;
  padding: 20px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  position: fixed;
  top: 0;
  ${(props) => (props.modeCellPhone && Traslation())}
  z-index: 100;
  ${(props) => !props.show && HiddenToolbox()}
`;
export const Menu = styled(FaAlignJustify)`
  margin: 15px;
  font-size: 25px;
  position: fixed;
  z-index: 200;
`;
export const Wrapper = styled.div`
 background:rgba(0,0,0,.3);
 position: absolute;
 top: 0;
 margin-left: 158px;
 height:100vh;
 width: 500px;
`;
