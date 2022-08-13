import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../../component/Profile';
import { RouteEnum } from '../../constants/Nav/index';

const Routs = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteEnum.PROFILE} element={<Profile/>} />
        <Route path={RouteEnum.SECURITY} element={<p>Security</p>} />
        <Route path={RouteEnum.NOTIFICATIONS} element={<p>Notifications</p>} />
        <Route path={RouteEnum.BUSINESS_PROFILE} element={<p>Business profile</p>} />
        <Route path={RouteEnum.E_INVOICING} element={<p>E-invoicing</p>} />
        <Route index element={<Profile/>} />
        <Route path={RouteEnum.TEAM} element={<p>Team</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routs;
