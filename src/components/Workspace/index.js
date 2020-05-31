import React from 'react'
import { ContainerWorkspace } from './style'
import { ListCardsChart } from '../ListCardsChart'
import { ListCardsInformation } from '../ListCardsInformation'
import { PersonalInformation } from '../Tables/PersonalInfo'

export const Workspace = () => {
    return(
      <ContainerWorkspace>
        <ListCardsInformation />
        <ListCardsChart />
        <PersonalInformation />
      </ContainerWorkspace>
    )
}