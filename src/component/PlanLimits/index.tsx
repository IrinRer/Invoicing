import React from 'react';
import styles from './index.module.scss';

const PlanLimits = () => {
  return (
    <article className={styles.article}>
      <div className={styles.wrapper_header}>
        <p className={styles.text_header}>Invoicing Start</p>
        <div className={styles.dropdown}>
          <button type="button" className={styles.button_header}>
            Change plan
          </button>
          <div className={styles.dropdown_content}>
            <p>fff</p>
            <p>fffff</p>
          </div>
        </div>
      </div>
      <p className={styles.text_header_sub}>
        6,99 € <span className={styles.span_into_p}>/mo</span>
      </p>
      <div className={styles.wrapper_price}>
        <p className={styles.p_price}>We’ll charge 6,99 € on Jul 24, 2020</p>
        <div className={styles.dropdown}>
          <button type="button" className={styles.button_header}>
            Change card *** 5423 or billing info
          </button>
          <div className={styles.dropdown_content}>
            <p>fff</p>
            <p>fffff</p>
          </div>
        </div>
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

export default PlanLimits;
