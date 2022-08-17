import { ILimitsBD, WIDTH_LINE } from 'constants/Limits';
import React, { useRef } from 'react';
import styles from './index.module.scss';

interface IProps {
  bd: Array<ILimitsBD>;
}

const Item: React.FC<IProps> = ({ bd }) => {
  const widthLine: number = WIDTH_LINE;
  const width = useRef<any>();

  return (
    <div className={styles.wrapper_main}>
      {bd.map((item) => {
        width.current =
          (widthLine * Number(item.first_number)) / Number(item.second_number);
        return (
          <div className={styles.wrapper} key={item.header}>
            <div className={styles.wrapper_header}>
              <p>{item.header}</p>
              <p className={styles.number}>
                {item.first_number}
                {item.second_number ? <span> / {item.second_number}</span> : ''}
              </p>
            </div>
            <div key={item.header}>
              <div className={styles.line_non_color} />
              <div
                className={styles.line_color}
                color={item.color}
                style={{
                  width: width.current || widthLine,
                }}
              />
            </div>
            <p className={styles.text}>
              {item.text_under_line} <span>Upgrade your plan</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Item;
