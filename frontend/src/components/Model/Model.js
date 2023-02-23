import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import close from '../../Assets/close.png'
import ChildModel from './ChildModel';
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

const Model = () => {
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
                    <ChildModel parentClose={handleCloseModal} />
                </Box>
            </Modal>
        </div>
    )
}

export default Model