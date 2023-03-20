import { Button, Divider, Popover, Typography } from '@mui/material'
import React from 'react'
import CommonDatePiker from '../../../components/Datepicker/CommonDatePiker'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import BasicTabs from '../../../components/AnnualTab/AnnualTab'
import { useNavigate } from 'react-router-dom';

const ActiveDetail = ({children, value, index, ...other}) => {
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

    const navigate = useNavigate();

    const manageDropDownList = [
        {
            name: ''
        }
    ]

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
                        }}>Request Revision</Button>
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
                        <Typography onClick={handleClose} sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Share Report</Typography>
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

            <Button onClick={() => navigate(-1) } sx={{backgroundColor: '#0071BC1a', color: 'black', px: '40px', py: '13px', borderRadius: '10px', ml: 'auto', display: 'flex', fontWeight: '600', "&:hover":{backgroundColor: '#0071BC1a'}}}>
                Back
            </Button>

        </>
    )
}

export default ActiveDetail