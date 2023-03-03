import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'
import fileupload from '../../../Assets/File.png'

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

const TeamNextModel = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenNext = () => {
        setOpen(true);
    };
    const handleCloseNext = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant="contained"
                sx={{
                    position: 'absolute',
                    right: '40px',
                    bottom: '40px',
                    borderRadius: '10px',
                    background: '#0071BC',
                    py: '13px', px: '30px',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px'
                }} onClick={handleOpenNext}>
                Next
            </Button>
            <Modal
                open={open}
                onClose={handleCloseNext}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 720, border: 'unset', borderRadius: '10px' }}>
                    <div id="modal-modal-title">
                        <Typography variant='span' component='span' sx={{ fontWeight: 500, fontSize: '22px', lineHeight: '33px', color: '#0071BC', display: 'flex', justifyContent: 'center' }}>
                            Create Team
                        </Typography>
                        <Typography sx={{ fontSize: '14px', lineHeight: '21px', color: '#808080', fontWeight: 500, p: 0 }}>
                            Set up multiple teams to give individuals access to specific groups of units within your portfolio. Team members will only be able to view and manage the units and inspections for the team or teams to which they've been invited.
                        </Typography>
                        <Typography sx={{ backgroundColor: '#0071BC1a', my: '5px', p: '40px', cursor: 'pointer' }}>
                            <img src={fileupload} alt="" width='48px' style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} />
                        </Typography>
                    </div>
                    <Typography variant='div' component='div' sx={{display: 'flex', justifyContent: 'end', mt: '40px'}}>
                        <Button sx={{
                            borderRadius: '10px',
                            background: '#0071BC1a',
                            mr: '20px',
                            color: '#000000',
                            py: '13px',
                            px: '30px',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                            '&:hover': { backgroundColor: '#0071BC1a' }
                        }} onClick={handleCloseNext}>
                            Back
                        </Button>
                        <Button variant="contained"
                            sx={{
                                borderRadius: '10px',
                                background: '#0071BC',
                                py: '13px', px: '30px',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '24px'
                            }} onClick={handleCloseNext}>
                            Complete Team
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default TeamNextModel