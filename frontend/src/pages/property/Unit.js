import React, { useEffect, useState } from 'react'
import CommonTable from '../../components/CommonTable';
import AddNewDropdown from '../../components/AddNewDropdown';
import FilterData from '../../components/FilterData';
import EditModel from '../../components/Model/EditModel';
import { unitSubMenu } from "../../data/submenuItems";
import { buildingButtonList, communityButtonList, unitButtonList } from './propertyData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';


const columns = [
  { field: 'street', headerName: 'Address', width: 200 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'zipcode', headerName: 'Zipcode', width: 150 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 130 },
];

const Unit = () => {

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedMenu, setselectedMenu] = React.useState(false);
  const [selectedTitle, setselectedTitle] = React.useState("");
  const [buttonList, setButtonList] = React.useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    if (selectedTitle === "Add New Unit") {
      setButtonList(unitButtonList);
    } else if (selectedTitle === "Add New Building") {
      setButtonList(buildingButtonList);
    } else if (selectedTitle === "Add New Community") {
      setButtonList(communityButtonList);
    }
  }, [selectedTitle]);

  // const open = Boolean(anchorEl);
  // // const id = open ? 'simple-popover' : undefined;

  const handleSelectedMenu = (item) => {
    setselectedTitle(item.menuTitle);
    setselectedMenu(item.menuValue);
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setselectedTitle('')
  };


  return (
    <>
      <div className="unit-top">
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
          onClose={() => {
            if (buttonList[6]) {
              navigate('/inspection')
            }
          }}
        >
        </EditModel>
      </div>
      {loading ? (
        <CircularProgress sx={{display: 'flex', mx: 'auto', my: '15%'}} />
      ) : (
        <CommonTable
          className="unit-table"
          rows={rows}
          columns={columns}
          isCheckbox={true}
        />
      )
      }


    </>

  )
}

export default Unit