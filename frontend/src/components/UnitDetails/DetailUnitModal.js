import React, { useState } from 'react'
import { Grid, styled, Typography, Box } from '@mui/material';
import update from '../../Assets/update.png'
import CommonDatePiker from '../Datepicker/CommonDatePiker';
import Approved from '../../Assets/approved.png'

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#0071BC1a',
  paddingLeft: '38px',
  paddingTop: '12px',
  paddingBottom: '12px',
  textAlign: 'left',
  borderRadius: '10px'
}));

export const AddInspectionModal = () => {
  return (
    <>
      <div className='update-add-inspection-1'>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", pt: '30px', fontSize: '20px', lineHeight: '30px', color: '#000000' }}>
          1 Windance Ct
        </Typography>
        <Typography sx={{ fontSize: '16px', color: '#00000080', fontWeight: 500 }}>
          3 Bedrooms, 2 Full Bathrooms, 1 Half Bathroom
        </Typography>
        <Typography variant='div' component='div' className='grid-content'>
          <Box sx={{ width: '100%', py: '30px' }}>
            <Grid container rowSpacing='30px' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Front Porch
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    1 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Front Door
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    1 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Dining Room
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    4 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Living Room
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    4 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Bedroom
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    6 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Full Bathroom
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    9 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Half Bathroom
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    8 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Bedroom
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    6 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Full Bathroom
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    9 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Bedroom
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    6 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Laundry Room
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    6 step
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
                    Hallway
                  </Typography>
                  <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
                    4 step
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Typography>
      </div>
    </>
  )
}

export const DetailUnitTable = () => {
  return (
    <div className='update-add-inspection-2'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", pt: '30px', fontSize: '16px', lineHeight: '24px', color: '#000000' }}>
            Inspection Type
          </Typography>
          <Typography variant='span' component='span' sx={{ fontWeight: "500", pt: '30px', fontSize: '16px', lineHeight: '24px', color: '#0071BC' }}>Annual</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", pt: '30px', fontSize: '16px', lineHeight: '24px', color: '#000000' }}>
            Due Date
            <img src={update} alt="update icon" height='10px' style={{ marginLeft: '10px' }} />
          </Typography>
          <CommonDatePiker />
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", pt: '30px', pb: '10px', fontSize: '16px', lineHeight: '24px', color: '#000000' }}>
            Approval to Send
          </Typography>
          <Typography variant='div' component='div' sx={{ background: '#0071BC1a', color: '#0071BC', py: '12px', px: '34px', cursor: 'pointer', borderRadius: '10px', textAlign: 'center', width: 'fit-content' }}>
            <img src={Approved} alt="" height='12px' width='12px' style={{ marginRight: '10px' }} />
            Approved
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", pt: '30px', pb: '10px', fontSize: '16px', lineHeight: '24px', color: '#000000' }}>
            Recipient Email Address
            <img src={update} alt="update icon" height='10px' style={{ marginLeft: '10px' }} />
          </Typography>
          <Typography variant='div' component='div' sx={{ background: '#0071BC1a', py: '12px', mb: '5px', px: '22px', cursor: 'pointer', borderRadius: '10px', color: '#000000', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>
            Loremipsum@gmail.com
          </Typography>
          <Typography variant='div' component='div' sx={{ background: '#0071BC1a', py: '12px', mb: '5px', px: '22px', cursor: 'pointer', borderRadius: '10px', color: '#000000', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>
            Loremipsum@gmail.com
          </Typography>
          <Typography variant='div' component='div' sx={{ background: '#0071BC1a', py: '12px', mb: '5px', px: '22px', cursor: 'pointer', borderRadius: '10px', color: '#000000', fontWeight: 500, fontSize: '14px', lineHeight: '21px' }}>
            Loremipsum@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
