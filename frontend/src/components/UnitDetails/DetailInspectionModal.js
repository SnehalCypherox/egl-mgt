import React, { useEffect, useState } from 'react'
import close from "../../Assets/close.png";
import { Grid, ListItem, Modal, Paper, styled, Typography, Box, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '720px',
  bgcolor: 'white',
  border: 'unset',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#0071BC1a',
  paddingLeft: '38px',
  paddingTop: '12px',
  paddingBottom: '12px',
  textAlign: 'left',
  borderRadius: '10px'
}));

const DetailInspectionModal = ({ openUnitUpdate, closeUnitUpdate }) => {
  // const [open, setOpen] = useState(false);

  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Modal
        open={openUnitUpdate}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='close-icon cursor-pointer' onClick={handleClose}>
            <img src={close} alt="" />
          </div>
          <div id="modal-modal-title" className='model-header'>
            <span>Add Inspection</span>
            <p>Confirm unit details to continue.</p>
          </div>
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
          <Typography variant='div' component='div' className='buttons' sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button className="model-btn-light" sx={{ ml: 'auto' }} onClick={handleClose}>
              Cancel
            </Button>
            <Button className="model-btn" sx={{ ml: 'auto' }}>
              Continue
            </Button>
          </Typography>

        </Box>
      </Modal>
    </>

    //   <Modal
    //   open={openUnitUpdate}
    //   onClose={handleClose}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    //   <Box sx={style}>
    //     <div className='close-icon cursor-pointer' onClick={handleClose}>
    //       <img src={close} alt="" />
    //     </div>
    //     <div id="modal-modal-title" className='model-header'>
    //       <span>Add Inspection</span>
    //       <p>Confirm unit details to continue.</p>
    //     </div>
    //     <div className='update-add-inspection-1'>
    //       <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: "600", pt: '30px', fontSize: '20px', lineHeight: '30px', color: '#000000' }}>
    //         1 Windance Ct
    //       </Typography>
    //       <Typography sx={{ fontSize: '16px', color: '#00000080', fontWeight: 500 }}>
    //         3 Bedrooms, 2 Full Bathrooms, 1 Half Bathroom
    //       </Typography>
    //       <Typography variant='div' component='div' className='grid-content'>
    //         <Box sx={{ width: '100%', py: '30px' }}>
    //           <Grid container rowSpacing='30px' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Front Porch
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   1 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Front Door
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   1 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Dining Room
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   4 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Living Room
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   4 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Bedroom
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   6 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Full Bathroom
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   9 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Half Bathroom
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   8 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Bedroom
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   6 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Full Bathroom
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   9 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Bedroom
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   6 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Laundry Room
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   6 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //             <Grid item xs={4}>
    //               <Item>
    //                 <Typography variant='h6' component='h6' sx={{ color: '#000000', fontWeight: '600', fontSize: '16px' }}>
    //                   Hallway
    //                 </Typography>
    //                 <Typography variant='span' component='span' sx={{ fontSize: '12px', lineHeight: '18px', color: '#00000080' }}>
    //                   4 step
    //                 </Typography>
    //               </Item>
    //             </Grid>
    //           </Grid>
    //         </Box>
    //       </Typography>
    //     </div>
    //     <Typography variant='div' component='div' className='buttons' sx={{ display: 'flex', justifyContent: 'end' }}>
    //       <Button className="model-btn-light" sx={{ ml: 'auto' }} onClick={handleClose}>
    //         Cancel
    //       </Button>
    //       <Button className="model-btn" sx={{ ml: 'auto' }}>
    //         Continue
    //       </Button>
    //     </Typography>
    //   </Box>
    // </Modal>
  )
}

export default DetailInspectionModal