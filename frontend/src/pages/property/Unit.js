import React from 'react'
import CommonTable from '../../components/CommonTable';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import AddNewDropdown from '../../components/AddNewDropdown';
import FilterData from '../../components/FilterData';

const Unit = () => {

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
    // { field: 'id', headerName: 'Id', width: 100, editable: false },
    { field: 'address', headerName: 'Address', width: 250, editable: false, flex: 1 },
    { field: 'city', headerName: 'City', width: 150, editable: false, flex: 1 },
    { field: 'zipcode', headerName: 'ZIP Code', width: 150, editable: false, flex: 1 },
    { field: 'type', headerName: 'Type', width: 150, editable: false, flex: 1 },
    { field: 'team', headerName: 'Team', width: 150, editable: false, flex: 1 },
    { field: 'completed', headerName: 'Last Inspection Completed ', width: 200, editable: false },
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
    { id: 1, city: 'Sacramento', address: '9983 Aspen Meadows Ct', zipcode: '95829-8033', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 2, city: 'Elk Grove', address: '9979 Tarzo Way', zipcode: '95757-3021', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 3, city: 'Elk Grove', address: '9920 Trapani Way', zipcode: '95757-0000', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 4, city: 'Sacramento', address: '9836 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 5, city: 'Sacramento', address: '9830 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 6, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 7, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 8, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 9, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 10, city: 'Sacramento', address: '5656 Aspen dhdhd C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
  ];

  console.log('unit table row', rows[0]);
  

  const subDataDropdown = ["Add New Unit", "Add New Building", "Add New Community", "Upload units"]

  return (
    <>
      <div className='unit-top'>
        <AddNewDropdown
          dropdownTitle='New Property'
          dropdownSub={subDataDropdown}
        />
        <FilterData />
      </div>
      <CommonTable
        className='unit-table'
        rows={rows}
        columns={columns}
        isCheckbox={true}
        onClick={(rows) => {
          (rows[0]) ? console.log('row') : console.log('row clicked');
        }
      }
      />
      
    </>

  )
}

export default Unit