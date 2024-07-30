import {Currency} from './Currency';

/**
 * @minimum 0
 * @isInt invalid integer type used
 * @format int64
 */
type Integer = number;

export interface Money {
  /**
   * The amount of money in the smallest denomination of the currency (for example, US dollar amounts are specified in cents, so 100 = $1.00)
   * @minimum 0
   * @isInt invalid integer type used
   * @format int64
   * @example 100
   */
  readonly amount: Integer;
  /**
   * The type of currency, in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.
   * @example USD
   */
  readonly currency: Currency;
}
