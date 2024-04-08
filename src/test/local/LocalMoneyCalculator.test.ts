import {Currency} from '~/@types/Currency';
import {LocalMoneyCalculator} from '~/index';

describe('Local Money Calculator', () => {
  it('expect LocalMoneyCalculator to return 300GBP when inputs are 100GBP plus 200GBP', () => {
    const ONE_HUNDRED_GBP = {amount: 100, currency: Currency.GBP};
    const TWO_HUNDRED_GBP = {amount: 200, currency: Currency.GBP};
    const THREE_HUNDRED_GBP = {amount: 300, currency: Currency.GBP};

    expect(
      new LocalMoneyCalculator(ONE_HUNDRED_GBP).add(TWO_HUNDRED_GBP).calculate()
    ).toEqual(THREE_HUNDRED_GBP);
  });
});
