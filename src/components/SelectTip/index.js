import React from 'react';
import styles from './SelectTip.module.css';
import { TipRadio } from './TipRadio';

export const SelectTip = (props) => {
  return (
    <React.Fragment>
      <fieldset className={styles['select-tip']}>
        <legend className={styles.label}>Select tip %</legend>
        {/* <label htmlFor='five-percent'>
          <input
            type='radio'
            name='tip'
            id='five-percent'
            value={0.05}
            checked={+props.selectedTip === 0.05}
            onChange={props.selectTipHandler}
          />
          5%
        </label>
        <label htmlFor='ten-percent'>
          <input
            type='radio'
            name='tip'
            id='ten-percent'
            value={0.1}
            checked={+props.selectedTip === 0.1}
            onChange={props.selectTipHandler}
          />
          10%
        </label>

        <label htmlFor='fifteen-percent'>
          <input
            type='radio'
            name='tip'
            id='fifteen-percent'
            value={0.15}
            checked={+props.selectedTip === 0.15}
            onChange={props.selectTipHandler}
          />
          15%
        </label>
        <label htmlFor='twenty-five-percent'>
          <input
            type='radio'
            name='tip'
            id='twenty-five-percent'
            value={0.25}
            checked={+props.selectedTip === 0.25}
            onChange={props.selectTipHandler}
          />
          25%
        </label>

        <label htmlFor='fifty-percent'>
          <input
            type='radio'
            name='tip'
            id='fifty-percent'
            value={0.5}
            checked={+props.selectedTip === 0.5}
            onChange={props.selectTipHandler}
          />
          50%
        </label>

        <label htmlFor='custom'>
          <input type='radio' name='tip' id='custom' />
        </label> */}

        <TipRadio
          id='five-percent'
          label='5%'
          value={0.05}
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='ten-percent'
          label='10%'
          value={0.1}
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='fifteen-percent'
          label='15%'
          value={0.15}
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='twenty-five-percent'
          label='25%'
          value={0.25}
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
        <TipRadio
          id='fifty-percent'
          label='50%'
          value={0.5}
          selectTipHandler={props.selectTipHandler}
          selectedTip={props.selectedTip}
        />
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
