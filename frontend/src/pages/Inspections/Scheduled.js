import { Button, Divider, Popover } from '@mui/material'
import React, { useEffect } from 'react'
import AddNewDropdown from '../../components/AddNewDropdown'
import CommonTable from '../../components/CommonTable'
import FilterData from '../../components/FilterData'
import EditModel from '../../components/Model/EditModel'
import { inspectionMenu } from '../../data/submenuItems'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { extendTheme } from '@mui/joy/styles';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Approved from '../../Assets/approved.png'
import notApproved from '../../Assets/not-approved.png'
import { inspectionBuildingButtonList, inspectionCommunityButtonList, inspectionUnitButtonList } from '../property/propertyData'

const theme = extendTheme({
  components: {
    JoySelect: {
      defaultProps: {
        indicator: <KeyboardArrowDownIcon />,
      },
    },
  },
});

const Scheduled = () => {

  const [selectedSubTitle, setSelectedSubTitle] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedTitle, setselectedTitle] = React.useState("");
  const [buttonList, setButtonList] = React.useState([]);
  const [selectedMenu, setselectedMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


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

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
      field: 'approved', headerName: 'Approved to Send', width: 200, editable: false,
      renderCell: () => {
        return (
          <>
            <Select
              defaultValue='approved'
              indicator={<KeyboardArrowDownIcon />}
              sx={{
                backgroundColor: '#fff',
                width: 240,
                background: '#0071bc33',
                color: '#0071bc',
                border: 'unset',
                borderRadius: '5px 5px 0px 0px',
                "&:hover": {
                  background: '#0071bc33',
                  color: '#0071bc',
                  border: 'unset',
                  borderRadius: '5px 5px 0px 0px',
                },
                [`& .${selectClasses.indicator}`]: {
                  transition: '0.2s',
                  [`&.${selectClasses.expanded}`]: {
                    transform: 'rotate(-180deg)',
                  },
                },
              }}
            >
              <Option value='not' style={{ background: 'white' }}>
                <img src={notApproved} alt="" height='12px' width='12px' style={{ marginRight: '10px' }} /> Not Approved
              </Option>
              <Option value='approved' style={{ background: 'white' }}>
                <img src={Approved} alt="" height='12px' width='12px' style={{ marginRight: '10px' }} /> Approved
              </Option>
            </Select>
          </>
        )
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
        isCheckbox={false}
      />
    </>
  )
}

export default Scheduled