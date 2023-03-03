import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import close from "../../Assets/close.png";
import ChildModel from "./ChildModel";
import "./model.css";
import AddUnitData from "../AddNewUnit/AddUnitData";
import AddBuildingData from "../AddNewBuilding/AddBuilding";
import AddCommunity from "../AddNewCommunity/AddCommunity";


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
        console.log("Enter into  getButtonLable ::" + step);
        return buttonList?.find((button) => button.step === step)?.label;
    };


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
                    </Typography>
                    <div className="flex justify-end mt-40">
                        {(currentStep !== 1 && currentStep !== buttonList.length) && (
                            <Button className={` model-btn-light`} onClick={prevStep}>
                                Back
                            </Button>
                        )}
                        {console.log('model steps length:: = ' + buttonList.length)}
                        {currentStep !== buttonList.length && (
                            <Button className="model-btn" onClick={nextStep}>
                                {getButtonLable(currentStep)}
                                {console.log(getButtonLable(currentStep))}
                            </Button>
                        )}
                    </div>
                    <ChildModel parentClose={handleCloseModal} currentStep={currentStep} buttonList={buttonList} />
                </Box>
            </Modal>
        </div >
    )
}

export default EditModel