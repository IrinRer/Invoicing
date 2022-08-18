import React, { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  open?: boolean;
  title: any;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_block}>
          <h6 className={styles.h6}>
            <div className={styles.wrapper_title}>{title}</div>
          </h6>
          <button
            type="button"
            className={styles.btn}
            onClick={handleFilterOpening}
          >
            {isOpen ? (
              <div className={styles.arrow_up} aria-label='collapse-button'/>
            ) : (
              <div className={styles.arrow_down} aria-label='collapse-button'/>
            )}
          </button>
        </div>
      </div>

      <div className={styles.card_children}>
        {isOpen && <div className={styles.children}>{children}</div>}
      </div>
    </>
  );
};

export default Collapsible;
