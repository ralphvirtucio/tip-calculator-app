import React from 'react';
import styles from './TipCalcScreen.module.css';

export const TipCalcScreen = (props) => {
  console.log(isFinite(props.tipAmount));
  console.log(isFinite(props.totalAmount));
  return (
    <React.Fragment>
      <section className={styles.container}>
        <div className={styles['labels__price-container']}>
          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Tip Amount</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <p className={styles.price}>
              $
              {`${
                isFinite(props.tipAmount) ? props.tipAmount.toFixed(2) : '0.00'
              }`}
            </p>
          </div>

          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Total</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <p className={styles.price}>
              $
              {`${
                isFinite(props.totalAmount)
                  ? props.totalAmount.toFixed(2)
                  : '0.00'
              }`}
            </p>
          </div>
        </div>

        <button
          type='submit'
          className={styles.reset__btn}
          disabled={!props.isFormFilledOut}>
          Reset
        </button>
      </section>
    </React.Fragment>
  );
};
