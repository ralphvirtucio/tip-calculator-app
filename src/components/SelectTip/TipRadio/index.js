import React from 'react';
import styles from './TipRadio.module.css';

export const TipRadio = (props) => {
  const activeStyles = props.value === props.selectedTip ? 'selected' : '';

  return (
    <React.Fragment>
      <label
        htmlFor={props.id}
        className={`${styles.tip} ${styles[activeStyles]}`}>
        {props.label}
        <input
          type='radio'
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.selectTipHandler}
          checked={props.selectedTip === props.value}
        />
      </label>
    </React.Fragment>
  );
};
