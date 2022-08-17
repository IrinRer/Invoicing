import classNames from 'classnames';
import React from 'react';
import { bd } from '../bd';
import styles from './index.module.scss';

interface IProps {
  name: string;
  handleClickBtn: (item: string, e: any) => void;
}

const Buttons: React.FC<IProps> = ({ name, handleClickBtn }) => {
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
