import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import flag from '../../Assets/flag-icon.png'
import frontPorch from '../../Assets/front-porch.png'
import frontPorch1 from '../../Assets/front-porch-door.png'
import { Button, Grid, OutlinedInput, TextareaAutosize } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const [photo, setPhoto] = useState('')
    const [cost, setCost] = useState()

    const [openFlagModal, setOpenFlagModal] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpenFlagModal(true);
    };

    const handleClose = () => {
        setOpenFlagModal(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ mt: '20px', mx: '24px' }}>
                <Tab label="Front Porch" {...a11yProps(0)} />
                <Tab label="Dining Room" {...a11yProps(1)} />
                <Tab label="Living Room" {...a11yProps(2)} />
                <Tab label="Bedroom" {...a11yProps(3)} />
                <Tab label="Secound Bedroom" {...a11yProps(4)} />
                <Tab label="Third Bedroom" {...a11yProps(5)} />
                <Tab label="Full Bathroom" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Front Porch
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ cursor: 'pointer', color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Front Porch
                            <img src={flag} alt="flag icon" height='15px' width='15px' onClick={handleClickOpen} />
                        </Typography>
                        {/* flag popup */}
                        <Dialog
                            fullScreen={fullScreen}
                            open={openFlagModal}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: 500, fontSize: '22px', lineHeight: '33px', color: '#0071BC', pb: '10px' }}>
                                {"Flag Front Porch"}
                            </DialogTitle>
                            <Typography variant='span' component='span' sx={{ color: '#868686', fontSize: '14px', lineHeight: '21px', textAlign: 'center' }}>4421 Limnos Ct, Elk Grove 95758-7000</Typography>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography variant='div' component='div' sx={{ width: '100%', maxWidth: '100%', width: '720px', color: '#000000', fontSize: '16px', lineHeight: '18px', fontWeight: 600 }}>
                                        Note :
                                        <Typography variant='span' component='span' sx={{ color: '#808080', fontSize: '14px', lineHeight: '21px', fontWeight: 500, pl: '10px' }}>(Required)</Typography>
                                    </Typography>
                                    <TextareaAutosize
                                        minRows={3}
                                        style={{
                                            width: "100% ",
                                            padding: "10px",
                                            borderRadius: "10px",
                                            margin: "10px 0px",
                                        }}
                                        placeholder="Notes"
                                    />
                                    <Typography variant='div' component='div' sx={{ color: '#000000', fontSize: '16px', lineHeight: '18px', fontWeight: 600 }}>
                                        Skill :
                                        <Typography variant='span' component='span' sx={{ color: '#808080', fontSize: '14px', lineHeight: '21px', fontWeight: 500, pl: '10px' }}>(Required)</Typography>
                                    </Typography>
                                    <Select
                                        placeholder="Select one"
                                        indicator={<KeyboardArrowDown />}
                                        sx={{
                                            width: '100%',
                                            mt: '10px',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            [`& .${selectClasses.indicator}`]: {
                                                transition: '0.2s',
                                                [`&.${selectClasses.expanded}`]: {
                                                    transform: 'rotate(-180deg)',
                                                },
                                            },
                                        }}
                                    >
                                        <Option value="Access Controll Systems" sx={{ backgroundColor: '#0071BC' }}>Access Controll Systems</Option>
                                        <Option value="Add new Plumbing" sx={{ backgroundColor: '#FFFFFF' }}>Add new Plumbing</Option>
                                        <Option value="Cabinet repairs" sx={{ backgroundColor: '#FFFFFF' }}>Cabinet repairs</Option>
                                    </Select>
                                    <Typography variant='div' component='div' sx={{ color: '#000000', mt: '20px', fontSize: '16px', lineHeight: '18px', fontWeight: 600 }}>
                                        Responsibility :
                                    </Typography>

                                    <Select
                                        placeholder="Select one (optional)"
                                        indicator={<KeyboardArrowDown />}
                                        sx={{
                                            width: '100%',
                                            mt: '10px',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            [`& .${selectClasses.indicator}`]: {
                                                transition: '0.2s',
                                                [`&.${selectClasses.expanded}`]: {
                                                    transform: 'rotate(-180deg)',
                                                },
                                            },
                                        }}
                                    >
                                        <Option value="Access Controll Systems" sx={{ backgroundColor: '#0071BC' }}>Access Controll Systems</Option>
                                        <Option value="Add new Plumbing" sx={{ backgroundColor: '#FFFFFF' }}>Add new Plumbing</Option>
                                        <Option value="Cabinet repairs" sx={{ backgroundColor: '#FFFFFF' }}>Cabinet repairs</Option>
                                    </Select>

                                </DialogContentText>

                                <DialogContentText id="alert-dialog-description">
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Typography variant='div' component='div' sx={{ color: '#000000', fontSize: '16px', lineHeight: '18px', fontWeight: 600, pt: '32px' }}>Attach Photos :</Typography>

                                            <Select
                                                placeholder="Select images to attach"
                                                indicator={<KeyboardArrowDown />}

                                                sx={{
                                                    width: '100%',
                                                    mt: '10px',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    [`& .${selectClasses.indicator}`]: {
                                                        transition: '0.2s',
                                                        [`&.${selectClasses.expanded}`]: {
                                                            transform: 'rotate(-180deg)',
                                                        },
                                                    },
                                                }}
                                            >
                                                <Option value="photo1" sx={{ backgroundColor: '#0071BC' }}>photo1</Option>
                                                <Option value="photo2" sx={{ backgroundColor: '#FFFFFF' }}>photo2</Option>
                                                <Option value="photo3" sx={{ backgroundColor: '#FFFFFF' }}>photo3</Option>
                                            </Select>

                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant='div' component='div' sx={{ color: '#000000', fontSize: '16px', lineHeight: '18px', fontWeight: 600, pt: '32px' }}>Cost :</Typography>
                                            <OutlinedInput
                                                type='number'
                                                className='model-input'
                                                value={cost}
                                                placeholder="$5421"
                                                onChange={(e) => setCost(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Typography sx={{ display: 'flex' }}>
                                    <Button sx={{
                                        borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#000000', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px',
                                        '&:hover': { backgroundColor: '#0071BC1a' }
                                    }} onClick={handleClose}>
                                        Back
                                    </Button>
                                    <Button sx={{
                                        borderRadius: '10px', background: '#0071BC', m: '5px', color: '#FFFFFF', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px',
                                        '&:hover': { backgroundColor: '#0071BC' }
                                    }} onClick={handleClose}>
                                        Confirm Flag
                                    </Button>
                                </Typography>
                            </DialogActions>
                        </Dialog>
                        {/*  */}
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Dining Room
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Dining Room
                            <img src={flag} alt="flag icon" height='15px' width='15px' />
                        </Typography>
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Living Room
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Living Room
                            <img src={flag} alt="flag icon" height='15px' width='15px' />
                        </Typography>
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Bedroom
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Bedroom
                            <img src={flag} alt="flag icon" height='15px' width='15px' />
                        </Typography>
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Secound Bedroom
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Secound Bedroom
                            <img src={flag} alt="flag icon" height='15px' width='15px' />
                        </Typography>
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Third Bedroom
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Third Bedroom
                            <img src={flag} alt="flag icon" height='15px' width='15px' />
                        </Typography>
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <div className='contet-tab-1'>
                    <Typography sx={{ color: "#0071BC", fontFamily: 'Poppins', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>
                        Full Bathroom
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Full Bathroom
                            <img src={flag} alt="flag icon" height='15px' width='15px' />
                        </Typography>
                        <Button sx={{ mt: '20px', backgroundColor: '#5BEFA8', color: '#000000', fontWeight: 600, py: '8px', px: '20px', borderRadius: '10px' }}>Good</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Are the porch steps and floor free of any major cracks or damage?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', width: '60%', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', pt: '30px', pl: '27px' }}>
                            Is the porch handrail properly secured?
                        </Typography>
                        <Button sx={{ mt: '20px', color: "#808080", fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Yes</Button>
                    </Typography>
                    <Box>
                        <Typography variant='div' component='div' sx={{ display: 'flex', gap: '15px', mt: '30px' }}>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={frontPorch1} alt="frontPorch" height='130px' width='130px' style={{ borderRadius: '10px', mx: '20px' }} />
                            </Grid>
                        </Typography>
                    </Box>
                </div>
            </TabPanel>
        </div>
    );
}