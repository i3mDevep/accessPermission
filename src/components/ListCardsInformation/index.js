import React from 'react'
import { CardInformation } from '../CardInformation'
import { ContainerList } from './style'
import { IoIosPeople } from 'react-icons/io'
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai'

const Info = [
  { color: "#e84a5f", title: "People", data: "155", icon: IoIosPeople },
  { color: "#0a97b0", title: "Women", data: "390", icon: AiOutlineWoman },
  { color: "#6a097d", title: "Men", data: "723", icon: AiOutlineMan },
  { color: "#ff5200", title: "Average age", data: "$254,000" },
]

export const ListCardsInformation = () => {
    return (
      <ContainerList>
        {
          Info.map((item,index) => {
            return (
              <CardInformation
                key= {`cardInformation-${index}`}
                color= { item.color }
                title= { item.title }
                data= {item.data}
                ContentIcon= {item.icon}/>
            )
          })
        }
      </ContainerList>
    )
}