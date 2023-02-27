import React from 'react'
import AddNewDropdown from '../../components/AddNewDropdown';
import CommonTable from '../../components/CommonTable'
import FilterData from '../../components/FilterData';

const Building = () => {
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
        dropdownSub={subDataDropdown}
        dropdownTitle="New Property"
        rows={rows}
        columns={columns}
        checkboxSelection={false}
      />
    </>

  )
}

export default Building