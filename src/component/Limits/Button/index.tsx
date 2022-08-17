import classNames from 'classnames';
import React from 'react';
import { bd } from '../bd';
import styles from './index.module.scss';

const Buttons = ({ name, handleClickBtn }) => {
  return (
    <>
      {bd.map((item) => {
        const className = classNames(styles.btn, {
          [styles.active]: item === name,
        });

        return (
          <div className={styles.btn_wrapper} key={item}>
            <button
              className={className}
              type="button"
              onClick={(e) => handleClickBtn(item, e)}
            >
              {item}
            </button>
            <div className={styles.line} />
          </div>
        );
      })}
    </>
  );
};

export default Buttons;
