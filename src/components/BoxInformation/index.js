import React from 'react'
import { ContainerBox, Img } from './style'

const DEFAUL_IMG = "https://cdn4.iconfinder.com/data/icons/users-v1/64/user_person_avatar-2-512.png"

export const BoxInformation = ({src = DEFAUL_IMG, title="Title", data = "0000"}) => {
    return (
        <ContainerBox>
          <Img src={src}/>
          <div>
            <label>{title}</label>
            <h1>{data}</h1>
          </div>
        </ContainerBox>
    )
}