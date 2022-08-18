import React from 'react';
import Nav from 'component/Nav';
import PlanLimits from 'component/PlanLimits';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Limits from 'component/Limits';
import CommonComponent from '../../common/CommonComponent';
import { RouteEnum } from '../../constants/Nav/index';
import styles from './index.module.scss';

const Routs = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <main className={styles.main}>
        <Nav />
        <article className={styles.article}>
          <Routes>
            <Route path={RouteEnum.PLAN_LIMITS} element={<PlanLimits />} />
            <Route
              path={RouteEnum.PROFILE}
              element={<CommonComponent text="Profile" />}
            />
            <Route
              path={RouteEnum.SECURITY}
              element={<CommonComponent text="Security" />}
            />
            <Route
              path={RouteEnum.NOTIFICATIONS}
              element={<CommonComponent text="Notifications" />}
            />
            <Route
              path={RouteEnum.BUSINESS_PROFILE}
              element={<CommonComponent text="Business profile" />}
            />
            <Route
              path={RouteEnum.E_INVOICING}
              element={<CommonComponent text="E-invoicing" />}
            />
            <Route
              path={RouteEnum.TEAM}
              element={<CommonComponent text="Team" />}
            />
          </Routes>
          <Limits />
        </article>
      </main>
    </BrowserRouter>
  );
};

export default Routs;
