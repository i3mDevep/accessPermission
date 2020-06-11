import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase } from 'react-icons/fa';
import { RiQrCodeLine } from 'react-icons/ri';
import { ItemToolbox } from '../ItemToolbox';

const icons = [FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase, RiQrCodeLine];
const messages = ['DASHBOARD', 'PEOPLE', 'SETUP', 'TEMPERATURE', 'DATABASE', 'GENERATEQR'];
const links = ['/dashboard', '', '', '', '', '/generateqr'];

const ListItemsToolbox = () => {
  return (
    <>
      {
        icons.map((icon, index) => (
          <Link key={`tolb-${index}`} to={links[index]}>
            <ItemToolbox message={messages[index]}>
              {
                icon()
              }
            </ItemToolbox>
          </Link>
        ))
      }
    </>
  );
};
export default ListItemsToolbox;
