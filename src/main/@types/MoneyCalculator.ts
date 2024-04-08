import {Money} from './Money';

export default interface MoneyCalculator<T extends Money> {
  divide(float: number): MoneyCalculator<T>;
  multiply(float: number): MoneyCalculator<T>;
  add(data: T): MoneyCalculator<T>;
  subtract(data: T): MoneyCalculator<T>;
  calculate(precision?: number): T;
}
