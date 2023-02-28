import React from 'react'
import AddNewDropdown from '../../components/AddNewDropdown';
import CommonTable from '../../components/CommonTable'
import FilterData from '../../components/FilterData';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const Active = () => {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const columns = [
    { field: 'address', headerName: 'Address', width: 250, editable: false, flex: 1 },
    { field: 'city', headerName: 'City', width: 150, editable: false, flex: 1 },
    { field: 'zipcode', headerName: 'ZIP Code', width: 150, editable: false, flex: 1 },
    { field: 'type', headerName: 'Inspections Type', width: 150, editable: false, flex: 1 },
    { field: 'date', headerName: 'Due Date', width: 150, editable: false, flex: 1 },
    {
      field: 'status', headerName: 'Inspections Status', width: 200, editable: false,
      renderCell: () => {
        return (
          <>
            <Button variant="contained" size='small'
              sx={{
                backgroundColor: '#0071BC1a', color: '#000000', fontWeight: '600', px: '38px',
                "&:hover": {
                  color: '#FFFFFF',
                  backgroundColor: '#0071BC'
                },
              }}>started</Button>

          </>
        )
      }
    },
    {
      field: 'action', headerName: 'Action', width: 150, editable: false,
      renderCell: () => {
        return (
          <>
            <MoreHorizIcon aria-describedby={id} onClick={handleClick} />
            <Popover
              className='popover-dialog'
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <ul className='menu-list'>
                <li>Reassing Team</li>
                <li>Add to Building</li>
              </ul>
            </Popover>
          </>
        );
      }
    }
  ]

  const rows = [
    { id: 1, city: 'Sacramento', address: '9983 Aspen Meadows Ct', zipcode: '95829-8033', type: 'Annual', date: '06/14/2022', status: 'Started', action: '-' },
    { id: 2, city: 'Elk Grove', address: '9979 Tarzo Way', zipcode: '95757-3021', type: 'Annual', date: '07/22/2022', status: '-', action: '-' },
    { id: 3, city: 'Elk Grove', address: '9920 Trapani Way', zipcode: '95757-0000', type: 'Pre-Acquisition', date: '06/02/2022', status: '-', action: '-' },
    { id: 4, city: 'Sacramento', address: '9836 Mars Way', zipcode: '95827-2805', type: 'Annual', date: '08/02/2022', status: '-', action: '-' },
    { id: 5, city: 'Sacramento', address: '9830 Mars Way', zipcode: '95827-2805', type: 'Annual', date: '06/14/2022', status: '-', action: '-' },
    { id: 6, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Pre-Acquisition', date: '06/14/2022', status: '-', action: '-' },
    { id: 7, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Annual', date: '07/22/2022', status: '-', action: '-' },
    { id: 8, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Annual', date: '06/14/2022', status: '-', action: '-' },
    { id: 9, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Pre-Acquisition', date: '07/22/2022', status: '-', action: '-' },
    { id: 10, city: 'Sacramento', address: '5656 Aspen dhdhd C', zipcode: '95827-2805', type: 'Annual', date: '05/22/2022', status: '-', action: '-' },
  ];

  const subDataDropdown = ["Add unit inspection", "Add building inspection", "Add community inspection"]
  return (

    <>
      <div className='unit-top'>
        <AddNewDropdown
          dropdownTitle='New Inspection'
          dropdownSub={subDataDropdown}
        />
        <FilterData />
      </div>
      <CommonTable
        className='unit-table'
        rows={rows}
        columns={columns}
        isCheckbox={true}
      />
    </>
  )
}

export default Active