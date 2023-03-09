import { Typography, Grid, OutlinedInput, Paper, Button } from '@mui/material'
import React, { useState } from 'react'

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import home from '../../../Assets/house.png'

const AddCommunity = ({ currentStep }) => {
  const [communityName, setCommunityName] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");


  function getCommunityModelData(steps) {
    switch (steps) {
      case 0:
        return (
          <div className='community-model-1' style={{ margin: '0 auto' }}>
            <Typography variant='h6' className=" model-title" sx={{ ml: '10px' }}>
              Where is the Community located?
            </Typography>
            <Typography variant="span" sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600', m: '10px', borderRadius: '10px', }}>
              Community Name
            </Typography>
            <Grid item xs={12}>
              <OutlinedInput
                fullWidth
                className='community-input'
                placeholder="Lorem ipsum dolor sit amet..."
                sx={{
                  borderRadius: '10px',
                  m: '10px',
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#000'
                }}
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
              />
            </Grid>
            <Typography variant="span" sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600', ml: '10px' }}>
              Address
            </Typography>
            <Grid item xs={12}>
              <OutlinedInput
                fullWidth
                className='community-input'
                sx={{
                  borderRadius: '10px',
                  m: '10px',
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#000'
                }}
                value={address1}
                placeholder="2830 Charla Lane..."
                onChange={(e) => setAddress1(e.target.value)}
              />
              <OutlinedInput
                fullWidth
                className='community-input'
                sx={{
                  borderRadius: '10px',
                  m: '10px',
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#000'
                }}
                value={address2}
                placeholder="Enter your Address"
                onChange={(e) => setAddress2(e.target.value)}
              />
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Typography variant='div' component='div' className="city">City</Typography>
                <OutlinedInput
                  className='model-input'
                  placeholder="Enter your City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant='div' component='div' className="zipcode">
                  Zip Code
                </Typography>
                <OutlinedInput
                  className='model-input'
                  value={zipcode}
                  placeholder="Enter your Zip Code"
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
        )
      case 1:
        return (
          <div className='community-model-2' style={{ margin: '0 auto' }}>
            <Typography variant='h6' className=" model-title">
              Which team manages this community?
            </Typography>
            <Paper
              sx={{
                boxShadow: 'none',
                mt: '5px',
                width: '100%',
                borderRadius: '10px',
                gap: '20px'
              }}>
              <div>
                <Select
                  placeholder="Select a Team"
                  indicator={<KeyboardArrowDown sx={{ color: '#0071BC', fontSize: '44px' }} />}
                  className='select-team'
                  displayEmpty
                  sx={{
                    opacity: 1,
                    width: 640,
                    color: '#0071BC',
                    "&:hover": {
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      color: '#0071BC',
                    },
                    [`& .${selectClasses.indicator}`]: {
                      transition: '0.5s',
                      [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                      },
                    },
                  }}
                >
                  <Option value='Lorem'>Lorem ipsum dolor sit amet...</Option>
                  <Option value='Eagle'>Eagle Property Management</Option>
                  <Option value='Eagle mgt'>Lorem ipsum dolor sit amet...</Option>
                </Select>
              </div>
            </Paper>
          </div>
        )
      case 2:
        return (
          <div className='community-model-3' style={{ margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
              <img src={home} alt="" className='house' />
              <Button variant="contained" sx={{ borderRadius: '20px', fontSize: '26px', fontWeight: '500', width: '100%', m: 'auto' }}>Community Created!</Button>
              <Typography variant='span' sx={{ color: '#868686', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>Community Address</Typography>
              <Typography sx={{ color: '#000000', textAlign: 'center', fontWeight: '400', fontSize: '12px' }}>
                Community Name was successfully created.
              </Typography>
              <Typography sx={{ color: '#000000', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>
                Would you like to set up a new Inspection for the community?
              </Typography>
            </div>
          </div>
        )

      default:
        break;
    }
  }


  return (
    <>
      {getCommunityModelData(currentStep)}
    </>
  )
}

export default AddCommunity