import logo from './images/logo.svg';
import styles from './App.module.css';
import { Input } from './components/Input';
import { SelectTip } from './components/SelectTip';
import { TipCalcScreen } from './components/TipCalcScreen';
import { useState } from 'react';

// TODO:
// The amount in the calc screen needs to be update when the user is typing or selecting tip

function App() {
  const [inputBill, setInputBill] = useState('');
  const [billTouch, setBillTouch] = useState(false);
  const [inputPeople, setInputPeople] = useState('');
  const [inputPeopleTouch, setInputPeopleTouch] = useState(false);
  const [selectedTip, setSelectedTip] = useState('');
  // const [tipAmount, setTipAmount] = useState(0);
  // const [totalAmount, setTotalAmount] = useState(0);

  // TEMP
  const [customInput, setCustomInput] = useState('');

  let tipAmount = 0;
  let totalAmount = 0;

  const isFormFilledOut =
    inputBill && inputPeople && (selectedTip || customInput);

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

  const peopleChangeHandler = (e) => {
    if (!inputPeople || inputPeople === '0') {
      setInputPeopleTouch(false);
    }

    setInputPeople(e.target.value);
  };

  const peopleBlurHandler = (e) => {
    if (!inputPeople || inputPeople === '0') {
      setInputPeopleTouch(true);
    }
  };

  const selectedTipHandler = (e) => {
    setSelectedTip(e.target.value);
  };

  const customSelectTipHandler = (e) => {
    if (selectedTip) {
      setSelectedTip('');
    }
    setCustomInput(e.target.value);
  };

  const resetForm = (e) => {
    e.preventDefault();

    setInputBill('');
    setInputPeople('');
    setSelectedTip('');
    setCustomInput('');
  };

  // if (customInput) {
  //   const convertedCustomInput = +customInput / 100;
  //   tipAmount = (+inputBill * convertedCustomInput) / +inputPeople;
  //   totalAmount = (+inputBill * (1 + convertedCustomInput)) / +inputPeople;
  // } else {
  //   tipAmount = (+inputBill * +selectedTip) / +inputPeople;
  //   totalAmount = (+inputBill * (1 + selectedTip)) / +inputPeople;
  // }

  // if (customInput) {
  //   const convertedCustomInput = +customInput / 100;
  //   setTotalAmount((+inputBill * (1 + convertedCustomInput)) / +inputPeople);
  //   setTipAmount((+inputBill * convertedCustomInput) / +inputPeople);
  // } else {
  //   setTotalAmount((+inputBill * (1 + +selectedTip)) / +inputPeople);
  //   setTipAmount((+inputBill * +selectedTip) / +inputPeople);
  // }

  // if (customInput) {
  //   const convertedCustomInput = +customInput / 100;
  //   setTotalAmount((+inputBill * (1 + convertedCustomInput)) / +inputPeople);
  //   setTipAmount((+inputBill * convertedCustomInput) / +inputPeople);
  // } else {
  //   setTotalAmount((+inputBill * (1 + +selectedTip)) / +inputPeople);
  //   setTipAmount((+inputBill * +selectedTip) / +inputPeople);
  // }

  // Formula Tip Amount: Bill * 1 _ Selected Tip / Number of People
  // Formulat Total Person: Bill * SelectedTip / Number of People

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt='Logo' />
        <h1 className={styles['visually-hidden']}> Tip Calculator</h1>
      </header>

      <main className={styles.main}>
        <form onSubmit={resetForm}>
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
              selectedTip={selectedTip}
              selectTipHandler={selectedTipHandler}
              customSelectTipHandler={customSelectTipHandler}
              customInput={customInput}
            />

            <Input
              name='people'
              label='Number of People'
              class='bg-people'
              type='number'
              value={inputPeople}
              changeHandler={peopleChangeHandler}
              blurHandler={peopleBlurHandler}
              validate={inputPeopleTouch}
            />
          </section>

          <TipCalcScreen
            isFormFilledOut={isFormFilledOut}
            tipAmount={tipAmount}
            totalAmount={totalAmount}
          />
          {/* <TipCalcScreen totalAmount={totalAmount} /> */}
          {/* <TipCalcScreen tipAmount={tipAmount} totalAmount={totalAmount} /> */}
        </form>
      </main>
    </div>
  );
}

export default App;
