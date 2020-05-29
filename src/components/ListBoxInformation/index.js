import React from 'react'
import { BoxInformation } from '../BoxInformation'
import { ContainerList } from './style'

export const ListBoxInformation = () => {
    return (
      <ContainerList>
        <BoxInformation
          src={"https://cdn3.iconfinder.com/data/icons/picons-weather/57/53_warning-512.png"}
          title={"Unauthorized"}
          data={"150"}
          />
        <BoxInformation
          src="https://cdn0.iconfinder.com/data/icons/school-medicine-people-1/110/Scientist-Woman-2-512.png"
          title="Women"
          data="100"
        />
        <BoxInformation 
          src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man11-512.png"
          title="Men"
          data="105"
         />
        <BoxInformation
          src="https://cdn3.iconfinder.com/data/icons/development-icons/128/access-512.png"
          title="Total"
          data="205"
        />
      </ContainerList>
    )
}