import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 color: #ffff;
 align-items: center;
 height: 30px;
 padding: 20px;
 width: 100%;
 & label {
    font-size: calc(10px + .3vw);
    margin: 0 0 0 10px;
 }
 &:hover{
   background-color: #0b4779;
 }
`
