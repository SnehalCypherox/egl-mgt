import React from 'react'
import { DataGrid, useGridSelector, useGridApiContext, gridPageCountSelector, gridPageSelector } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Pagination, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import filter from '../Assets/Filter.png'
import chatbox from '../Assets/ChatBox.png'

const CommonTable = ({ columns, rows, isCheckbox, dropdownTitle, dropdownSub }) => {
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
      <div className='filter cursor-pointer' style={{ position: 'absolute', right: '0', top: '30px' }}>
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