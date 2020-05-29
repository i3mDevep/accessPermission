import styled from 'styled-components'
import { fadeIn } from '../../../styles/FadeIn'

export const Background = styled.div`
 background: linear-gradient(to bottom,#0b4779,#1b6ca8);
 height: 100%;
 width: 100vw;
 overflow: auto;
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 top: 0;
 left: 0;
`
export const Form = styled.form`
 ${fadeIn()}
 background-color:transparent;
 position: relative;
 display: flex;
 flex-direction:column;
 border-radius: 20px;
 border: 4px solid white;
 align-items: center;
 width: 80%;
 min-height: 520px;
 max-width: 350px;
 color: white;
 &[disabled]{
    opacity: .3;
 }
`
export const Rederict = styled.label`
  margin-top: 5px;
  font-size:10px;
`
export const Input = styled.input`
background-color:transparent;
border: 2px solid white;
padding: 10px;
width: 70%;
margin: 5px;
border-radius: 20px;
color: white;
outline: none;
&::placeholder {
    color: white;
}
`
export const Mylogo = styled.img`
 padding: 10px;
 max-height: 300px;
 object-fit: contain;
`
export const Foother = styled.label`
 position: absolute;
 bottom: 10px;
 font-size: 10px;
`
export const Button = styled.button`
 background-color: #fdc317;
 margin: 20px 0 0;
 padding: 10px;
 font-size: 15px;
 font-weight: bold;
 color: #ffff;
 width: 30%;
 border-radius: 10px;
`
export const LoginGoogle = styled.div`
 display: flex;
 padding-top: 20px;
 align-items: center;
 justify-content:center;
 width: 100%;
 & h1 {
     font-size: 10px;
 }
`
export const Error = styled.span`
  margin-top: 5px;
  padding: 5px;
  text-align: center;
  color: white;
  width: 100%;
  background-color: rgba(240,0,0,.5);
  font-size: 15px;
`