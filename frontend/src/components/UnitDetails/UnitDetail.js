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

const UnitDetail = () => {
    const [value, setValue] = React.useState('1');

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
            <div style={{display: 'flex'}}>
                <div style={{padding: '30px', display: 'flex', alignItems: 'center'}}>
                    <ul>
                        <li>
                            Ameniitie...
                            <ul>
                                <li>Courtyard(s)</li>
                            </ul>
                        </li>
                        <li>Number of...
                            <ul>
                                <li>12 Floors</li>
                            </ul>
                        </li>
                    </ul>
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
                </Box>
            </div>

        </>

    )
}

export default UnitDetail