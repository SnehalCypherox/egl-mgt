import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../Assets/close.png";
import ChildModel from "./ChildModel";
import "./model.css";
import AddUnitData from '../PropertyDropdownModel/AddNewUnit/AddUnitData.js'
import AddBuildingData from "../PropertyDropdownModel/AddNewBuilding/AddBuilding";
import AddCommunity from "../PropertyDropdownModel/AddNewCommunity/AddCommunity";
import Unit from "../../pages/property/Unit";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UploadUnit from './../PropertyDropdownModel/uploadunits/UploadUnit';


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

const EditModel = ({ openModal, handleCloseModal, buttonList, title, subTitle }) => {

    const [currentStep, setCurrentStep] = React.useState(0);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const getButtonLable = (step) => {
        return buttonList?.find((button) => button.step === step)?.label;
    };

    const navigate = useNavigate()

    useEffect(() => {
        setCurrentStep(0)
    }, [handleCloseModal])

    return (
        <div>
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
                        <span>{title}</span>
                        <p>{subTitle}</p>
                    </div>
                    <Typography variant="div" id="modal-modal-description" sx={{ mt: 2 }}>
                        {title === "Add New Unit" && (
                            <AddUnitData currentStep={currentStep} />
                        )}
                        {title === "Add New Building" && (
                            <AddBuildingData currentStep={currentStep} />
                        )}
                        {title === "Add New Community" && (
                            <AddCommunity currentStep={currentStep} />
                        )}
                        {title === "Upload units" && (
                            <UploadUnit closeUploadModal={handleCloseModal} />
                        )}
                    </Typography>
                    <div className="flex justify-end mt-40">
                        {(currentStep !== 0 && currentStep !== buttonList.length - 2) && (
                            <Button className={` model-btn-light`} onClick={prevStep}>
                                Back
                            </Button>
                        )}
                        {currentStep !== buttonList.length && (
                            <Button className="model-btn" onClick={nextStep}>
                                {getButtonLable(currentStep)}
                                {(getButtonLable(currentStep) === '') && navigate('/inspection/active')}
                            </Button>
                        )}
                    </div>
                    {title !== "Upload units" && (
                        <ChildModel parentClose={handleCloseModal} currentStep={currentStep} buttonList={buttonList} />
                    )}
                </Box>
            </Modal>
        </div >
    )
}

export default EditModel