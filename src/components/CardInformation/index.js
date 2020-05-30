import React from 'react'
import { ContainerBox, Img } from './style'

const DEFAUL_IMG = "https://cdn4.iconfinder.com/data/icons/marketing-seo-1-3/1024/visitors-512.png"

export const CardInformation = (
  {src = DEFAUL_IMG, title="Title", data = "$254,000",colorR="#9a1f40",colorL="#d9455f"}) => {
    return (
        <ContainerBox>
          <div>
            <Img src={src} colorR={colorR} colorL={colorL}/>
          </div>
          <div>
            <label>{title}</label>
            <h3>{data}</h3>
          </div>
        </ContainerBox>
    )
}