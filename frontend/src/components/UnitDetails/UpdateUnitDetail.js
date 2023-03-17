import React, { useState, useEffect } from 'react'
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
import { Modal, Typography } from '@mui/material';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { Check } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AddInspectionModal } from './DetailUnitModal';
import close from "../../Assets/close.png";
import AddUnitData from './../PropertyDropdownModel/AddNewUnit/AddUnitData';
import AddUnitInspection from './../InspectionDropdownModal/AddUnitInspection/AddUnitInspection';
import EditModel from '../Model/EditModel';
import { inspectionUnitButtonList } from '../../pages/property/propertyData';


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


const UpdateUnitDetail = () => {
    const [value, setValue] = useState('1');

    const [openContinueInspection, setOpenContinueInspection] = useState('Add Inspection')
    const [buttonList, setButtonList] = React.useState([]);
    const [openContinueInspectionModal, setOpenContinueInspectionModal] = useState(false)
    const [openBedroomsQuick, setBedroomQuick] = useState(false)
    const [openUpdateCity, setOpenUpdateCity] = useState(false)
    const [openAddInspection, setAddInspection] = useState(false);
    const [openAdditionalQuick, setOpenAdditionalQuick] = useState(false);
    const [openCommonAreaQuick, setOpenCommonAreaQuick] = useState(false);
    const [openMultiFamilyQuick, setOpenMultiFamilyQuick] = useState(false);
    const [openOutsideQuick, setOpenOutsideQuick] = useState(false);

    useEffect(() => {
        if (openContinueInspection === "Add Inspection") {
            setButtonList(inspectionUnitButtonList)
        }
    }, [openContinueInspection])

    const handleOpenModal = () => {
        setOpenContinueInspectionModal(true);
    };
    const handleCloseModal = () => {
        // setOpenModal(false);
        // setselectedTitle('')
    };

    const handleClose = () => {
        setBedroomQuick(false)
        setOpenAdditionalQuick(false)
        setOpenUpdateCity(false)
        setAddInspection(false)
        setOpenCommonAreaQuick(false)
        setOpenMultiFamilyQuick(false)
        setOpenOutsideQuick(false)
    }
    function handleModalAddInspection(e) {
        e.preventDefault();
        if (openAddInspection === false) {
            setAddInspection(true)
        }
    }
    const handleModalContinueInspection = () => {
        setOpenContinueInspectionModal(current => !current);
    }

    function handleQuickModalCity(e) {
        e.preventDefault()
        if (openUpdateCity === false) {
            setOpenUpdateCity(true)
        }
    }
    function handleQuickModal(e) {
        e.preventDefault()
        if (openBedroomsQuick === false) {
            setBedroomQuick(true)
        }
    }
    function handleQuickAdditional(e) {
        e.preventDefault()
        if (openAdditionalQuick === false) {
            setOpenAdditionalQuick(true)
        }
    }
    function handleQuickCommonArea(e) {
        e.preventDefault()
        if (openCommonAreaQuick === false) {
            setOpenCommonAreaQuick(true)
        }
    }
    function handleQuickMultiFamily(e) {
        e.preventDefault()
        if (openMultiFamilyQuick === false) {
            setOpenMultiFamilyQuick(true)
        }
    }
    function handleQuickOutsider(e) {
        e.preventDefault()
        if (openOutsideQuick === false) {
            setOpenOutsideQuick(true)
        }
    }




    const [openUnitUpdate, setOpenUnitUpdate] = useState(false);

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
                    <p className='edit-data' onClick={(e) => { handleQuickModalCity(e) }}>
                        <span>Sacramento</span>
                        <span>95829-8033</span>
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px'
                            }} />
                        {openUpdateCity && (
                            <Modal
                                open={openUpdateCity}
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
                                        1 Windance Ct, Sacramento 95823-6944
                                    </Typography>
                                    <AddUnitData currentStep={0} />
                                    <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                        <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                    </Typography>
                                </Box>
                            </Modal>
                        )}
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
                        onClick={(e) => { handleModalAddInspection(e) }}
                    >
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
                                        <Button onClick={handleModalContinueInspection}
                                            sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">
                                            continue
                                        </Button>
                                        {
                                            openContinueInspectionModal && (
                                                <EditModel
                                                    buttonList={buttonList}
                                                    openModal={openContinueInspectionModal}
                                                    handleCloseModal={handleClose}
                                                    title='Add Inspection'
                                                    isUnitDetailInspection={openContinueInspection}
                                                ></EditModel>
                                            )
                                        }

                                    </Typography>
                                </Box>
                            </Modal>
                        )}
                        Add Inspection
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='unit-detail-quick-edit'>
                    <div className='quick-1'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Bedrooms</Typography>
                            <Button onClick={handleQuickModal}>
                                <img src={update} alt="update icon" height='10px' />
                                {openBedroomsQuick && (
                                    <Modal
                                        open={openBedroomsQuick}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style} className='model-box'>
                                            <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                                Update Bedrooms & Bathrooms
                                            </Typography>
                                            <div className='close-icon cursor-pointer' onClick={handleClose}>
                                                <img src={close} alt="" />
                                            </div>
                                            <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                                Adress, City, Zip Code
                                            </Typography>
                                            <AddUnitData currentStep={2} />
                                            <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                                <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                                <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                )}
                            </Button>
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
                            <Button onClick={handleQuickModal}>
                                <img src={update} alt="update icon" height='10px' />
                            </Button>
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
                            <Button onClick={handleQuickModal}>
                                <img src={update} alt="update icon" height='10px' />
                            </Button>
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Half Bathroom</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-4'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Additional...</Typography>
                            <Button onClick={(e) => { handleQuickAdditional(e) }}>
                                <img src={update} alt="update icon" height='10px' />
                                {openAdditionalQuick && (
                                    <Modal
                                        open={openAdditionalQuick}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style} className='model-box'>
                                            <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                                Update Additional Rooms
                                            </Typography>
                                            <div className='close-icon cursor-pointer' onClick={handleClose}>
                                                <img src={close} alt="" />
                                            </div>
                                            <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                                Adress, City, Zip Code
                                            </Typography>
                                            <AddUnitData currentStep={3} />
                                            <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                                <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                                <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                )}
                            </Button>
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
                            <Button onClick={(e) => { handleQuickCommonArea(e) }}>
                                <img src={update} alt="update icon" height='10px' />
                            </Button>
                            {openCommonAreaQuick && (
                                <Modal
                                    open={openCommonAreaQuick}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} className='model-box'>
                                        <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                            Update Common Areas
                                        </Typography>
                                        <div className='close-icon cursor-pointer' onClick={handleClose}>
                                            <img src={close} alt="" />
                                        </div>
                                        <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                            Adress, City, Zip Code
                                        </Typography>
                                        <AddUnitData currentStep={4} />
                                        <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                        </Typography>
                                    </Box>
                                </Modal>
                            )}
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Stairway</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-6'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Outside</Typography>
                            <Button onClick={(e) => { handleQuickOutsider(e) }}>
                                <img src={update} alt="update icon" height='10px' />
                            </Button>
                            {openOutsideQuick && (
                                <Modal
                                    open={openOutsideQuick}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} className='model-box'>
                                        <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                            Update Outside Rooms
                                        </Typography>
                                        <div className='close-icon cursor-pointer' onClick={handleClose}>
                                            <img src={close} alt="" />
                                        </div>
                                        <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                            Adress, City, Zip Code
                                        </Typography>
                                        <AddUnitData currentStep={5} />
                                        <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                            <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                        </Typography>
                                    </Box>
                                </Modal>
                            )}
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Stairway</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div className='quick-7'>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Multi-Family</Typography>
                            <Button onClick={(e) => { handleQuickMultiFamily(e) }}>
                                <img src={update} alt="update icon" height='10px' />
                                {openMultiFamilyQuick && (
                                    <Modal
                                        open={openMultiFamilyQuick}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style} className='model-box'>
                                            <Typography variant='div' component='div' sx={{ fontSize: '22px', textAlign: 'center', fontWeight: '500', lineHeight: '33px', color: '#0071BC' }}>
                                                Update Property Type
                                            </Typography>
                                            <div className='close-icon cursor-pointer' onClick={handleClose}>
                                                <img src={close} alt="" />
                                            </div>
                                            <Typography variant='div' component='div' sx={{ fontSize: '14px', textAlign: 'center', fontWeight: '500', lineHeight: '21px', color: '#868686', pb: '32px' }}>
                                                Adress, City, Zip Code
                                            </Typography>
                                            <AddUnitData currentStep={1} />
                                            <Typography variant='div' component='div' sx={{ display: 'flex', justifyContent: 'end', pt: '30px' }}>
                                                <Button onClick={handleClose} sx={{ backgroundColor: '#006BB21a', color: '#000000', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Cancel</Button>
                                                <Button onClick={handleClose} sx={{ backgroundColor: '#006BB2', color: '#FFFFFF', borderRadius: '10px', m: '5px', py: '13px', px: '30px' }} variant="contained">Save & Close</Button>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                )}
                            </Button>
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
        </>
    )
}

export default UpdateUnitDetail