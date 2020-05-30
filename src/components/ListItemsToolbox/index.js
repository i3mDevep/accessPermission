import React, { Fragment } from 'react'
import { ItemToolbox } from '../ItemToolbox'
import { FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase } from 'react-icons/fa';

const icons = [FaUserAstronaut,FaChild,FaCog, FaTemperatureHigh, FaDatabase]
const messages = ["DASHBOARD","PEOPLE","SETUP","TEMPERATURE","DATABASE"]

export const ListItemsToolbox = () => {
    return (
      <Fragment>
        {
          icons.map((icon,index) => (
            <ItemToolbox key = {`tolb-${index}`} message = { messages [index]}>
              {
                icon()
              }
            </ItemToolbox>
          ))
        }
      </Fragment>
    )
}