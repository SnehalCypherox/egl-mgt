import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Properties from './pages/Properties';
import Inspections from './pages/Inspections';
import Settings from './pages/setting/Settings';
import Tenants from './pages/Tenants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Model from './components/Model/EditModel';
import Unit from './pages/property/Unit';
import Building from './pages/property/Building';
import Community from './pages/property/Community';
import AddUnitData from './components/PropertyDropdownModel/AddNewUnit/AddUnitData';
import AddBuilding from './components/PropertyDropdownModel/AddNewBuilding/AddBuilding';
import AddCommunity from './components/PropertyDropdownModel/AddNewCommunity/AddCommunity';
import Active from './pages/Inspections/Active';
import Scheduled from './pages/Inspections/Scheduled';
import Archive from './pages/Inspections/Archive';
import chatbox from './Assets/ChatBox.png'
import UnitDetail from './components/UnitDetails/UnitDetail';
import BuildingDetail from './components/BuildingDetail/BuildingDetail';
import CommunityDetail from './components/CommunityDetail/CommunityDetail';
import EditProfile from './pages/setting/Profile/EditProfile';
import UpdatePassword from './pages/setting/Profile/UpdatePassword';
import AddUnitInspection from './components/InspectionDropdownModal/AddUnitInspection/AddUnitInspection';
import AddBuildingInspection from './components/InspectionDropdownModal/AddBuildingInspection/AddBuildingInspection';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='eagle-body'>
          <Outlet />
          <div className='chat-box'>
            <img src={chatbox} alt="" />
          </div>
        </div>
      </div>

    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <AppLayout />,
      </>,
    children: [
      {
        path: "property",
        element:
          <>
            <Properties />
            <Outlet />
          </>,

        children: [
          {
            path: 'unit',
            element: <Unit />
          },
          {
            path: 'building',
            element: <Building />
          },
          {
            path: 'communities',
            element: <Community />
          }
        ]
      },
      {
        path: "/inspection",
        element:
          <>
            <Inspections />
            <Outlet />
          </>,
        children: [
          {
            path: 'active',
            element: <Active />
          },
          {
            path: 'scheduled',
            element: <Scheduled />
          },
          {
            path: 'archive',
            element: <Archive />
          }
        ]
      },
      {
        path: "tenants",
        element:
          <Tenants />
      },
      {
        path: "setting",
        element:
          <Settings />
      },
      {
        path: "edit-profile",
        element:
          <EditProfile />
      },
      {
        path: "update-password",
        element:
          <UpdatePassword />
      },
      {
        path: "addUnitDetail",
        element:
          <UnitDetail />
      },
      {
        path: "addBuildingDetail",
        element:
          <BuildingDetail />
      },
      {
        path: "addCommunityDetail",
        element:
          <CommunityDetail />
      },
      {
        path: "model",
        element:
          <Model />
      },
      {
        path: "add-unit",
        element:
          <AddUnitData />
      },
      {
        path: "add-building",
        element:
          <AddBuilding />
      },
      {
        path: "add-community",
        element:
          <AddCommunity />
      },
      {
        path: "/",
        element:
          // <AddUnitInspection />
          <AddBuildingInspection />
      }

    ],
  },
  {
    path: "/sign-up",
    element:
      <SignUp />
  },
  {
    path: "signin",
    element:
      <SignIn />
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);


