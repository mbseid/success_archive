import React from 'react';

// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'People',
    path: '/people',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Links',
    path: '/links',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default navConfig;
