import React from 'react'
import { ContainerBox, Icon } from './style'
import { AiOutlineBarChart } from 'react-icons/ai'

const DEFAULT_ICON = AiOutlineBarChart


export const CardInformation = (
  {ContentIcon = DEFAULT_ICON, title="Title", data = "$254,000",color="#9a1f40", size = 30}) => {
    return (
        <ContainerBox>
          <Icon color = {color}>
            <ContentIcon size="30"/>
          </Icon>
          <div>
            <label>{title}</label>
            <h3>{data}</h3>
          </div>
        </ContainerBox>
    )
}