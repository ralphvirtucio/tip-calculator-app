import React from 'react';
import styles from './TipCalcScreen.module.css';

export const TipCalcScreen = () => {
  return (
    <React.Fragment>
      <section className={styles.container}>
        <div className={styles['labels__price-container']}>
          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Tip Amount</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <div className={styles.price}>$4.27</div>
          </div>

          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Total</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <div className={styles.price}>$32.79</div>
          </div>
        </div>

        <button type='submit' className={styles.reset__btn}>
          Reset
        </button>
      </section>
    </React.Fragment>
  );
};
