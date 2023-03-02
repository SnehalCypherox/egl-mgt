import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CommonTable from './CommonTable';
import Settings from '../pages/setting/Settings';
import AddBuilding from './AddNewBuilding/AddBuilding';
import AddCommunity from './AddNewCommunity/AddCommunity';
import { Box, Modal, Typography } from '@mui/material';
import ChildModel from './Model/ChildModel';
import close from '../Assets/close.png'
import AddUnitData from './AddNewUnit/AddUnitData';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};


const AddNewDropdown = ({ dropdownTitle, dropdownSub }) => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [openUnitModel, setOpenUnitModel] = React.useState(false);

    // const handleOpenModal = () => {
    //     setOpenUnitModel(true);
    // };
    const handleCloseModal = () => {
        setOpenUnitModel(false);
    };

    const navigate = useNavigate();


    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    const buttonList = [
        {
            step: 1,
            label: "Next : Unit Type",
        },
        {
            step: 2,
            label: "Next : Bed & Bath",
        },
        {
            step: 3,
            label: "Next : Additional Rooms",
        },
        {
            step: 4,
            label: "Next : Common Areas",
        },
        {
            step: 5,
            label: "Next : Outside",
        },
        {
            step: 6,
            label: "Complete Unit",
        },
        {
            step: 7,
            label: "Set Up Inspection",
        },
    ];
    const getButtonLable = (step) => {
        // console.log("Enter into  getButtonLable ::" + step);
        return buttonList.find((button) => button.step === step).label;
    };

    const nextStep = () => {
        // console.log(currentStep);
        if (currentStep === 7) {
            navigate('/inspection/active')
        }
        else {
            setCurrentStep(currentStep + 1);
        }
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function openModelHandler() {
        setOpenUnitModel(true);
    }


    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                    backgroundColor: '#0071BC',
                    border: '1px solid #0071BC',
                    borderRadius: '5px',
                    padding: '10px 55px'
                }}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {dropdownTitle}
            </Button>
            <Menu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {dropdownSub.map(DropdownData => {
                    return (
                        <MenuItem className='property-dropdown-item' key={DropdownData} onClick={() => {
                            openModelHandler()
                        }
                        }>
                            {DropdownData}
                        </MenuItem>
                    )
                })}
                <Modal
                    open={openUnitModel}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className='model-box'>
                        <div className='close-icon cursor-pointer' onClick={handleCloseModal}>
                            <img src={close} alt="" />
                        </div>
                        <div id="modal-modal-title" className='model-header'>
                            <span>Add Unit</span>
                            <p>Fill out the details below to add a unit.</p>
                        </div>
                        <Typography variant='div' id="modal-modal-description" sx={{ mt: 2 }}>
                            {/* {console.log(dropdownSub)} */}
                           
                            {dropdownSub[1] === 'Add New Building' && <AddBuilding currentStep={currentStep} />}
                            {/* {dropdownSub[2] === 'Add New Community' && <AddCommunity currentStep={currentStep} />} */}
                            {/* {dropdownSub[3] === 'Upload units' && alert('upload data alert')} */}
                        </Typography>
                        <div className='flex justify-end mt-40'>
                            {(currentStep !== 1 && currentStep !== 7) && <Button className='model-btn-light' onClick={prevStep}>Back</Button>}
                            <Button className='model-btn' onClick={nextStep}>{getButtonLable(currentStep)}</Button>
                        </div>
                        <ChildModel parentClose={handleCloseModal} currentStep={currentStep} />
                    </Box>
                </Modal>
            </Menu>
        </div >
    )
}

export default AddNewDropdown