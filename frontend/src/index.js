import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Properties from './pages/Properties';
import Inspections from './pages/Inspections';
import Settings from './pages/Settings';
import Tenants from './pages/Tenants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Model from './components/Model/Model';
import Unit from './pages/property/Unit';
import Building from './pages/property/Building';
import Community from './pages/property/Community';
import AddUnitData from './components/AddNewUnit/AddUnitData';
import AddBuilding from './components/AddNewBuilding/AddBuilding';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>

    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
          <Inspections />
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


