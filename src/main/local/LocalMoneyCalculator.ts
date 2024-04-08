import {Big} from 'big.js';
import {Currency} from '../@types/Currency';
import {Money} from '../@types/Money';
import MoneyCalculator from '../@types/MoneyCalculator';

export default class LocalMoneyCalculator implements MoneyCalculator<Money> {
  private currency: Currency;

  private result: Big;

  constructor(money: Money) {
    this.currency = money.currency;
    this.result = new Big(money.amount);
  }

  divide(float: number): LocalMoneyCalculator {
    // safeguard divide by zero error
    if (float === 0) {
      return this;
    }

    this.result = this.result.div(new Big(float));

    return this;
  }

  multiply(float: number): LocalMoneyCalculator {
    this.result = this.result.mul(new Big(float));

    return this;
  }

  add(money: Money): LocalMoneyCalculator {
    this.checkCurrencyMatches(money);

    this.result = this.result.add(new Big(money.amount));

    return this;
  }

  subtract(money: Money): LocalMoneyCalculator {
    this.checkCurrencyMatches(money);

    this.result = this.result.sub(new Big(money.amount));

    return this;
  }

  calculate(precision = 0): Money {
    return {
      amount: Number(this.result.toFixed(precision, Big.roundUp)),
      currency: this.currency,
    };
  }

  /* HELPER FUNCTION */
  private checkCurrencyMatches(money: Money): void {
    if (this.currency !== money.currency) {
      throw new Error(
        `CURRENCY_MISMATCH ${this.currency} with ${money.currency}`
      );
    }
  }
}
