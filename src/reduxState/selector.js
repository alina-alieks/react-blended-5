import { createSelector } from '@reduxjs/toolkit';

export const selectorBaseCurrency = state => state.currency.baseCurrency;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
export const selectError = state => state.currency.isError;
export const selectLoading = state => state.currency.isLoading;
export const selectRates = state => state.currency.rates;
export const selectFilter = state => state.currency.filter;
export const selectFiltredRates = createSelector(
  [selectorBaseCurrency, selectRates, selectFilter],
  (baseCurrency, rates, filter) => {
    return rates
      .filter(
        ([key]) => key !== baseCurrency && key.toLowerCase().includes(filter),
      )
      .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));
  },
);
