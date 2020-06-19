import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase } from 'react-icons/fa';
import { RiQrCodeLine } from 'react-icons/ri';
import { MdFiberNew } from 'react-icons/md';
import { ItemToolbox } from '../ItemToolbox';

const icons = [FaUserAstronaut, FaChild, FaCog, FaTemperatureHigh, FaDatabase, RiQrCodeLine, MdFiberNew];
const messages = ['Dashboard', 'Empleados', 'Clientes', 'Informes', 'Alertas', 'Generador QR', 'Sedes'];
const links = ['/dashboard', '', '', '', '', '/generateqr', '/sedes'];

const ListItemsToolbox = ({ onClick }) => {
  return (
    <>
      {
        icons.map((icon, index) => (
          <Link key={`tolb-${index}`} to={links[index]} onClick={onClick}>
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
