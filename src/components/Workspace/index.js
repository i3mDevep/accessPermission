import React from 'react'
import { ContainerWorkspace } from './style'
import { ListCardsChart } from '../ListCardsChart'
import { ListCardsInformation } from '../ListCardsInformation'
import { ListTables } from '../Tables/ListTables'
import { HeaderPerfil } from '../HeaderPerfil'

export const Workspace = () => {
    return(
      <ContainerWorkspace>
        <HeaderPerfil />
        <ListCardsInformation />
        <ListCardsChart />
        <ListTables />
      </ContainerWorkspace>
    )
}