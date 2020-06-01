import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  position: relative;
  justify-content: center;
  width: 340px;
  height: 260px;
  -webkit-box-shadow: 0px 5px 10px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 10px -4px rgba(0,0,0,0.75);
   box-shadow: 0px 5px 10px -4px rgba(0,0,0,0.75);
   margin: 10px;
   @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  margin-top: 50px;
`
export const Card = styled.div`
 background-color: ${props => props.color};
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 80%;
 height: 230px;
 position: absolute;
 top: -50px;
 border-radius: 10px;
`
export const Title = styled.h3`
    color :#222831;
    font-weight: lighter;
    font-size: 25px;
    padding-top: 30px;
    position: absolute;
    bottom:40px;
    left: 20px;
`