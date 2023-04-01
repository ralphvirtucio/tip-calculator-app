import React from 'react';
import styles from './TipRadio.module.css';

export const TipRadio = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.tip}`}>
        <input
          type='radio'
          name='tip'
          id={props.id}
          value={props.value}
          onChange={props.selectTipHandler}
        />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    </React.Fragment>
  );
};
