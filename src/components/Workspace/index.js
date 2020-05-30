import React from 'react'
import { ContainerWorkspace } from './style'
import { CardChart } from '../CardChart'
import { ListCardsInformation } from '../ListCardsInformation'

export const Workspace = () => {
    return(
      <ContainerWorkspace>
        <ListCardsInformation />
        <CardChart />
      </ContainerWorkspace>
    )
}