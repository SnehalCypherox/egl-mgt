import React from 'react'
import filter from '../Assets/Filter.png'
import { Popover, Tab, Tabs, Typography, Box, Divider } from '@mui/material';
import PropTypes from 'prop-types';

const FilterData = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Popover
                className='filter-menu'
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className='filter-body'>
                    <Typography sx={{ p: 2 }} variant='div' component='div' className='filter-header'>Filter By</Typography>
                    <div className='tabing'>
                        <Tabs value={value} className='tabs-content' onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Last Inspection Completed Date" {...a11yProps(0)}></Tab>
                            <Tab label="Last Inspection Completed Type" {...a11yProps(1)}></Tab>
                            <Tab label="Team" {...a11yProps(2)}></Tab>
                        </Tabs>
                        <Divider orientation="vertical" flexItem />
                        <div className='tab'>
                            <TabPanel value={value} index={0}>3+ Month Ago</TabPanel>
                            <Divider variant="middle" />
                            <TabPanel value={value} index={0}>6+ Month Ago</TabPanel>
                            <Divider variant="middle" />
                            <TabPanel value={value} index={0}>Custome Date Range</TabPanel>
                            <TabPanel value={value} index={1}>3+ Month Ago</TabPanel>
                            <Divider variant="middle" />
                            <TabPanel value={value} index={1}>6+ Month Ago</TabPanel>
                            <Divider variant="middle" />
                            <TabPanel value={value} index={1}>Custome Date Range</TabPanel>
                            <TabPanel value={value} index={2}>Eagle Property Management</TabPanel>
                        </div>
                    </div>
                </div>
            </Popover>

            {/*  */}
            <div className='filter cursor-pointer' onClick={handleClick} aria-describedby={id} style={{ position: 'absolute', right: '0', top: '30px' }}>
                <img src={filter} alt="" height='30px' width='38px' />
            </div>
        </>

    )
}

export default FilterData