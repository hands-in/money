import {Money} from '../@types/Money';
import {ExchangeRates} from '../@types/ExchangeRates';
import MoneyCalculator from '../@types/MoneyCalculator';
import GlobalMoney from './GlobalMoney';
import LocalMoneyCalculator from '../local/LocalMoneyCalculator';

export default class GlobalMoneyCalculator implements MoneyCalculator<Money> {
  private money: Money;

  private readonly fx: ExchangeRates;

  private localMoneyCalculator: LocalMoneyCalculator;

  constructor(money: Money, fx: ExchangeRates) {
    this.money = money;
    this.localMoneyCalculator = new LocalMoneyCalculator(money);
    this.fx = fx;
  }

  add(money: Money): GlobalMoneyCalculator {
    const convertedMoney = new GlobalMoney(money, this.fx).convertTo(
      this.money.currency
    );

    this.localMoneyCalculator = this.localMoneyCalculator.add(convertedMoney);

    return this;
  }

  subtract(money: Money): GlobalMoneyCalculator {
    const convertedMoney = new GlobalMoney(money, this.fx).convertTo(
      this.money.currency
    );

    this.localMoneyCalculator =
      this.localMoneyCalculator.subtract(convertedMoney);

    return this;
  }

  divide(float: number): GlobalMoneyCalculator {
    this.localMoneyCalculator = this.localMoneyCalculator.divide(float);

    return this;
  }

  multiply(float: number): GlobalMoneyCalculator {
    this.localMoneyCalculator = this.localMoneyCalculator.multiply(float);

    return this;
  }

  calculate(precision = 0): GlobalMoney {
    return new GlobalMoney(
      this.localMoneyCalculator.calculate(precision),
      this.fx
    );
  }
}
