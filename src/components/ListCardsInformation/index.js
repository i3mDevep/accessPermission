import React from 'react'
import { CardInformation } from '../CardInformation'
import { ContainerList } from './style'

export const ListCardsInformation = () => {
    return (
      <ContainerList>
        <CardInformation/>
        <CardInformation
         src="https://cdn1.iconfinder.com/data/icons/data-analytics-wildberry-vol-1/256/Average-512.png"
         colorL="#c3edea"
         colorR="#c3edea"
         data="250 P/h"
          />
        <CardInformation
          src="https://cdn2.iconfinder.com/data/icons/coronavirus-125/64/3-512.png"
          title="Men"
          data="105"
          colorL="#142850"
          colorR="#00909e"
         />
        <CardInformation
          src="https://cdn4.iconfinder.com/data/icons/user-interface-257/64/59-512.png"
          title="Total"
          data="205"
          colorL="#f1d1d1"
          colorR="#f5a8a8"
        />
      </ContainerList>
    )
}