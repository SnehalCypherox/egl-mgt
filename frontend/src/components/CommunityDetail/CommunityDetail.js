import React from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Typography, Tab, Box, Modal } from '@mui/material';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import update from '../../Assets/update.png'
import detailBuilding from '../../Assets/detailBuilding.png'
import CommonTable from '../CommonTable';
import { useNavigate } from 'react-router-dom';
import AddCommunity from '../PropertyDropdownModel/AddNewCommunity/AddCommunity';
import close from "../../Assets/close.png";
import { AddInspectionModal } from '../UnitDetails/DetailUnitModal';


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

const CommunityDetail = () => {
    const [value, setValue] = React.useState('1');
    const [visible, setVisible] = React.useState(false);
    const [openUpdateName, setOpenUpdateName] = React.useState(false);
    const [openUpdateTeam, setOpenUpdateTeam] = React.useState(false);
    const [openAddInspection, setAddInspection] = React.useState(false);

    const handleClose = () => {
        setOpenUpdateTeam(false)
        setOpenUpdateName(false);
        setAddInspection(false)
    }

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        { field: 'typesOfInspection', headerName: 'Type of Inspection', width: 150, editable: false, flex: 1 },
        { field: 'dueDate', headerName: 'Due Date', width: 150, editable: false, flex: 1 },
        { field: 'status', headerName: 'Status', width: 150, editable: false, flex: 1, },
    ]

    const rows = [
        { id: 1, typesOfInspection: 'Community Maintenance Check', dueDate: '10/19/2030', status: 'Created' },
        { id: 2, typesOfInspection: 'Community Maintenance Check', dueDate: '10/19/2029', status: 'Created' },
        { id: 3, typesOfInspection: 'Community Maintenance Check', dueDate: '10/19/2028', status: 'Created' },
    ];

    function handleModalOpenName(e) {
        e.preventDefault();
        if (openUpdateName === false) {
            setOpenUpdateName(true)
        }
    }
    function handleModalOpenTeam(e) {
        e.preventDefault();
        if (openUpdateTeam === false) {
            setOpenUpdateTeam(true)
        }
    }
    function handleModalAddInspection(e) {
        e.preventDefault();
        if (openAddInspection === false) {
            setAddInspection(true)
        }

    }
    return (
        <>
            <div className='detail-header'>
                <div className='left-detail'>
                    <h2 className='address'>Community Name</h2>
                    <p className='edit-data' onClick={(e) => { handleModalOpenName(e) }}>
                        <span>Sacramento</span>
                        <span>95829-8033</span>
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px'
                            }}
                        />
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
                                    <AddCommunity currentStep={0} />
                                    <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        )}
                    </p>
                    <p className='edit-data' onClick={(e) => { handleModalOpenTeam(e) }}>
                        Eagle Property Management(Admin)
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px', marginLeft: "10px"
                            }}
                        />
                        {openUpdateTeam && (
                            <Modal
                                open={openUpdateTeam}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className='model-box'>
                                    <AddCommunity currentStep={1} />
                                    <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Assign Team</Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        )}
                    </p>
                </div>
                <div className='right-detail-btn'>
                    <Button sx={{
                        color: '#FFFFFF', backgroundColor: '#0071BC',
                        '&:hover': {
                            backgroundColor: '#0071BC',
                            color: '#FFFFFF'
                        }
                    }} onClick={(e) => { handleModalAddInspection(e) }} startDecorator={<Add />

                    }>
                        {openAddInspection && (
                            <Modal
                                open={openAddInspection}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className='model-box'>
                                    <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                        Add Inspection
                                    </Typography>
                                    <div className='close-icon cursor-pointer' onClick={handleClose}>
                                        <img src={close} alt="" />
                                    </div>
                                    <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                        Confirm unit details to continue.
                                    </Typography>
                                    <AddInspectionModal />
                                    <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                        <Button sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">continue</Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        )}
                        Add Inspection</Button>
                </div>
            </div>
            <div>
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
                    </div>
                </Box>
            </div>
        </>
    )
}

export default CommunityDetail