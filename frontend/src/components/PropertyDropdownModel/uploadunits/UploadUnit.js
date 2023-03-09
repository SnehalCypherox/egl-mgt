import { Box, Button, Input, InputLabel, Typography } from '@mui/material';
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

const UploadUnit = ({ closeUploadModal }) => {

    return (
        <>
            <Box sx={{ ...style, width: 720, border: 'unset', borderRadius: '10px' }}>
                <div id="modal-modal-title">
                    <Typography variant='span' component='span' sx={{ pb: '10px', fontWeight: 500, fontSize: '22px', lineHeight: '33px', color: '#0071BC', display: 'flex', justifyContent: 'center' }}>
                        Upload Units to EAgle
                    </Typography>
                    <Typography sx={{ fontSize: '14px', textAlign: 'center', pb: '50px', lineHeight: '21px', color: '#808080', fontWeight: 500 }}>
                        Add units to RentCheck by uploading your unit data onto the RentCheck platform.
                    </Typography>
                    <Typography component='h6' variant='h6' className=" model-title" sx={{ ml: '10px' }}>
                        Attach file
                    </Typography>
                    <InputLabel htmlFor="upload-photo">
                        <Input sx={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" />
                        <Typography variant='div' component='div' sx={{ backgroundColor: '#0071BC1a', my: '5px', p: '40px', cursor: 'pointer', borderRadius: '10px', border: '1px dotted #0071BCa1' }}>
                            <img src={fileupload} alt="" width='48px' style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} />
                            <Typography sx={{ fontSize: '12px', lineHeight: '18px', color: '#0071BC', textAlign: 'center', pt: '15px' }}>Browse to select a file</Typography>
                        </Typography>
                    </InputLabel>

                </div>
                <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', mt: '40px' }}>
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
                    }} onClick={closeUploadModal}>
                        Cancel
                    </Button>
                    <Button variant="contained"
                        sx={{
                            borderRadius: '10px',
                            background: '#0071BC',
                            py: '13px', px: '30px',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}>
                        Upload
                    </Button>
                </Typography>
            </Box>
        </>
    )
}

export default UploadUnit