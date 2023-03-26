import logo from './images/logo.svg';
import styles from './App.module.css';
import { Input } from './components/Input';

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

            <fieldset>
              <legend>Select tip %</legend>

              <div>
                <input type='radio' name='tip' id='five-percent' />
                <label htmlFor='five-percent'>5%</label>
              </div>
              <div>
                <input type='radio' name='tip' id='ten-percent' />
                <label htmlFor='ten-percent'>10%</label>
              </div>
              <div>
                <input type='radio' name='tip' id='fifteen-percent' />
                <label htmlFor='fifteen-percent'>15%</label>
              </div>
              <div>
                <input type='radio' name='tip' id='twenty-five-percent' />
                <label htmlFor='twenty-five-percent'>25%</label>
              </div>
              <div>
                <input type='radio' name='tip' id='fifty-percent' />
                <label htmlFor='fifty-percent'>50%</label>
              </div>

              <div>
                <input type='number' placeholder='Custom' />
              </div>
            </fieldset>

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
