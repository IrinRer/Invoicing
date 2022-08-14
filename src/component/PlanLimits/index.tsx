import React from 'react';
import styles from './index.module.scss';

const PlanLimits = () => {
  return (
    <article className={styles.article}>
        <div className={styles.wrapper_header}>
            <p className={styles.text_header}>Invoicing Start</p>
            <button type='button' className={styles.button_header}>Change plan</button>
        </div>
        <p className={styles.text_header_sub}>6,99 € <span className={styles.span_into_p}>/mo</span></p>
    </article>
  )
}

export default PlanLimits;