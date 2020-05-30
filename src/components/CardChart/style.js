import styled from 'styled-components'

export const Card = styled.div`
 background-color: ${props => props.color};
 color: white;
 width: 300px;
 height: 170px;
 position: absolute;
 top: -20px;
 border-radius: 10px;
`
export const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  position: relative;
  justify-content: center;
  width: 340px;
  height: 230px;
  -webkit-box-shadow: 0px 5px 10px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 10px -4px rgba(0,0,0,0.75);
   box-shadow: 0px 5px 10px -4px rgba(0,0,0,0.75);
   margin: 10px;
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