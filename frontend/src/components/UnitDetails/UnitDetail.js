import React from 'react'
import update from '../../Assets/update.png'
import './UnitDetail.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CommonTable from '../CommonTable';
import detailBuilding from '../../Assets/detailBuilding.png'
import { Typography } from '@mui/material';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { Check } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const UnitDetail = () => {
    const [value, setValue] = React.useState('1');

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const columns = [
        { field: 'typesOfInspection', headerName: 'Type of Inspection', width: 150, editable: false, flex: 1 },
        { field: 'dueDate', headerName: 'Due Date', width: 150, editable: false, flex: 1 },
        {
            field: 'status', headerName: 'Status', width: 150, editable: false, flex: 1,

        },
    ]

    const rows = [
        { id: 1, typesOfInspection: 'Annual', dueDate: '10/19/2030', status: 'Scheduled' },
        { id: 2, typesOfInspection: 'Annual', dueDate: '10/19/2029', status: 'Scheduled' },
        { id: 3, typesOfInspection: 'Annual', dueDate: '10/19/2028', status: 'Scheduled' },
    ];

    return (
        <>
            <div className='detail-header'>
                <div className='left-detail'>
                    <h2 className='address'>9983 Aspen Meadows Ct</h2>
                    <p className='edit-data'>
                        <span>Sacramento</span>
                        <span>95829-8033</span>
                        <img src={update} alt="update icon" className='cursor-pointer'
                            style={{
                                width: '10px'
                            }} />
                    </p>
                    <p className='edit-data'>Eagle Property Management</p>
                </div>
                <div className='right-detail-btn'>
                    <Button sx={{
                        color: '#FFFFFF', backgroundColor: '#0071BC',
                        '&:hover': {
                            backgroundColor: '#0071BC',
                            color: '#FFFFFF'
                        }
                    }} startDecorator={<Add />}> Add Inspection</Button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='unit-detail-quick-edit'>
                    <div>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Bedrooms</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Bedrooms</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Second Bedroo...</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Third Bedroom</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                    <div>
                        <div className='unit-detail-menu-edit cursor-pointer'>
                            <Typography className='mainTitle'>Full Bathroom</Typography>
                            <img src={update} alt="update icon" height='10px' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Full Bathroom</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                        <div className='unit-detail-subMenu'>
                            <Typography className='subTitle'>Second Full Bath...</Typography>
                            <Check fontSize='10px' color='#00000080' />
                        </div>
                    </div>
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Inspection" value="1"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                    }}
                                />
                                <Tab label="Maintenance Report" value="2"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                    }} />
                                <Tab label="Work Orders" value="3"
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                    }}
                                />
                            </TabList>
                        </Box>

                        <div className='tab-content'>
                            <TabPanel value="1">
                                <CommonTable
                                    rows={rows}
                                    columns={columns}
                                    isCheckbox={false}
                                />
                            </TabPanel>
                            <TabPanel value="2" sx={{ pt: '122px', }}>
                                <div className='detail-tab'>
                                    <img src={detailBuilding} alt="detailBuilding" />
                                    <Typography variant='h5' component='h5'
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            color: '#0071BC',
                                            pt: '15px'
                                        }}>
                                        Create Maintenance Reports from issues flagged on inspections.
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="3" sx={{ pt: '122px', }}>
                                <div className='detail-tab'>
                                    <img src={detailBuilding} alt="detailBuilding" />
                                    <Typography variant='h5' component='h5'
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            color: '#0071BC',
                                            pt: '15px'
                                        }}>
                                        Create Work Orders from issues flagged on inspections.
                                    </Typography>
                                </div>
                            </TabPanel>
                        </div>
                    </TabContext>
                    <div className='btns' style={{ position: 'absolute', bottom: '62px', right: '20px' }}>
                        <Button sx={{
                            borderRadius: '10px',
                            background: '#0071BC1a',
                            m: '5px', color: '#000000',
                            py: '13px', px: '30px',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '24px',
                            '&:hover': { backgroundColor: '#0071BC1a' }
                        }}onClick={() => navigate(-1)}>Back</Button>
                        <Button variant="contained"
                            sx={{
                                borderRadius: '10px',
                                m: '5px', color: '#FFFFFF', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px'
                            }}>
                            Delete Unit
                        </Button>
                    </div>
                </Box>
            </div>
        </>
    )
}

export default UnitDetail