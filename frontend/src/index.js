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
import UnitDetail from './components/UnitDetails/UpdateUnitDetail';
import BuildingDetail from './components/BuildingDetail/BuildingDetail';
import CommunityDetail from './components/CommunityDetail/CommunityDetail';
import EditProfile from './pages/setting/Profile/EditProfile';
import UpdatePassword from './pages/setting/Profile/UpdatePassword';
import CommunityMaintenance from './pages/Inspections/InspectionMaintainance/CommunityMaintenance';
import UpdateUnitDetail from './components/UnitDetails/UpdateUnitDetail';
import { DetailUnitTable } from './components/UnitDetails/DetailUnitModal';
import ActiveDetail from './pages/Inspections/ActiveDeatil/ActiveDetail';
import Demo from './components/Demo/Demo';
import ActiveDetailModalBody from './pages/Inspections/ActiveDeatil/ActiveDetailModalBody';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className='flex bottom-content'>
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
            element:
              <Unit />
          },
          {
            path: "unit/addUnitDetail",
            element:
              <UnitDetail />
          },

          {
            path: 'building',
            element: <Building />
          },
          {
            path: "building/addBuildingDetail",
            element:
              <BuildingDetail />
          },
          {
            path: 'communities',
            element: <Community />
          },
          {
            path: "communities/addCommunityDetail",
            element:
              <CommunityDetail />
          },
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
            path: 'active/activeDetail',
            element: <ActiveDetail />
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
        path: "property/communities/addCommunityDetail/communityMaintenance",
        element:
          <CommunityMaintenance />
      },


    ],
  },
  {
    path: "/demo",
    element:
      // <ActiveDetailModalBody />
      <Demo />
  },
  {
    path: "/sign-up",
    element:
      <SignUp />
  },
  {
    path: "/signin",
    element:
      <SignIn />
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);


