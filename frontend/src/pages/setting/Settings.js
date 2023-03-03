import React, { useState } from 'react'

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { BorderColor, Group, Groups, Person } from '@mui/icons-material';
import './Setting.css'
import { Button, Divider, Input, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Profile from './Profile/Profile';
import Billing from './Billing';
import Integration from './Integration';
import Team from './Team/Team';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};


const Tab = styled(TabUnstyled)` 
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  margin-bottom: 0px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

const Settings = () => {

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList className='tab-items'>
        <Tab><Person /></Tab>
        <Tab><Groups /> </Tab>
        <Tab className='bill-icon'></Tab>
        <Tab className='integration-icon'></Tab>
      </TabsList>
      <TabPanel value={0} className='tab-data' sx={{ color: '#0071BC', fontWeight: 600, fontSize: '22px', lineHeight: '33px', textTransform: 'capitalize' }}>PROFILE</TabPanel>
      <TabPanel value={1} className='tab-data' sx={{ color: '#0071BC', fontWeight: 600, fontSize: '22px', lineHeight: '33px', textTransform: 'capitalize' }}>Teams</TabPanel>
      <TabPanel value={2} className='tab-data' sx={{ color: '#0071BC', fontWeight: 600, fontSize: '22px', lineHeight: '33px', textTransform: 'capitalize' }}>Billing</TabPanel>
      <TabPanel value={3} className='tab-data' sx={{ color: '#0071BC', fontWeight: 600, fontSize: '22px', lineHeight: '33px', textTransform: 'capitalize' }}>Integrations</TabPanel>
      <Divider />
      <TabPanel value={0} className='tab-data'>
        <Profile />
      </TabPanel>
      <TabPanel value={1} className='tab-data'>
        <Team />
      </TabPanel>
      <TabPanel value={2} className='tab-data'>
        <Billing />
      </TabPanel>
      <TabPanel value={3} className='tab-data'>
        <Integration />
      </TabPanel>
    </TabsUnstyled>
  )
}

export default Settings

