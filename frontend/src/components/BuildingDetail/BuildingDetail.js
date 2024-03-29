import React from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Typography, Tab, Box, Modal } from '@mui/material';
import { Check } from '@mui/icons-material';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import detailBuilding from '../../Assets/detailBuilding.png'
import { useNavigate } from 'react-router-dom';
import AddBuilding from '../PropertyDropdownModel/AddNewBuilding/AddBuilding';
import update from '../../Assets/update.png'
import close from "../../Assets/close.png";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BuildingDetail = () => {
    const [value, setValue] = React.useState('1');

    const [openUpdateName, setOpenUpdateName] = React.useState(false);
    const [openAmeniities, setOpenAmeniities] = React.useState(false);
    const [openFloors, setOpenFloors] = React.useState(false);

    const handleClose = () => {
        setOpenUpdateName(false);
        setOpenAmeniities(false);
        setOpenFloors(false);
    }

    function handleModalOpenName(e) {
        e.preventDefault();
        if (openUpdateName === false) {
            setOpenUpdateName(true)
        }
    }
    function handleModalAmeniities(e) {
        e.preventDefault();
        if (openAmeniities === false) {
            setOpenAmeniities(true)
        }
    }
    function handleModalFloors(e) {
        e.preventDefault();
        if (openFloors === false) {
            setOpenFloors(true)
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate()
    return (
        <>
            <div className='detail-header'>
                <div className='left-detail'>
                    <h2 className='address'>Building Name</h2>
                    <p className='edit-data' onClick={(e) => { handleModalOpenName(e) }}>
                        <span>Sacramento</span>
                        <span>95829-8033</span>
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px'
                            }} />
                        {openUpdateName && (
                            <Modal
                                open={openUpdateName}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className='model-box'>
                                    <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                        Update Property Address
                                    </Typography>
                                    <div className='close-icon cursor-pointer' onClick={handleClose}>
                                        <img src={close} alt="" />
                                    </div>
                                    <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                        Community Address, Zip Code
                                    </Typography>
                                    <AddBuilding currentStep={0} />
                                    <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        )}
                    </p>
                    <p className='edit-data'>Eagle Property Management(Admin)</p>
                </div>
                <div className='right-detail-btn'>
                    <Button sx={{
                        color: '#FFFFFF', backgroundColor: '#0071BC',
                        '&:hover': {
                            backgroundColor: '#0071BC',
                            color: '#FFFFFF'
                        }
                    }} startDecorator={<Add />}> Add Inspection</Button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='unit-detail-quick-edit'>
                    <div>
                        <div className='unit-detail-menu-edit cursor-pointer' onClick={(e) => { handleModalAmeniities(e) }}>
                            <Typography className='mainTitle'>Ameniitie</Typography>
                            <img src={update} alt="update icon" height='10px' />
                            {openAmeniities && (
                                <Modal
                                    open={openAmeniities}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} className='model-box'>
                                        <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                            Update Amenities & Common Areas
                                        </Typography>
                                        <div className='close-icon cursor-pointer' onClick={handleClose}>
                                            <img src={close} alt="" />
                                        </div>
                                        <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                            Address, City, Zip Code
                                        </Typography>
                                        <AddBuilding currentStep={2} />
                                        <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                        </Typography>
                                    </Box>
                                </Modal>
                            )}
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Courtyard(s)</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div>
                        <div className='unit-detail-menu-edit cursor-pointer' onClick={(e) => { handleModalFloors(e) }}>
                            <Typography className='mainTitle'>Number of building</Typography>
                            <img src={update} alt="update icon" height='10px' />
                            {openFloors && (
                                <Modal
                                    open={openFloors}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} className='model-box'>
                                        <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                            Update Floors
                                        </Typography>
                                        <div className='close-icon cursor-pointer' onClick={handleClose}>
                                            <img src={close} alt="" />
                                        </div>
                                        <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                            Address, City, Zip Code
                                        </Typography>
                                        <AddBuilding currentStep={1} />
                                        <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                        </Typography>
                                    </Box>
                                </Modal>
                            )}
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>12 Floors</Typography>
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
                            <TabPanel value="1" sx={{ pt: '122px', }}>
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
                                        No Inspections Yet
                                    </Typography>
                                    <Typography sx={{ color: '#80808080', fontWeight: 500, fontSize: '18px', lineHeight: '27px' }}>
                                        Get started setting up your first inspection.
                                    </Typography>
                                </div>
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
        </>
    )
}

export default BuildingDetail