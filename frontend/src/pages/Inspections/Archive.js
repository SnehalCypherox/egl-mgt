import { Button, Divider, Popover } from '@mui/material'
import React, { useEffect } from 'react'
import AddNewDropdown from '../../components/AddNewDropdown'
import CommonTable from '../../components/CommonTable'
import FilterData from '../../components/FilterData'
import EditModel from '../../components/Model/EditModel'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { buildingButtonList, communityButtonList, inspectionBuildingButtonList, inspectionCommunityButtonList, inspectionUnitButtonList, unitButtonList } from '../property/propertyData'
import { inspectionMenu } from '../../data/submenuItems'
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = extendTheme({
  components: {
    JoySelect: {
      defaultProps: {
        indicator: <KeyboardArrowDownIcon />,
      },
    },
  },
});

const Archive = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedMenu, setselectedMenu] = React.useState(false);
  const [selectedTitle, setselectedTitle] = React.useState("");
  const [selectedSubTitle, setSelectedSubTitle] = React.useState("");
  const [buttonList, setButtonList] = React.useState([]);

  useEffect(() => {
    if (selectedTitle === "Add unit inspection") {
      setButtonList(inspectionUnitButtonList);
    }
    else if (selectedTitle === "Add building inspection") {
      setButtonList(inspectionBuildingButtonList);
    }
    else if (selectedTitle === "Add community inspection") {
      setButtonList(inspectionCommunityButtonList);
    }
  }, [selectedTitle]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSelectedMenu = (item) => {
    console.log("Selected Menu Item ==" + item.menuValue);
    setselectedTitle(item.menuTitle);
    setselectedMenu(item.menuValue);
    setSelectedSubTitle(item.menuValue);
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setselectedTitle('')
  };

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
              }}>Not Started</Button>

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
              <div className='menu-list'>
                <Button variant='contained' sx={{
                  color: '#0071BC', backgroundColor: '#0071bc33', py: '12px', px: '50px',
                  "&:hover": {
                    color: '#0071BC', backgroundColor: '#0071bc33'
                  }
              }}>Archived</Button>
              </div>
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

  return (
    <>
      <div className="unit-top">
        <AddNewDropdown
          menuTitle="New Inspection"
          modelTagLine={selectedSubTitle}
          subMenuList={inspectionMenu}
          handleSelectedMenu={handleSelectedMenu}
          selectedMenu={selectedMenu}
        />
        <CssVarsProvider theme={theme} >
          <Select className='active-select-box' defaultValue="active" sx={{ py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px', color: '#000000', backgroundColor: '#0071BC1a', border: 'unset', position: 'absolute', right: '4%', bottom: '0' }}>
            <Option value="active">All Active</Option>
            <Divider sx={{ mx: '10px' }} />
            <Option value="review">Awaiting Review</Option>
            <Divider sx={{ mx: '10px' }} />
            <Option value="almost">Almost Due</Option>
            <Divider sx={{ mx: '10px' }} />
            <Option value="overdue">Overdue</Option>
            <Divider sx={{ mx: '10px' }} />
            <Option value="archived">Archived</Option>
          </Select>
        </CssVarsProvider>
        <FilterData />

        <EditModel
          buttonList={buttonList}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          handleSelectedMenu={handleSelectedMenu}
          title='Add Inspection'
          subTitle={selectedSubTitle}
          isDropDownClick={selectedTitle}
        ></EditModel>
      </div>
      <CommonTable
        className="unit-table"
        rows={rows}
        columns={columns}
        isCheckbox={true}
      />
    </>
  )
}

export default Archive