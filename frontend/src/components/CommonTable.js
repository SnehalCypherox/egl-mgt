import React, { useEffect, useState } from 'react'
import { DataGrid, useGridSelector, useGridApiContext, gridPageCountSelector, gridPageSelector } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { DetailUnitTable } from './UnitDetails/DetailUnitModal';
import CircularProgress from '@mui/material/CircularProgress';

const CommonTable = ({ columns, rows, isCheckbox }) => {
  const [field, setField] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

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
      navigate('addUnitDetail')
    }
    else if (locationPath.pathname === '/property/building') {
      navigate('addBuildingDetail')
    }
    else if (locationPath.pathname === '/property/communities') {
      navigate('addCommunityDetail')
    }
    else if (locationPath.pathname === '/inspection/active') {
      navigate('activeDetail')
    }
    else if (locationPath.pathname === '/property/communities/addCommunityDetail') {
      navigate('communityMaintenance')
    }
  }

  const handleCellclick = (item) => {
    setField(item)
    if (item.field !== "action" && item.field !== '__check__') {
      getLocationChange()
    }
  }
  return (
    <>
      <div className='table-grid' style={{ height: 370, width: '100%', marginTop: '30px' }}>
        {
          loading ?
            (<CircularProgress sx={{display: 'flex', mx: 'auto', my: '15%'}}/>) :
            (
              <DataGrid
                className='tble-class'
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection={isCheckbox}
                rowsPerPageOptions={[5]}
                noRowsOverlay={<CircularProgress />}
                experimentalFeatures={{ newEditingApi: false }}
                components={{
                  Pagination: CustomPagination,
                }}
                onCellClick={handleCellclick}
              />
            )
        }

      </div>
    </>
  )
}

export default CommonTable