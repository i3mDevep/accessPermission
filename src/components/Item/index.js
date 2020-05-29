import React from 'react'
import { Container } from './style'

export const Item = ({ children, message }) => {
    return (
      <Container>
        <div>
          { children }
        </div>
        <label>{ message }</label>
      </Container>
    )
}