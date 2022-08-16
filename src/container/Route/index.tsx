import React from 'react';
import Nav from 'component/Nav';
import PlanLimits from 'component/PlanLimits';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Limits from 'component/Limits';
import Profile from '../../component/Profile';
import { RouteEnum } from '../../constants/Nav/index';
import styles from './index.module.scss';

const Routs = () => {
  return (
    <BrowserRouter>
      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <Routes>
            <Route path={RouteEnum.PROFILE} element={<Profile />} />
            <Route path={RouteEnum.SECURITY} element={<p>Security</p>} />
            <Route
              path={RouteEnum.NOTIFICATIONS}
              element={<p>Notifications</p>}
            />
            <Route
              path={RouteEnum.BUSINESS_PROFILE}
              element={<p>Business profile</p>}
            />
            <Route path={RouteEnum.E_INVOICING} element={<p>E-invoicing</p>} />
            <Route path={RouteEnum.TEAM} element={<p>Team</p>} />
            <Route index element={<PlanLimits />} />
          </Routes>
          <Limits />
        </article>
      </main>
    </BrowserRouter>
  );
};

export default Routs;
