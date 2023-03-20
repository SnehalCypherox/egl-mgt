import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import flag from '../../Assets/flag-icon.png'
import frontPorch from '../../Assets/front-porch.png'
import frontPorch1 from '../../Assets/front-porch-door.png'
import { Button, Grid } from '@mui/material';

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
                        <Typography sx={{ color: "#000000", fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '27px', pt: '20px', pl: '27px', gap: '10px', display: 'flex', alignItems: 'center' }}>
                            Front Porch
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