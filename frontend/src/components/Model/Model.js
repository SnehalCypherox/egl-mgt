import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../Assets/close.png'
import ChildModel from './ChildModel';
import './model.css'
import AddUnitData from '../AddNewUnit/AddUnitData';
import AddBuilding from '../AddNewBuilding/AddBuilding';
import AddCommunity from '../AddNewCommunity/AddCommunity';


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

const Model = ({openModel}) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

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
        console.log("Enter into  getButtonLable ::" + step);
        return buttonList.find((button) => button.step === step).label;
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };



    return (
        <div>
            <Button onClick={() => {
                handleOpenModal()
            } }>Open modal</Button>
            <Modal
                open={openModal}
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
                        {/* {console.log('hello')} */}
                        <AddUnitData currentStep={currentStep} />
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
        </div >
    )
}

export default Model