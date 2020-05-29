import React, { Fragment } from 'react'
import { Item } from '../Item'
import { FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase } from 'react-icons/fa';

const icons = [FaUserAstronaut,FaChild,FaCog, FaTemperatureHigh, FaDatabase]
const messages = ["DASHBOARD","PEOPLE","SETUP","TEMPERATURE","DATABASE"]

export const ItemsList = () => {
    return (
      <Fragment>
        {
          icons.map((icon,index) => (
            <Item key = {`tolb-${index}`} message = { messages [index]}>
              {
                icon()
              }
            </Item>
          ))
        }
      </Fragment>
    )
}