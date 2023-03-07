import React from 'react'
import warning from '../../Assets/warning.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import './model.css'

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

const ChildModel = ({ parentClose, currentStep, buttonList }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {(currentStep === 0 || currentStep === buttonList.length - 2) &&
                <Button className='model-btn-light warning-close' onClick={handleOpen}>
                    Cancel
                </Button>}
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style }} style={{ maxWidth: '430px' }}>
                    <img src={warning} alt="warning icon" className='warning-icon' />
                    <h2 id="child-modal-title" className='warning-msg'>Are you sure ?</h2>
                    <p id="child-modal-description" className='warning-desc'>
                        Do you want to exit and lose all your progress
                        in creating this new unit?
                    </p>
                    <div className='warning-btn'>
                        <Button className='model-btn-light' onClick={handleClose}>Go Back</Button>
                        <Button className='model-btn-warning' onClick={parentClose}>Exit & Close</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ChildModel