import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap';

export const CustomeDropdown = styled(Dropdown)`
  position: relative;
`
export const CustomeDropdownTogle = styled(Dropdown.Toggle)`
  position: absolute;
  border: none;
  width: 10px;
  display: flex;
  justify-content: center;
  bottom: -10px;
  left: 12px;
`
export const Title = styled.label`
  padding: 0 0 0 40px;
  color: #8888;
  font-size: 20px;
`
export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  align-items: center;
  position: relative;
  left: -12px;
`
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 50px;
  width: 50px;
`