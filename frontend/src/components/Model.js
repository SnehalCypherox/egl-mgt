import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../Assets/close.png'
import warning from '../Assets/warning.png'

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

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button className='model-btn-light warning-close' onClick={handleOpen}>Cancel</Button>
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
                        <Button className='model-btn-warning' onClick={handleClose}>Exit & Close</Button>
                    </div>

                </Box>
            </Modal>
        </>
    );
}

export default function NestedModal() {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Button onClick={handleOpenModal}>Open modal</Button>
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <div className='flex justify-end mt-40'>
                        <Button className='model-btn'>Next : Unit Type</Button>
                    </div>
                    <ChildModal />
                </Box>
            </Modal>
        </div>
    );
}