import React from 'react';
import styles from './index.module.scss';

interface IProps {
  text: string;
}

const CommonComponent: React.FC<IProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <p>{text}</p>
    </div>
  );
};

export default CommonComponent;
