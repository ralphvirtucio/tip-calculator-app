import logo from './images/logo.svg';

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt='Logo' />
        <h1>Tip Calculator</h1>
      </header>

      <main>
        <form>
          <section>
            <div>
              <label htmlFor='bill'>Bill</label>
              <input type='number' id='bill' />
            </div>

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

            <div>
              <label htmlFor='people'>Number of People</label>
              <input type='number' id='people' />
            </div>
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
