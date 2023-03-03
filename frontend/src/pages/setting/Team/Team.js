import { Box, Button, Grid, Modal, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import TeamNextModel from './TeamNextModel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '40px',
};

const Team = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState();
    const [internal, setInternal] = React.useState();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <Button sx={{
                    borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#0071BC', maxWidth: '189px', py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                    '&:hover': { backgroundColor: '#0071BC1a' }
                }}>Eagle Property
                    Management</Button>
                <Button sx={{
                    borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#0071BC', maxWidth: '189px', py: '18px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                    '&:hover': { backgroundColor: '#0071BC1a' }
                }}>+ Add Team</Button>

                <Typography variant='div' component='div' sx={{ fontWeight: 600, pt: '30px', fontSize: '16px', lineHeight: '24px', color: '#000000' }}>
                    Set up a team account
                </Typography>
                <Typography sx={{ fontSize: '16px', lineHeight: '24px', color: '#00000080', pt: '10px', maxWidth: '951px' }}>
                    With a team account you can work with others in your company in RentCheck. Invite as many team members to join as you like. We will send them an email invitation and once accepted you'll see them here. You can also set up multiple teams if you'd like to give individuals access to specific groups of units within your portfolio. Add teammates to one or more teams and they will only be able to view and manage the units and inspections for the team or teams to which they've been invited.
                </Typography>
                <div className='btns' style={{ position: 'absolute', bottom: '62px', right: '20px' }}>
                    <Button variant="contained" onClick={handleOpen} sx={{ borderRadius: '10px', m: '5px', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>
                        Set up Team
                    </Button>
                </div>
            </div>

            <div className='model'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 720, border: 'unset', borderRadius: '10px' }}>
                        <Typography variant='span' component='span' sx={{ fontWeight: 500, fontSize: '22px', lineHeight: '33px', color: '#0071BC', display: 'flex', justifyContent: 'center' }}>Create Team</Typography>
                        <Typography sx={{ fontSize: '14px', lineHeight: '21px', color: '#808080', fontWeight: 500 }}>Set up multiple teams to give individuals access to specific groups of units within your portfolio. Team members will only be able to view and manage the units and inspections for the team or teams to which they've been invited.</Typography>
                        <Typography variant="span" sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600' }}>
                            Name
                        </Typography>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                sx={{
                                    borderRadius: '10px',
                                    my: '5px',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#0071BC'
                                }}
                                className='name-input'
                                placeholder="Name (Used In Resident Communications & Usually Company name)"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Typography variant="span" sx={{ color: '#00000080', fontSize: '14px', pt: '20px', lineHeight: '21px', fontWeight: '600' }}>
                            Internal Label
                        </Typography>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                sx={{
                                    borderRadius: '10px',
                                    mt: '5px',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: 'rgba(82, 76, 76, 0.38);'
                                }}
                                className='internal-input'
                                placeholder="Internal Lable (Internal Name displayed to you and team members )"
                                value={internal}
                                onChange={(e) => setInternal(e.target.value)}
                            />
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '40px' }}>
                            <Button sx={{
                                borderRadius: '10px', background: '#0071BC1a', mr: '115px', color: '#000000', py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                                '&:hover': { backgroundColor: '#0071BC1a' }
                            }} onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>

                        <TeamNextModel />
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Team