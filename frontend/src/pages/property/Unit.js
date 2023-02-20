import React from 'react'
import UnitBody from '../../components/CommonTable';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
    { field: 'address', headerName: 'Address', width: 250, editable: false },
    { field: 'city', headerName: 'City', width: 150, editable: false },
    { field: 'zipcode', headerName: 'ZIP Code', width: 120, editable: false },
    { field: 'type', headerName: 'Type', width: 130, editable: false },
    { field: 'team', headerName: 'Team', width: 150, editable: false },
    { field: 'completed', headerName: 'Last Inspection Completed ', width: 200, editable: false },
    {
      field: "action", headerName: 'Action', width: 200, editable: false,
      renderCell: (cellValues) => {
        return (
          <>
            <MoreHorizIcon aria-describedby={id} onClick={handleClick} />
            {/* <Popover
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
            </Popover> */}
          </>
        );
      }
    }
  ]

  const rows = [
    { id: 1, city: 'Sacramento', address: '9983 Aspen Meadows Ct', zipcode: '95829-8033', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: <MoreHorizIcon className='hello-menu' /> },
    { id: 2, city: 'Elk Grove', address: '9979 Tarzo Way', zipcode: '95757-3021', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 3, city: 'Elk Grove', address: '9920 Trapani Way', zipcode: '95757-0000', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 4, city: 'Sacramento', address: '9836 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 5, city: 'Sacramento', address: '9830 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 6, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 7, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 8, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 9, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 10, city: 'Sacramento', address: '5656 Aspen dhdhd C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' }, { id: 4, city: 'Sacramento', address: '9836 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 5, city: 'Sacramento', address: '9830 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 6, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 7, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 8, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 9, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 10, city: 'Sacramento', address: '5656 Aspen dhdhd C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' }, { id: 4, city: 'Sacramento', address: '9836 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 5, city: 'Sacramento', address: '9830 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 6, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 7, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 8, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 9, city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
    { id: 10, city: 'Sacramento', address: '5656 Aspen dhdhd C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-', action: '-' },
  ];

  const subDataDropdown = ["Add New Unit", "Add New Building", "Add New Community", "Upload units"]

  return (
    <UnitBody
      dropdownSub={subDataDropdown}
      dropdownTitle="New Property"
      rows={rows}
      columns={columns}
      isCheckbox={true}
    />
  )
}

export default Unit