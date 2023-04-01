import logo from './images/logo.svg';
import styles from './App.module.css';
import { Input } from './components/Input';
import { SelectTip } from './components/SelectTip';
import { TipCalcScreen } from './components/TipCalcScreen';
import { useState } from 'react';

function App() {
  const [inputBill, setInputBill] = useState('');
  const [inputPeople, setInputPeople] = useState('');
  const [selectedTip, setSelectedTip] = useState('');
  const [validate, setValidate] = useState(false);
  let totalAmount;

  const billChangeHandler = (e) => {
    setInputBill(e.target.value);
  };
  const peopleChangeHandler = (e) => {
    setInputPeople(e.target.value);
  };

  const selectTipHandler = (e, tip) => {
    setSelectedTip(e.target.value);
  };

  const inputBlurHandler = (e) => {
    if (!inputPeople || inputPeople <= 0) {
      setValidate(true);
      return;
    }

    setValidate(false);
    // const obj = {
    //   bill: inputBill,
    //   people: inputPeople,
    // };
    // console.log(obj);
    // // setTotalAmount((prev) => {
    // //   return { ...prev, obj };
    // // });
  };

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
            />

            <SelectTip
              selectTipHandler={selectTipHandler}
              selectedTip={selectedTip}
            />

            <Input
              name='people'
              label='Number of People'
              class='bg-people'
              type='number'
              value={inputPeople}
              changeHandler={peopleChangeHandler}
              blurHandler={inputBlurHandler}
              validate={validate}
            />
          </section>

          {/* <TipCalcScreen totalAmount={totalAmount} /> */}
          <TipCalcScreen />
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
