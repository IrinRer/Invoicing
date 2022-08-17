import React, { useState } from 'react';
import { bd1, bd2 } from './bdLimits';
import Item from './Item';
import styles from './index.module.scss';
import Buttons from './Button';

const Limits = () => {
  const [btnClick, setBtnClick] = useState<boolean>(true);
  const [name, setName] = useState<string>('Limits');

  const handleClickBtn = (str: string, e: any) => {
    if (str === 'Limits') {
      setBtnClick(true);
    } else {
      setBtnClick(false);
    }
    setName(e.target.outerText);
  };

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.wrapper}>
        <Buttons name={name} handleClickBtn={handleClickBtn} />
      </div>
      {btnClick ? <Item bd={bd1} /> : <Item bd={bd2} />}
    </div>
  );
};

export default Limits;
