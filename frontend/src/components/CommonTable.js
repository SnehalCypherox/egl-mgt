import React, { useEffect, useState } from 'react'
import { DataGrid, useGridSelector, useGridApiContext, gridPageCountSelector, gridPageSelector } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const CommonTable = ({ columns, rows, isCheckbox }) => {

  const [handleRowClick, setHandleRowClick] = useState();

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

  const navigate = useNavigate();
  let locationPath = useLocation();



  function getLocationChange() {
    if (locationPath.pathname === '/property/unit') {
      navigate('/addUnitDetail')
    }
    else if (locationPath.pathname === '/property/building') {
      navigate('/addBuildingDetail')
    }
    else if (locationPath.pathname === '/property/communities') {
      navigate('/addCommunityDetail')
    }
  }
  // useEffect(() => {
  //   
  // }, [locationPath])

  return (
    <>
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
          disableSelectionOnClick={true}
          disableColumnSelector={true}
          components={{
            Pagination: CustomPagination,
          }}
          onRowClick={(e) =>
            { getLocationChange()
          console.log(e.row)}
          }
        />
      </div>
    </>
  )
}

export default CommonTable