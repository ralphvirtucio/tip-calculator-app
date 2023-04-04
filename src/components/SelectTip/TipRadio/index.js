import React from 'react';
import styles from './TipRadio.module.css';

// TASK
// Radio Buttons change the background and color when selected // Completed
// Get Value of the selected tip only one value can be selected // Completed

export const TipRadio = (props) => {
  const activeStyles = props.value === props.tip ? 'selected' : '';

  //

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
