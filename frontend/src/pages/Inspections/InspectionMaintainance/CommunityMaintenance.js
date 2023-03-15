import { Check } from '@mui/icons-material'
import { Box, Button, Divider, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DetailInspectionModal from '../../../components/UnitDetails/DetailInspectionModal'
import update from '../../../Assets/update.png'
import Add from '@mui/icons-material/Add';
import CommonDatePiker from './../../../components/Datepicker/CommonDatePiker';
import Popover from '@mui/material/Popover';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowDown';


const CommunityMaintenance = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [bottomMenu, setBottomMenu] = React.useState(null);
    const openBottomMenu = Boolean(bottomMenu);
    const handleClick1 = (event) => {
        setBottomMenu(event.currentTarget);
    };
    const handleClose1 = () => {
        setBottomMenu(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : null;
    const id1 = open ? 'simple-popover' : null;


    const navigate = useNavigate();
    return (
        <>
            <div className='detail-header'>
                <div className='left-detail'>
                    <h2 className='address'>Community Maintenance Check Inspection</h2>
                    <p className='edit-data'>
                        <span>Add Inspection label</span>
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px'
                            }} />
                    </p>
                    <p className='edit-data'>Lorem ipsum, Lorem ipsum, Lorem ipsum</p>
                    <Typography variant='div' component='div' sx={{ display: 'flex', gap: '50px' }}>
                        <div>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px', color: '#0071BC', pt: '30px', pb: '5px' }}>Status</Typography>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#808080' }}>Started</Typography>
                        </div>
                        <div>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 600, fontSize: '16px', cursor: 'pointer', lineHeight: '24px', color: '#0071BC', pt: '30px', pb: '5px' }}>
                                Due Date
                                <img src={update} alt="update icon" height='10px' style={{ marginLeft: '10px' }} onClick={() => <CommonDatePiker />} />
                            </Typography>
                            <Typography variant='h5' component='h5' sx={{ fontWeight: 500, fontSize: '12px', lineHeight: '18px', color: '#808080' }}>8/2/2022</Typography>
                        </div>
                    </Typography>

                </div>
                <Typography variant='div' component='div' sx={{ display: 'flex', flexDirection: 'column' }} className='right-detail-btn' >
                    <Typography variant='span' component='span' sx={{ fontSize: '14px', pb: '11px', fontWeight: 500, lineHeight: '21px', color: '#868686' }}>
                        Eagle Property Management
                    </Typography>
                    <Button sx={{
                        borderRadius: '10px',
                        background: '#0071BC1a',
                        m: '5px', color: '#000000',
                        py: '13px', px: '30px',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        '&:hover': { backgroundColor: '#0071BC1a' }
                    }}>Extend Due Date</Button>
                    <Button variant="contained" aria-describedby={id} onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                            borderTopLeftRadius: '10px', borderTopRightRadius: '10px',
                            m: '5px', color: '#FFFFFF', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px'
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
                        <Typography sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Clone Inspection</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>View Inspection Timeline</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Archive Inspection</Typography>
                        <Divider sx={{ color: '#0000001a', mx: '15px' }} />
                        <Typography sx={{ p: '10px', fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>Delete Inspection</Typography>
                    </Popover>
                </Typography>
            </div>
            <div style={{ display: 'flex' }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <div className='btns' style={{ position: 'absolute', bottom: '110px', right: '20px' }}>
                        <Button sx={{
                            borderRadius: '10px',
                            background: '#0071BC1a',
                            m: '5px', color: '#000000',
                            py: '13px', px: '30px',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                            '&:hover': { backgroundColor: '#0071BC1a' }
                        }} onClick={() => navigate(-1)}>Back</Button>

                        <Button
                            id="basic-button"
                            aria-controls={openBottomMenu ? 'basic-menu' : null}
                            aria-haspopup="true"
                            aria-expanded={openBottomMenu ? 'true' : null}
                            onClick={handleClick1}
                        >
                            Dashboard
                        </Button>
                        <Menu
                            id="basic-menu"
                            bottomMenu={bottomMenu}
                            open={openBottomMenu}
                            onClose={handleClose1}
                            sx={{width: '100%', maxWidth: '200px', display: 'flex', justifyContent: 'end'}}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            
                        >
                            <MenuItem onClick={handleClose1}>Profile</MenuItem>
                            <MenuItem onClick={handleClose1}>My account</MenuItem>
                            <MenuItem onClick={handleClose1}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default CommunityMaintenance