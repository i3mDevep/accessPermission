import styled from 'styled-components'

export const ContainerBox = styled.div`
  display: flex;
  margin: 5px 10px 30px 10px;
  position: relative;
  justify-content: space-around;
  border-radius: 5px;
  width: 240px;
  height: 120px;
  border-radius: 2px;
  background-color:#f9f9f9;
  -webkit-box-shadow: 0px 1px 15px -2px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 1px 15px -2px rgba(0,0,0,0.32);
  box-shadow: 0px 1px 15px -2px rgba(0,0,0,0.32);
  & label {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888888;
  }
  & h3 {
    color :#222831;
    font-weight: normal;
    font-size: 25px;
    padding-top: 30px;
    position: absolute;
    right: 10px;
  }
  @media (max-width: 1300px) {
    width: 40%;
    & h3 {
    font-size: 20px;
    }
  }
  @media (max-width: 748px) {
    width: 100%;
    & h3 {
    font-size: 20px;
    }
  }
`
export const Img = styled.img`
  position: absolute;
  border-radius: 3px;
  left: 8px;
  top: -10px;
  padding: 8px;
  width: 90px;
  height: 90px;
  object-fit:cover;
  background: linear-gradient(to right,${props => props.colorR},${props=>props.colorL});
`