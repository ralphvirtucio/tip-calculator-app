import React from 'react';
import styles from './TipCalcScreen.module.css';

export const TipCalcScreen = (props) => {
  const { obj } = props.totalAmount;
  console.log(obj);
  return (
    <React.Fragment>
      <section className={styles.container}>
        <div className={styles['labels__price-container']}>
          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Tip Amount</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            {/* <p className={styles.price}>$4.27</p> */}
            <p className={styles.price}>$0.00</p>
            {/* <p className={styles.price}>
              ${`${obj.bill ? '$0.00' : obj.bill}`}
            </p> */}
          </div>

          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Total</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            {/* <p className={styles.price}>$32.79</p> */}
            <p className={styles.price}>$0.00</p>
            {/* <p className={styles.price}>
              ${`${!obj.amount ? '$0.00' : obj.amount}`}
            </p> */}
          </div>
        </div>

        <button type='submit' className={styles.reset__btn} disabled={true}>
          Reset
        </button>
      </section>
    </React.Fragment>
  );
};
