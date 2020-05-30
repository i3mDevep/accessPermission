import styled from 'styled-components'

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
  left: 0;
  @media (max-width: 508px) {
    visibility: hidden;
  }
`