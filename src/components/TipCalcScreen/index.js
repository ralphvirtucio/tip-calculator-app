import React from 'react';
import styles from './TipCalcScreen.module.css';

export const TipCalcScreen = (props) => {
  const { tipAmount, totalAmount } = props;
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
              {`${!tipAmount ? '$0.00' : tipAmount.toFixed(2)}`}
            </p>
          </div>

          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Total</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <p className={styles.price}>
              {`${!totalAmount ? '$0.00' : totalAmount.toFixed(2)}`}
            </p>
          </div>
        </div>

        <button type='submit' className={styles.reset__btn} disabled={true}>
          Reset
        </button>
      </section>
    </React.Fragment>
  );
};
