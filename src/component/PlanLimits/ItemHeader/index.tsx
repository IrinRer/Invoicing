import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { IDataHeader } from 'constants/Nav';
import { bd } from '../../bd.ts';
import styles from './index.module.scss';

const ItemHeader = () => {
  const [header, setHeader] = useState<string>('Invoicing Start');
  const [price, setPrice] = useState<string>('');

  useEffect(() => {
    bd.forEach((item: IDataHeader) => {
      if (item.header === header) {
        setPrice(item.price);
      }
    });
  }, [header]);

  const handleClick = (e: any) => {
    setHeader(e.target.outerText);
  };

  const headers = bd.map((item: IDataHeader) => {
    const className = classnames(styles.non_active, {
      [styles.active]: item.header === header,
    });

    return (
      <div onClick={handleClick} className={className} key={item.header}>
        {item.header}
      </div>
    );
  });

  return (
    <article className={styles.article}>
      <div className={styles.wrapper_header}>
        <p className={styles.text_header}>{header}</p>
        <div className={styles.dropdown}>
          <button type="button" className={styles.button_header} >
            Change plan
          </button>
          <div className={styles.dropdown_content}>{headers}</div>
        </div>
      </div>
      <p className={styles.text_header_sub}>
        {price} € <span className={styles.span_into_p}>/mo</span>
      </p>
      <div className={styles.wrapper_price}>
        <p className={styles.p_price}>We’ll charge {price} € on Jul 24, 2020</p>
        <button type="button" className={styles.button_header}>
          Change card *** 5423 or billing info
        </button>
      </div>
      <div className={styles.wrapper_button}>
        <button type="button" className={styles.button_switch}>
          Switch to annual plan{' '}
        </button>
        <p>and save 24,00 € a year</p>
      </div>
    </article>
  );
};

export default ItemHeader;
