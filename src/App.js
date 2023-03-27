import logo from './images/logo.svg';
import styles from './App.module.css';
import { Input } from './components/Input';
import { SelectTip } from './components/SelectTip';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt='Logo' />
        <h1 className={styles['visually-hidden']}> Tip Calculator</h1>
      </header>

      <main className={styles.main}>
        <form>
          <section>
            <Input name='bill' label='Bill' class='bg-bill' />

            <SelectTip />

            <Input name='people' label='Number of People' class='bg-people' />
          </section>

          <section>
            <div>
              <div>
                <div>
                  <p>Tip Amount</p>
                  <p>/ person</p>
                </div>

                <div>$4.27</div>
              </div>
              <div>
                <div>
                  <p>Total</p>
                  <p>/ person</p>
                </div>

                <div>$32.79</div>
              </div>
            </div>

            <button type='submit'>Reset</button>
          </section>
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
