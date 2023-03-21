import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Modal, OutlinedInput, Popover, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import CommonDatePiker from '../../../components/Datepicker/CommonDatePiker'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import BasicTabs from '../../../components/AnnualTab/AnnualTab'
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '720px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ActiveDetail = ({ children, value, index, ...other }) => {
    const [openReqRevision, setOpenReqRevision] = React.useState(false);
    const [modelTextArea, setModelTextArea] = React.useState('')

    const [recipientEmail, setRecipientEmail] = useState('')

    const [openShare, setOpenShare] = React.useState(false);
    const handleOpenShare = () => setOpenShare(true);
    const handleCloseShare = () => setOpenShare(false);

    const handleClickOpen = () => {
        setOpenReqRevision(true);
    };

    const handleClickClose = () => {
        setOpenReqRevision(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : null;
    const id1 = open ? 'simple-popover' : null;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const manageDropDown = [
        {
            id: 1,
            menu: 'Clone Inspection'
        },
        {
            id: 2,
            menu: 'Share Report'

        },
        {
            id: 3,
            menu: 'Download Report (PDF)'
        },
        {
            id: 4,
            menu: 'Download Image (PDF)'
        },
        {
            id: 5,
            menu: 'Download Image (ZipFile)'
        },
        {
            id: 6,
            menu: 'Request Signature'

        },
        {
            id: 7,
            menu: 'View Inspection Timeline'

        },
        {
            id: 8,
            menu: 'Archive Inspection'
        },
        {
            id: 9,
            menu: 'Delete Inspection'
        },
    ]

    const manageDropModal = () => {
        if (manageDropDown[1].menu === 'Share Report') {
            console.log(manageDropDown[1].menu + " = Share Report");
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <div className='detail-header'>
                <div className='left-detail'>
                    <h2 className='address'>Annual Inspection</h2>
                    <p className='edit-data'>
                        <span>4421 Limnos Ct, Elk Grove, 95758-7000</span>
                    </p>
                    <p className='edit-data'>Eagle Property Management</p>
                    <Typography variant='div' component='div' sx={{ display: 'flex', gap: '50px' }}>
                        <div>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px', color: '#0071BC', pt: '30px', pb: '5px' }}>Status</Typography>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#808080' }}>Awaiting Review</Typography>
                        </div>
                        <div>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 600, fontSize: '16px', cursor: 'pointer', lineHeight: '24px', color: '#0071BC', pt: '30px', pb: '5px' }}>
                                Completed Date
                            </Typography>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#808080' }}>8/2/2022</Typography>
                        </div>
                        <div>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 600, fontSize: '16px', cursor: 'pointer', lineHeight: '24px', color: '#0071BC', pt: '30px', pb: '5px' }}>
                                Completed By
                            </Typography>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#808080' }}>Lorem ipsum</Typography>
                        </div>
                    </Typography>

                </div>
                <Typography variant='div' component='div' className='right-detail-btn' >
                    <Typography sx={{ display: 'flex' }}>
                        <Button sx={{
                            borderRadius: '10px',
                            background: '#0071BC1a',
                            m: '5px', color: '#000000',
                            py: '13px', px: '30px',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                            '&:hover': { backgroundColor: '#0071BC1a' }
                        }} onClick={handleClickOpen}>Request Revision</Button>
                        <Dialog
                            open={openReqRevision}
                            onClose={handleClickClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: 500, fontSize: '22px', lineHeight: '33px', color: '#0071BC', pb: '10px' }}>
                                {"Request Revision"}
                            </DialogTitle>
                            <Typography variant='span' component='span' sx={{ color: '#868686', fontSize: '14px', lineHeight: '21px', textAlign: 'center' }}>4421 Limnos Ct, Elk Grove 95758-7000</Typography>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography variant='div' component='div' sx={{ color: '#000000', fontSize: '18px', lineHeight: '27px', fontWeight: 600 }}>Note to Erica Glaser</Typography>
                                    <Typography sx={{ color: '#868686', fontSize: '11.7px', lineHeight: '18px' }}>
                                        Need something updated or added to this inspection? We'll reopen the inspection and send a notification
                                        to Erica Glaser with a link to update it along with your instructions of what revisions need to be made.
                                    </Typography>
                                </DialogContentText>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography variant='div' component='div' sx={{ color: '#000000', fontSize: '18px', lineHeight: '27px', fontWeight: 600, pt: '32px' }}>Due Date</Typography>
                                    <Typography sx={{ color: '#868686', fontSize: '11.7px', lineHeight: '18px' }}>
                                        Click the date below to update the due date for this inspection
                                        <CommonDatePiker />
                                    </Typography>
                                    <OutlinedInput
                                        fullWidth
                                        sx={{
                                            borderRadius: '10px',
                                            my: '10px',
                                            fontSize: '12px',
                                            lineHeight: '18px',
                                            color: '#000'
                                        }}
                                        className='building-input'
                                        placeholder="Add instructions of what needs to be updated."
                                        value={modelTextArea}
                                        onChange={(e) => setModelTextArea(e.target.value)}
                                    />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Typography sx={{ display: 'flex' }}>
                                    <Button sx={{
                                        borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#000000', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px',
                                        '&:hover': { backgroundColor: '#0071BC1a' }
                                    }} onClick={handleClickClose}>
                                        Cancel
                                    </Button>
                                    <Button sx={{
                                        borderRadius: '10px', background: '#0071BC', m: '5px', color: '#FFFFFF', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px',
                                        '&:hover': { backgroundColor: '#0071BC' }
                                    }} onClick={handleClickClose}>
                                        Send Notification
                                    </Button>
                                </Typography>
                            </DialogActions>
                        </Dialog>
                        <Button sx={{
                            borderRadius: '10px',
                            background: '#0071BC1a',
                            m: '5px', color: '#000000',
                            py: '13px', px: '30px',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#000000',
                            '&:hover': { backgroundColor: '#0071BC' }
                        }}>Approve</Button>
                    </Typography>
                    <Button variant="contained" aria-describedby={id} onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            borderRadius: '10px', display: 'flex', ml: 'auto', mt: '45px',
                            color: '#FFFFFF', background: '#0071BC', py: '13px', px: '70px', fontWeight: 500, fontSize: '16px', lineHeight: '24px'
                        }}>
                        Manage
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        sx={{ cursor: 'pointer', textAlign: 'center' }}
                    >
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Clone Inspection</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleOpenShare} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Share Report</Typography>
                        <Modal
                            open={openShare}
                            onClose={handleCloseShare}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="alert-dialog-title" sx={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: 500, fontSize: '22px', lineHeight: '33px', color: '#0071BC', pb: '10px' }}>
                                    Share Inspection Report
                                </Typography>
                                <Typography variant='div' component='div' sx={{ color: '#868686', fontSize: '14px', lineHeight: '21px', textAlign: 'center' }}>
                                    4421 Limnos Ct, Elk Grove 95758-7000
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div>
                                        <Typography variant='div' component='div' sx={{ width: '100%', maxWidth: '100%', width: '720px', color: '#000000', fontSize: '16px', lineHeight: '18px', fontWeight: 600 }}>
                                            Recipient Email Addresses :
                                        </Typography>
                                        <Typography variant='p' component='p' sx={{ color: '#868686', fontSize: '12px', lineHeight: '18px', pt: '10px' }}>
                                            Each email address added below will be sent a copy of this inspection report. Click the X to remove an email from the list.
                                        </Typography>
                                        <OutlinedInput
                                            type='email'
                                            className='model-input'
                                            sx={{ maxWidth: '100%' }}
                                            value={recipientEmail}
                                            placeholder="Emails"
                                            onChange={(e) => setRecipientEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <Typography variant='div' component='div' sx={{ width: '100%', pt: '65px', maxWidth: '100%', width: '720px', color: '#000000', fontSize: '16px', lineHeight: '18px', fontWeight: 600 }}>
                                            Note to recipients :
                                        </Typography>
                                        <Typography variant='p' component='p' sx={{ color: '#868686', fontSize: '12px', lineHeight: '18px', pt: '10px' }}>
                                            This will be sent in the email along with the report.
                                        </Typography>
                                        <TextareaAutosize
                                            minRows={4}
                                            style={{
                                                width: "100% ",
                                                padding: "10px",
                                                borderRadius: "10px",
                                                margin: "10px 0px",
                                            }}
                                            placeholder="Additional comments"
                                        />
                                    </div>
                                </Typography>
                            </Box>
                        </Modal>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Download Report (PDF)</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Download Image (PDF)</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Download Image (ZipFile)</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Request Signature</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>View Inspection Timeline</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Archive Inspection</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Delete Inspection</Typography>
                    </Popover>
                </Typography>
            </div>

            <div className='tab-active-detail'>
                <BasicTabs />
            </div>

            <Button onClick={() => navigate(-1)} sx={{ backgroundColor: '#0071BC1a', color: 'black', px: '40px', py: '13px', borderRadius: '10px', ml: 'auto', display: 'flex', fontWeight: '600', "&:hover": { backgroundColor: '#0071BC1a' } }}>
                Back
            </Button>

        </>
    )
}

export default ActiveDetail