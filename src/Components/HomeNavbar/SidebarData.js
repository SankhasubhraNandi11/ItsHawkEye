import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <RiIcons.RiComputerLine/>,
    cName: 'nav-text'
  },
  {
    title: 'Farm analysis',
    path: '/farmanalysis',
    icon: <GoIcons.GoGraph/>,
    cName: 'nav-text'
  },

  {
    title: 'Alerts',
    path: '/alerts',
    icon: <RiIcons.RiAlertFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Store',
    path: '/store',
    icon: <RiIcons.RiShoppingCart2Fill/>,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <IoIcons.IoLocation/>,
    cName: 'nav-text'
  },
  {
    title: 'Schemes',
    path: '/schemes',
    icon: <BiIcons.BiCloudLightning/>,
    cName: 'nav-text'
  },
];