import React from 'react'
import { Container } from './style'

export const ItemToolbox = ({ children, message }) => {
    return (
      <Container>
          { children }
        <label>{ message }</label>
      </Container>
    )
}