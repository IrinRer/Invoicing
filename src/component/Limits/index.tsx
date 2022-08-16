import React, { useState } from 'react';
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
      {btnClick ? <Item /> : <p>gggg</p>}
    </div>
  );
};

export default Limits;
