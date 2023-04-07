import logo from './images/logo.svg';
import styles from './App.module.css';
import { Input } from './components/Input';
import { SelectTip } from './components/SelectTip';
import { TipCalcScreen } from './components/TipCalcScreen';
import { useState } from 'react';

function App() {
  const [inputBill, setInputBill] = useState('');
  const [billTouch, setBillTouch] = useState(false);
  const [inputPeople, setInputPeople] = useState('');
  const [inputPeopleTouch, setInputPeopleTouch] = useState(false);
  const [selectedTip, setSelectedTip] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // TEMP
  const [customInput, setCustomInput] = useState('');

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

    setTotalAmount((+inputBill * (1 + +selectedTip)) / +inputPeople);
    setTipAmount((+inputBill * +selectedTip) / +inputPeople);
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
    setTipAmount(0);
    setTotalAmount(0);
  };

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
