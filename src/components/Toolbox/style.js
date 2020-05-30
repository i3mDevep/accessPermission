import styled from 'styled-components'
import { FaAlignJustify } from "react-icons/fa"
import { Traslation } from '../../styles/Traslation'

export const ToolboxContainer = styled.nav`
  background-color: #0b4779;
  height: 100vh;
  max-width: 200px;
  padding: 20px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  position: fixed;
  top: 0;
  ${ props => ( props.modeCellPhone && Traslation() ) }
  z-index: 100;
`
export const Menu = styled(FaAlignJustify)`
  margin: 15px;
  font-size: 25px;
  position: fixed;
  z-index: 200;
`
export const Wrapper = styled.div`
 background:rgba(0,0,0,.3);
 position: absolute;
 top: 0;
 margin-left: 160px;
 height:100vh;
 width: 500px;
`