import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import update from '../../Assets/update.png'
import './UnitDetail.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CommonTable from '../CommonTable';
import detailBuilding from '../../Assets/detailBuilding.png'
import { Grid, ListItem, Modal, Paper, Typography } from '@mui/material';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { Check } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import EditModel from '../Model/EditModel';
import DetailInspectionModal from './DetailInspectionModal';
import close from "../../Assets/close.png";
import ChildModel from '../Model/ChildModel';
import CommonDatePiker from '../Datepicker/CommonDatePiker';
import Approved from '../../Assets/approved.png'
import Demo from '../Demo';


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




const UnitDetail = () => {
    const [value, setValue] = useState('1');
    const [open, setOpen] = useState(false);
    const [openUnitUpdate, setOpenUnitUpdate] = useState(false);
    function handleClick() {
        setOpenUnitUpdate(true)
    }

    const [selectedSubTitle, setSelectedSubTitle] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        { field: 'typesOfInspection', headerName: 'Type of Inspection', width: 150, editable: false, flex: 1 },
        { field: 'dueDate', headerName: 'Due Date', width: 150, editable: false, flex: 1 },
        {
            field: 'status', headerName: 'Status', width: 150, editable: false, flex: 1,

        },
    ]

    const rows = [
        { id: 1, typesOfInspection: 'Annual', dueDate: '10/19/2030', status: 'Scheduled' },
        { id: 2, typesOfInspection: 'Annual', dueDate: '10/19/2029', status: 'Scheduled' },
        { id: 3, typesOfInspection: 'Annual', dueDate: '10/19/2028', status: 'Scheduled' },
    ];


    return (
        <>
            <div className='detail-header'>
                <div className='left-detail'>
                    <h2 className='address'>9983 Aspen Meadows Ct</h2>
                    <p className='edit-data'>
                        <span>Sacramento</span>
                        <span>95829-8033</span>
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px'
                            }} />
                    </p>
                    <p className='edit-data'>Eagle Property Management</p>
                </div>
                <div className='right-detail-btn'>

                    <Button sx={{
                        color: '#FFFFFF', backgroundColor: '#0071BC',
                        '&:hover': {
                            backgroundColor: '#0071BC',
                            color: '#FFFFFF'
                        }
                    }} startDecorator={<Add />}
                        onClick={handleClick}
                    >
                        {
                            openUnitUpdate && <DetailInspectionModal openUnitUpdate={openUnitUpdate} />
                        }
                        Add Inspection
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='unit-detail-quick-edit'>
                    <div className='quick-1'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Bedrooms</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Bedrooms</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Second Bedroo...</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Third Bedroom</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-2'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Full Bathroom</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Full Bathroom</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Second Full Bath...</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-3'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Half Bathr...</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Half Bathroom</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-4'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Additional...</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Kitchen</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Dining Room</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Living Room</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Laundry Room</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-5'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Common A...</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Stairway</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-6'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Multi-Family</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Front Yard</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Front Porch</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Inspection" value="1"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                    }}
                                />
                                <Tab label="Maintenance Report" value="2"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                    }} />
                                <Tab label="Work Orders" value="3"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                    }}
                                />
                            </TabList>
                        </Box>

                        <div className='tab-content'>
                            <TabPanel value="1">
                                <CommonTable
                                    rows={rows}
                                    columns={columns}
                                    isCheckbox={false}
                                />
                            </TabPanel>
                            <TabPanel value="2" sx={{ pt: '122px', }}>
                                <div className='detail-tab'>
                                    <img src={detailBuilding} alt="detailBuilding" />
                                    <Typography variant='h5' component='h5'
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            color: '#0071BC',
                                            pt: '15px'
                                        }}>
                                        Create Maintenance Reports from issues flagged on inspections.
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="3" sx={{ pt: '122px', }}>
                                <div className='detail-tab'>
                                    <img src={detailBuilding} alt="detailBuilding" />
                                    <Typography variant='h5' component='h5'
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            color: '#0071BC',
                                            pt: '15px'
                                        }}>
                                        Create Work Orders from issues flagged on inspections.
                                    </Typography>
                                </div>
                            </TabPanel>
                        </div>
                    </TabContext>
                    <div className='btns' style={{ position: 'absolute', bottom: '62px', right: '20px' }}>
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
                        <Button variant="contained"
                            sx={{
                                borderRadius: '10px',
                                m: '5px', color: '#FFFFFF', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px'
                            }}>
                            Delete Unit
                        </Button>
                    </div>
                </Box>
            </div>
            {/* inspection Modal */}
            <div>
                {/* <DetailInspectionModal openUnitUpdate={openUnitUpdate} /> */}
                {/* <Modal
                    open={open}
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
                            <Button className="model-btn-light" sx={{ ml: 'auto' }} onClick={handleOpen}>
                                Cancel
                            </Button>
                            <Button className="model-btn" sx={{ ml: 'auto' }} onClick={handleOpen}>
                                Continue
                            </Button>
                        </Typography>
                    </Box>
                </Modal> */}
            </div>
            {/* <div className='update-add-inspection-2'>
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
                        </div> */}

        </>
    )
}

export default UnitDetail