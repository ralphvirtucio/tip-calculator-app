import React from 'react';
import styles from './TipRadio.module.css';

export const TipRadio = (props) => {
  const activeStyles = props.value === props.tip ? 'selected' : '';

  return (
    <React.Fragment>
      {/* <div> */}
      <label
        htmlFor={props.id}
        className={`${styles.tip} ${styles[activeStyles]}`}>
        {props.label}
        <input
          type='radio'
          name='tip'
          id={props.id}
          value={props.value}
          onChange={props.selectTipHandler}
        />
      </label>
      {/* </div> */}
    </React.Fragment>
  );
};
