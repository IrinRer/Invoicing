import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../constants/Nav';
import styles from './index.module.scss';

const Nav = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <NavLink to={RouteEnum.PROFILE}>Profile</NavLink>
        </li>
        <li>
          <NavLink to={RouteEnum.SECURITY}>Security</NavLink>
        </li>
        <li>
          <NavLink to={RouteEnum.NOTIFICATIONS}>Notifications</NavLink>
        </li>
        <li>
          <NavLink to={RouteEnum.E_INVOICING}>E-invoicing</NavLink>
        </li>
        <li>
          <NavLink to={RouteEnum.BUSINESS_PROFILE}>Business profile</NavLink>
        </li>
        <li>
          <NavLink to={RouteEnum.PLAN_LIMITS}>Plan and limits</NavLink>
        </li>
        <li>
          <NavLink to={RouteEnum.TEAM}>Team</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
