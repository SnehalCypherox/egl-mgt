import React, { useEffect } from 'react'
import AddNewDropdown from '../../components/AddNewDropdown';
import CommonTable from '../../components/CommonTable'
import FilterData from '../../components/FilterData';
import { buildingButtonList, communityButtonList, unitButtonList } from './propertyData';
import { unitSubMenu } from "../../data/submenuItems";
import EditModel from '../../components/Model/EditModel';
import { CircularProgress } from '@mui/material';
import axios from 'axios';


const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'street', headerName: 'Address', width: 200 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'zipcode', headerName: 'Zipcode', width: 150 },
];

const Building = () => {

  const [openModal, setOpenModal] = React.useState(false);
  const [selectedMenu, setselectedMenu] = React.useState(false);
  const [selectedTitle, setselectedTitle] = React.useState("");
  const [buttonList, setButtonList] = React.useState([]);

  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const updatedRows = response.data.map(row => ({
          ...row,
          city: row.address.city,
          street: row.address.street,
          zipcode: row.address.zipcode,
        }));
        setRows(updatedRows);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedTitle === "Add New Unit") {
      setButtonList(unitButtonList);
    } else if (selectedTitle === "Add New Building") {
      setButtonList(buildingButtonList);
    } else if (selectedTitle === "Add New Community") {
      setButtonList(communityButtonList);
    }
  }, [selectedTitle]);
  
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
      {loading ? (
        <CircularProgress sx={{ display: 'flex', mx: 'auto', my: '15%' }} />
      ) : (
        <CommonTable
          className="unit-table"
          rows={rows}
          columns={columns}
          isCheckbox={false}
        />
      )
      }

    </>

  )
}

export default Building