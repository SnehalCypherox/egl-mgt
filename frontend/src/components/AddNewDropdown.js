import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CommonTable from './CommonTable';
import Settings from '../pages/Settings';
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

    const handleOpenModal = () => {
        setOpenUnitModel(true);
    };
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
        // console.log((buttonList === buttonList[6]) ? true : false);
        console.log(buttonList[6]);
        if (buttonList === buttonList[6]) {
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


    const Dummy = () => {
        alert('hello I am dummy alert')
    }



    function modelCall() {
        if (dropdownSub[0]) {
            <Dummy />
            // <AddUnitData currentStep={currentStep} />
        }
        else if (dropdownSub[1]) {
            <AddBuilding currentStep={currentStep} />
        }
        else if (dropdownSub[2]) {
            <AddCommunity currentStep={currentStep} />
        }
        else if (dropdownSub[3]) {
            <h1>Upload data</h1>
        }
        else {
            console.log('model steps ends');
        }
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
                {dropdownSub.map(subData => {
                    return (
                        <MenuItem key={subData} onClick={() => {
                            subData === 'Add New Unit' ? handleOpenModal() : alert('condition false')

                            console.log('clicked : ' + subData);
                        }}>
                            {subData}
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
                            {/* {console.log('model data called', modelCall())} */}
                            {/* {console.log('dropdown list :::', dropdownSub[0])} */}
                            {
                                dropdownSub[0] === 'Add New Unit' ? <AddUnitData currentStep={currentStep} /> : console.log('not work')
                            }


                            {/* {modelCall()} */}
                            {/* {console.log('hello')} */}
                            {/* <AddUnitData currentStep={currentStep} /> */}
                            {/* <AddBuilding currentStep={currentStep} /> */}
                            {/* <AddCommunity currentStep={currentStep} /> */}
                        </Typography>
                        <div className='flex justify-end mt-40'>
                            <Button className={
                                `${buttonList.filter((button) => button.step === 1) ? 'block' : 'hidden'} model-btn-light`
                            } onClick={prevStep}>Back</Button>
                            <Button className='model-btn' onClick={nextStep}>{getButtonLable(currentStep)}</Button>
                        </div>
                        <ChildModel parentClose={handleCloseModal} />
                    </Box>
                </Modal>
            </Menu>
        </div>
    )
}

export default AddNewDropdown