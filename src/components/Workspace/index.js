import React from 'react'
import { ContainerWorkspace } from './style'
import { ListCardsChart } from '../ListCardsChart'
import { ListCardsInformation } from '../ListCardsInformation'
import { ListTables } from '../Tables/ListTables'

export const Workspace = () => {
    return(
      <ContainerWorkspace>
        <ListCardsInformation />
        <ListCardsChart />
        <ListTables />
      </ContainerWorkspace>
    )
}