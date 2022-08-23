import React from 'react';
import styles from './index.module.scss';
import Menu from './Menu';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Menu />
    </nav>
  );
};

export default Nav;
