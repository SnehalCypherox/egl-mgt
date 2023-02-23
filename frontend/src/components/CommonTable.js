import React from 'react'
import { DataGrid, useGridSelector, useGridApiContext, gridPageCountSelector, gridPageSelector } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Pagination, Tab, Tabs, Typography, Box, Divider } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import filter from '../Assets/Filter.png'
import chatbox from '../Assets/ChatBox.png'
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';
import AddNew from './AddNew';
import FilterData from './FilterData';

const CommonTable = ({ columns, rows, isCheckbox, dropdownTitle, dropdownSub, }) => {

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
      <AddNew
        dropdownTitle={dropdownTitle}
        dropdownSub={dropdownSub}
      />
      <FilterData />
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