import React, { useEffect } from 'react'
import AddNewDropdown from '../../components/AddNewDropdown';
import CommonTable from '../../components/CommonTable'
import FilterData from '../../components/FilterData';
import { buildingButtonList, communityButtonList, unitButtonList } from './propertyData';
import { unitSubMenu } from "../../data/submenuItems";
import EditModel from '../../components/Model/EditModel';

const Building = () => {

  const [openModal, setOpenModal] = React.useState(false);
  const [selectedMenu, setselectedMenu] = React.useState(false);
  const [selectedTitle, setselectedTitle] = React.useState("");
  const [buttonList, setButtonList] = React.useState([]);

  useEffect(() => {
    if (selectedTitle === "Add New Unit") {
      setButtonList(unitButtonList);
    } else if (selectedTitle === "Add New Building") {
      setButtonList(buildingButtonList);
    } else if (selectedTitle === "Add New Community") {
      setButtonList(communityButtonList);
    }
  }, [selectedTitle]);

  const columns = [
    { field: 'name', headerName: 'Name', width: 150, flex: 1 },
    { field: 'address', headerName: 'Address', width: 250, flex: 1 },
    { field: 'city', headerName: 'City', width: 150, flex: 1 },
    { field: 'zipcode', headerName: 'ZIP Code', width: 150, flex: 1 },
    { field: 'type', headerName: 'Type', width: 150, flex: 1 },
    { field: 'team', headerName: 'Team', width: 150, flex: 1 },
    { field: 'completed', headerName: 'Last Inspection Completed ', width: 200, flex: 1 },
  ]

  const rows = [
    { id: 1, name: 'Sacramento', city: 'Sacramento', address: '9983 Aspen Meadows Ct', zipcode: '95829-8033', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 2, name: 'Sacramento', city: 'Elk Grove', address: '9979 Tarzo Way', zipcode: '95757-3021', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 3, name: 'Sacramento', city: 'Elk Grove', address: '9920 Trapani Way', zipcode: '95757-0000', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 4, name: 'Sacramento', city: 'Sacramento', address: '9836 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 5, name: 'Sacramento', city: 'Sacramento', address: '9830 Mars Way', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 6, name: 'Sacramento', city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 7, name: 'Sacramento', city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 8, name: 'Sacramento', city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 9, name: 'Sacramento', city: 'Sacramento', address: '9983 Aspen Meadows C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
    { id: 10, name: 'Sacramento', city: 'Sacramento', address: '5656 Aspen dhdhd C', zipcode: '95827-2805', type: 'Multi-Family', team: 'Eagle Property', completed: '-' },
  ];

  const handleSelectedMenu = (item) => {
    console.log("Selected Menu Item ==" + item.menuValue);
    setselectedTitle(item.menuTitle);
    setselectedMenu(item.menuValue);
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <>
      <div className='unit-top'>
        <AddNewDropdown
          menuTitle="New Property"
          subMenuList={unitSubMenu}
          handleSelectedMenu={handleSelectedMenu}
          selectedMenu={selectedMenu}
        />
        <FilterData />
        <EditModel
          buttonList={buttonList}
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          title={selectedTitle}
          subTitle="Fill out the details below to add a unit."
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

export default Building