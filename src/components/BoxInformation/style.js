import styled from 'styled-components'

export const ContainerBox = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 250px;
  height: 120px;
  border-radius: 10px;
  background-color:#f9f9f9;
  -webkit-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.48);
  -moz-box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.48);
  box-shadow: 0px 1px 9px 0px rgba(0,0,0,0.48);
  & label {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888888;
  }
  & h1 {
    padding-top: 30px;
  }
`
export const Img = styled.img`
  padding: 8px;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  object-fit:cover;
`