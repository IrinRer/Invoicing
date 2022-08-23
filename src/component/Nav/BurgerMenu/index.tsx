import React, { useState } from 'react';
import Menu from '../Menu';
import styles from './index.module.scss';

const BurgerMenu = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(() => !show);
    };

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            {show ? (
                <div className={styles.wrapper_menu}>
                    <div className={styles.close} />
                    <Menu />
                </div>
            ) : (
                <div className={styles.wrapper_burger}>
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                </div>
            )
            }
        </div>
    );
};

export default BurgerMenu;
