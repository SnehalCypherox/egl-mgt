import React from 'react'
import { DataGrid, useGridSelector, useGridApiContext, gridPageCountSelector, gridPageSelector } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Pagination, Tab, Tabs, Typography, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import filter from '../Assets/Filter.png'
import chatbox from '../Assets/ChatBox.png'
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';

const CommonTable = ({ columns, rows, isCheckbox, dropdownTitle, dropdownSub, }) => {
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
  // filter
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // console.log(dropdownSub);

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    return (
      <Pagination
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        variant="outlined" shape="rounded"
      />
    )
  }

  return (
    <div className='unitbody' style={{ position: 'relative', marginRight: '20px' }}>
      <div className='new-add'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="property"
            id="property" className='main-property'
          >
            <Typography>{dropdownTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="div" component="div">
              <ul className='add-list'>
                {dropdownSub.map(subData => {
                  return <li key={subData}>{subData}</li>
                })}
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/*  */}
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
        <div>
          <Typography sx={{ p: 2 }} variant='div' component='div' className='filter-header'>Filter By</Typography>
          <div className='tabing'>
            <Tabs value={value} className='tabs-content' onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Item One" {...a11yProps(0)}></Tab>
              <Tab label="Item two" {...a11yProps(1)}></Tab>
              <Tab label="Item three" {...a11yProps(2)}></Tab>
            </Tabs>
            <TabPanel value={value} index={0}>3+ Month Ago</TabPanel>
            <TabPanel value={value} index={1}>6+ Month Ago</TabPanel>
            <TabPanel value={value} index={2}>Custome Date Range</TabPanel>
          </div>

        </div>

      </Popover>
      {/*  */}
      <div className='filter cursor-pointer' onClick={handleClick} aria-describedby={id} style={{ position: 'absolute', right: '0', top: '30px' }}>
        <img src={filter} alt="" height='30px' width='38px' />
      </div>
      <div className='table-grid' style={{ height: 400, width: '100%', marginTop: '7%' }}>

        <DataGrid
          className='tble-class'
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection={isCheckbox}
          rowsPerPageOptions={[5]}
          showColumnRightBorder={false}
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Pagination: CustomPagination,
          }}
        />
      </div>
      <div className='chat-box'>
        <img src={chatbox} alt="" />
      </div>
    </div>


  )
}

export default CommonTable