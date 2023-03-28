import React from 'react';
import styles from './SelectTip.module.css';
import { TipRadio } from './TipRadio';

export const SelectTip = () => {
  return (
    <React.Fragment>
      <fieldset className={styles['select-tip']}>
        <legend className={styles.label}>Select tip %</legend>

        <TipRadio id='five-percent' label='5%' />
        <TipRadio id='ten-percent' label='10%' />
        <TipRadio id='fifteen-percent' label='15%' />
        <TipRadio id='twenty-five-percent' label='25%' />
        <TipRadio id='fifty-percent' label='50%' />

        <div className={styles.custom__input}>
          <input type='number' placeholder='Custom' />
        </div>
      </fieldset>
    </React.Fragment>
  );
};
