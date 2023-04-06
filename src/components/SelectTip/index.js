import React from 'react';
import styles from './SelectTip.module.css';
import { TipRadio } from './TipRadio';

export const SelectTip = (props) => {
  const tip = +props.selectedTip;

  return (
    <React.Fragment>
      <fieldset className={styles['select-tip']}>
        <legend className={styles.label}>Select tip %</legend>
        <input type='radio' name='tip' id='' />
        <input type='radio' name='tip' id='' />
        <input type='radio' name='tip' id='' />
        <input type='radio' name='tip' id='' />
        <input type='radio' name='tip' id='' />
        <input type='radio' name='tip' id='' />
        {/* 
        <TipRadio
          id='five-percent'
          label='5%'
          value={0.05}
          selectTipHandler={props.selectTipHandler}
          tip={tip}
        />
        <TipRadio
          id='ten-percent'
          label='10%'
          value={0.1}
          selectTipHandler={props.selectTipHandler}
          tip={tip}
        />
        <TipRadio
          id='fifteen-percent'
          label='15%'
          value={0.15}
          selectTipHandler={props.selectTipHandler}
          tip={tip}
        />
        <TipRadio
          id='twenty-five-percent'
          label='25%'
          value={0.25}
          selectTipHandler={props.selectTipHandler}
          tip={tip}
        />
        <TipRadio
          id='fifty-percent'
          label='50%'
          value={0.5}
          selectTipHandler={props.selectTipHandler}
          tip={tip}
        />

        <div className={styles.custom__input}>
          <input
            type='number'
            placeholder='Custom'
            // selectTipHandler={props.selectTipHandler}
          />
        </div> */}
      </fieldset>
    </React.Fragment>
  );
};
