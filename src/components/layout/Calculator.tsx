import Card from "../UI/Card";
import "./Calculator.scss";

const Calculator = () => {
  return (
    <Card className="dark-blue">
      <div id="calculator">
        <h1>Yield Calculator</h1>
        <Card className="white calc-box">
          <div className="calc__stake">
            <h2>Staking</h2>

            <h3>Select Your Crypto</h3>
            <form action="" className="calc">
              <div>
                <label htmlFor="" className="calc__label">
                  Quantity
                </label>
                <input type="text" className="calc__input" />
                <label htmlFor="" className="calc__label">
                  Yield
                </label>
                <input type="text" className="calc__input" />
              </div>
              <div>
                <label htmlFor="" className="calc__label">
                  Months
                </label>
                <input type="text" className="calc__input" />
                <label htmlFor="" className="calc__label">
                  Earned
                </label>
                <input type="text" className="calc__input" />
              </div>
            </form>
          </div>
          <div className="calc__stake">
            <h2>Borrowing</h2>

            <h3>Select Your Crypto</h3>
            <form action="" className="calc">
              <label htmlFor="" className="calc__label">
                Quantity
              </label>
              <input type="text" className="calc__input" />
              <label htmlFor="" className="calc__label">
                Yield
              </label>
              <input type="text" className="calc__input" />
              <label htmlFor="" className="calc__label">
                Months
              </label>
              <input type="text" className="calc__input" />
              <label htmlFor="" className="calc__label">
                Earned
              </label>
              <input type="text" className="calc__input" />
            </form>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default Calculator;