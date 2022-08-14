import React from 'react';
import Star from '../../../icons/star.svg';
import Close from '../../../icons/close.svg';
import styles from './index.module.scss';

const ItemFeatures = () => {
  return (
    <article>
      <div className={styles.wrapper_features}>
        <p className={styles.p_features}>Explore new features</p>
        <img src={Star} alt="star.svg" />
      </div>
      <div className={styles.block}>
        <div className={styles.block_header}>
          <p className={styles.p_into_block_header}>Invoicing Premium</p>
          <img src={Close} alt="close.svg" className={styles.close} />
        </div>
        <div className={styles.info}>
          <ul className={styles.ul}>
            <li>
              <p>Unlimited outgoing e-invoices</p>
            </li>
            <li>
              <p>Unlimited connected banks</p>
            </li>
            <li>
              <p>10 users</p>
            </li>
            <li>
              <p>Expense management</p>
            </li>
          </ul>

          <div className={styles.price}>
             <p>€20.99 <span>/mo</span></p>
             <p className={styles.p_into_price}>billed annually or 24.99 € billed monthly</p>
             <button type='button' className={styles.btn_upgrade}>Upgrade</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemFeatures;
