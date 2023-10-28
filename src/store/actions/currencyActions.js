import ExchangeService from '../../api/exchangeService';

export const setExchangeRates = rates => ({
    type: 'SET_EXCHANGE_RATES',
    payload: rates,
});

// Действие для обработки ошибок
export const setExchangeRatesError = error => ({
    type: 'SET_EXCHANGE_RATES_ERROR',
    payload: error,
});

export const loadExchangeRates = () => async dispatch => {
    try {

        // Использование ExchangeService для получения данных о курсах валют
        const data = await ExchangeService.getLatestRates();

        // Если данные успешно получены, мы диспатчим их в store
        dispatch(setExchangeRates(data.rates));

    } catch (error) {
        // В случае ошибки, диспатчим действие с ошибкой
        dispatch(setExchangeRatesError(error.toString()));
    }
};


