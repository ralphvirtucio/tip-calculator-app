import React from 'react';
import styles from './SelectTip.module.css';
import { TipRadio } from './TipRadio';

export const SelectTip = (props) => {
  // const selectTipStyles = (tip) => {
  //   const selectedTip = props.selectedTip === tip ? 'selected' : '';

  //   return selectedTip;
  // };

  return (
    <React.Fragment>
      <fieldset className={styles['select-tip']}>
        <legend className={styles.label}>Select tip %</legend>

        <TipRadio
          id='five-percent'
          label='5%'
          value='0.05'
          selectTipHandler={props.selectTipHandler}
          tip={props.selectedTip}
        />
        <TipRadio
          id='ten-percent'
          label='10%'
          value='0.1'
          selectTipHandler={props.selectTipHandler}
        />
        <TipRadio
          id='fifteen-percent'
          label='15%'
          value='0.15'
          selectTipHandler={props.selectTipHandler}
        />
        <TipRadio
          id='twenty-five-percent'
          label='25%'
          value='0.25'
          selectTipHandler={props.selectTipHandler}
        />
        <TipRadio
          id='fifty-percent'
          label='50%'
          value='0.5'
          selectTipHandler={props.selectTipHandler}
        />

        <div className={styles.custom__input}>
          <input type='number' placeholder='Custom' />
        </div>
      </fieldset>
    </React.Fragment>
  );
};