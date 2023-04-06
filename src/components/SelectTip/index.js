import React from 'react';
import styles from './SelectTip.module.css';
import { TipRadio } from './TipRadio';

export const SelectTip = (props) => {
  return (
    <React.Fragment>
      <fieldset className={styles['select-tip']}>
        <legend className={styles.label}>Select tip %</legend>

        <TipRadio
          id='five-percent'
          label='5%'
          value='0.05'
          name='tip'
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='ten-percent'
          label='10%'
          value='0.1'
          name='tip'
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='fifteen-percent'
          label='15%'
          value='0.15'
          name='tip'
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='twenty-five-percent'
          label='25%'
          value='0.25'
          name='tip'
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='fifty-percent'
          label='50%'
          value='0.5'
          name='tip'
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <div className={styles.custom__input}>
          <input
            type='number'
            placeholder='Custom'
            onFocus={props.selectTipHandler}
          />
        </div>
        {/* TASK CUSTOM INPUT */}

        {/* 
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
