import { RouteEnum } from 'constants/Nav';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../index.module.scss';

const Menu = () => {
  return (
    <>
      <ul className={styles.ul}>
        {' '}
        Personal
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.PROFILE}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            Profile
          </NavLink>
          <div className={styles.line} />
        </li>
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.SECURITY}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            Security
          </NavLink>
          <div className={styles.line} />
        </li>
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.NOTIFICATIONS}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            Notifications
          </NavLink>
          <div className={styles.line} />
        </li>
      </ul>
      <ul className={styles.ul}>
        {' '}
        Tesla s.r.L.
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.E_INVOICING}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            E-invoicing
          </NavLink>
          <div className={styles.line} />
        </li>
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.BUSINESS_PROFILE}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            Business profile
          </NavLink>
          <div className={styles.line} />
        </li>
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.PLAN_LIMITS}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            Plan and limits
          </NavLink>
          <div className={styles.line} />
        </li>
        <li className={styles.li}>
          <NavLink
            to={RouteEnum.TEAM}
            className={({ isActive }) =>
              isActive ? styles.link_active : styles.link
            }
          >
            Team
          </NavLink>
          <div className={styles.line} />
        </li>
      </ul>
    </>
  );
};

export default Menu;
