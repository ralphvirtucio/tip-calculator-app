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
        {/* <div>
          <input type='radio' name='tip' id='ten-percent' />
          <label htmlFor='ten-percent'>10%</label>
        </div>
        <div>
          <input type='radio' name='tip' id='fifteen-percent' />
          <label htmlFor='fifteen-percent'>15%</label>
        </div>
        <div>
          <input type='radio' name='tip' id='twenty-five-percent' />
          <label htmlFor='twenty-five-percent'>25%</label>
        </div>
        <div>
          <input type='radio' name='tip' id='fifty-percent' />
          <label htmlFor='fifty-percent'>50%</label>
        </div> */}

        <div className={styles.custom__input}>
          <input type='number' placeholder='Custom' />
        </div>
      </fieldset>
    </React.Fragment>
  );
};
