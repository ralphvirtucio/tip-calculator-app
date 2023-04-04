import logo from './images/logo.svg';
import styles from './App.module.css';
import { Input } from './components/Input';
import { SelectTip } from './components/SelectTip';
import { TipCalcScreen } from './components/TipCalcScreen';
import { useState } from 'react';

function App() {
  const [inputBill, setInputBill] = useState('');
  const [billTouch, setBillTouch] = useState(false);
  // const [inputPeople, setInputPeople] = useState('');
  // const [selectedTip, setSelectedTip] = useState('');
  // const [validate, setValidate] = useState(false);
  // const [tipAmount, setTipAmount] = useState(0.0);
  // const [totalAmount, setTotalAmount] = useState(0.0);

  const billChangeHandler = (e) => {
    if (!inputBill || inputBill === '0') {
      setBillTouch(false);
    }

    setInputBill(e.target.value);
  };

  const billBlurHandler = (e) => {
    if (!inputBill || inputBill === '0') {
      setBillTouch(true);
    }
  };
  // const peopleChangeHandler = (e) => {
  //   setInputPeople(+e.target.value);
  // };

  // const selectTipHandler = (e, tip) => {
  //   setSelectedTip(+e.target.value);
  // };

  // const inputBlurHandler = (e) => {
  //   if (!inputPeople || inputPeople <= 0) {
  //     setValidate(true);
  //     return;
  //   }

  //   const tipAmount = (inputBill / inputPeople) * selectedTip;
  //   const totalAmount = (inputBill * (1 + selectedTip)) / inputPeople;
  //   setTipAmount(tipAmount);
  //   setTotalAmount(totalAmount);
  //   setValidate(false);
  // };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt='Logo' />
        <h1 className={styles['visually-hidden']}> Tip Calculator</h1>
      </header>

      <main className={styles.main}>
        <form>
          <section className={styles['section--1']}>
            <Input
              name='bill'
              label='Bill'
              class='bg-bill'
              type='number'
              value={inputBill}
              changeHandler={billChangeHandler}
              blurHandler={billBlurHandler}
              validate={billTouch}
            />

            <SelectTip
            // selectTipHandler={selectTipHandler}
            // selectedTip={selectedTip}
            />

            {/* <Input
              name='people'
              label='Number of People'
              class='bg-people'
              type='number'
              // value={inputPeople}
              // changeHandler={peopleChangeHandler}
              // blurHandler={inputBlurHandler}
              // validate={validate}
            /> */}
          </section>

          <TipCalcScreen />
          {/* <TipCalcScreen totalAmount={totalAmount} /> */}
          {/* <TipCalcScreen tipAmount={tipAmount} totalAmount={totalAmount} /> */}
        </form>
      </main>
    </div>
  );
}

export default App;

// Bill

//   Select Tip %
//   5%
//   10%
//   15%
//   25%
//   50%
//   Custom

//   Number of People

//   Tip Amount
//   / person

//   Total
//   / person

//   Reset
