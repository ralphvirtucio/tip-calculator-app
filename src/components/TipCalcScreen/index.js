import React from 'react';
import styles from './TipCalcScreen.module.css';

export const TipCalcScreen = ({
  isFormFilledOut,
  bill,
  people,
  selectedTip,
  customTip,
}) => {
  let tipAmount = 0;
  let totalAmount = 0;

  if (customTip) {
    const convertedCustomInput = customTip / 100;
    tipAmount = (+bill * convertedCustomInput) / +people;
    totalAmount = (+bill * (1 + convertedCustomInput)) / +people;
  } else {
    tipAmount = (+bill * +selectedTip) / +people;
    totalAmount = (+bill * (1 + +selectedTip)) / +people;
  }

  const calculatedTipAmount = isFinite(tipAmount)
    ? Math.floor(tipAmount * 100) / 100
    : '0.00';
  const calculatedTotalAmount = isFinite(totalAmount)
    ? totalAmount.toFixed(2)
    : '0.00';

  return (
    <React.Fragment>
      <section className={styles.container}>
        <div className={styles['labels__price-container']}>
          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Tip Amount</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <p className={styles.price}>${calculatedTipAmount}</p>
          </div>

          <div className={styles['labels-price']}>
            <div className={styles.label}>
              <p className={styles.price__label}>Total</p>
              <p className={styles['price__label--2']}>/ person</p>
            </div>

            <p className={styles.price}>${calculatedTotalAmount}</p>
          </div>
        </div>

        <button
          type='submit'
          className={styles.reset__btn}
          disabled={!isFormFilledOut}>
          Reset
        </button>
      </section>
    </React.Fragment>
  );
};
