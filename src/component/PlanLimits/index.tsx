import React from 'react';
import ItemFeatures from './ItemFeatures';
import ItemHeader from './ItemHeader';
import styles from './index.module.scss';

const PlanLimits = () => {
  return (
    <div className={styles.wrapper}>
      <ItemHeader />
       <div className={styles.line}/>
      <ItemFeatures />
    </div>
  );
};

export default PlanLimits;
