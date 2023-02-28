import React from 'react'
import { DataGrid, useGridSelector, useGridApiContext, gridPageCountSelector, gridPageSelector } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import chatbox from '../Assets/ChatBox.png'
import AddNewDropdown from './AddNewDropdown';
import FilterData from './FilterData';

const CommonTable = ({ columns, rows, isCheckbox }) => {

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
  const subDataDropdown = ["Add New Unit", "Add New Building", "Add New Community", "Upload units"]

  return (
    <>
      {/* <AddNewDropdown
        dropdownTitle='New Property'
        dropdownSub={subDataDropdown}
      /> */}
      <div className='table-grid' style={{ height: 370, width: '100%', marginTop: '30px' }}>
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
          onRowClick={(e) => console.log(e)}
        />
      </div>
      {/* <div className='chat-box'>
        <img src={chatbox} alt="" />
      </div> */}
    </>
  )
}

export default CommonTable