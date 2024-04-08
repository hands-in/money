import {Currency} from '~/@types/Currency';
import {MoneyUtils} from '~/index';

describe('Money Utils (locale = en-GB)', () => {
  const LOCALE = 'en-GB';

  it('expect formatMoney to return £300.00 when input is 300_00GBP', () => {
    const THREE_POUNDS = {amount: 300_00, currency: Currency.GBP};

    expect(MoneyUtils.formatMoney(THREE_POUNDS, {locales: LOCALE})).toEqual(
      '£300.00'
    );
  });

  it('expect formatMoney to return ¥30,000 when input is 30000JPY', () => {
    const THIRTY_THOUSAND_YEN = {amount: 30_000, currency: Currency.JPY};

    expect(
      MoneyUtils.formatMoney(THIRTY_THOUSAND_YEN, {locales: LOCALE})
    ).toEqual('¥30,000');
  });

  it('expect formatMoney to return "JP¥30,000" when input is 30000JPY and includeCurrencyCode is true', () => {
    const THIRTY_THOUSAND_YEN = {amount: 30_000, currency: Currency.JPY};

    expect(
      MoneyUtils.formatMoney(THIRTY_THOUSAND_YEN, {
        locales: LOCALE,
        includeCurrencyCode: true,
      })
    ).toEqual('JP¥30,000');
  });

  it('expect convertFloatToMoney to return "{amount: 30, currency: JPY}" when input is 30.00 JPY', () => {
    const THIRTY_YEN = {amount: 30, currency: Currency.JPY};

    expect(MoneyUtils.convertFloatToMoney('30.00', Currency.JPY)).toEqual(
      THIRTY_YEN
    );
  });

  it('expect convertFloatToMoney to return "{amount: 30.00, currency: EUR}" when input is 30.00 EUR', () => {
    const THIRTY_EUR = {amount: 3000, currency: Currency.EUR};

    expect(MoneyUtils.convertFloatToMoney('30.00', Currency.EUR)).toEqual(
      THIRTY_EUR
    );
  });

  it('expect convertFloatToMoney to return "{amount: 30715, currency: EUR}" when input is 307.15 EUR', () => {
    const THREE_HUNDRED_AND_SEVEN_EUR_FIFTEEN_CENTS = {
      amount: 30715,
      currency: Currency.EUR,
    };

    expect(MoneyUtils.convertFloatToMoney('307.15', Currency.EUR)).toEqual(
      THREE_HUNDRED_AND_SEVEN_EUR_FIFTEEN_CENTS
    );
  });
});
