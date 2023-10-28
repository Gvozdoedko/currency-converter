import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadExchangeRates } from '../../store/actions/currencyActions';
import styles from './CurrencyConverter.module.scss';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const rates = useSelector(state => state.currency.rates);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    dispatch(loadExchangeRates());
  }, [dispatch]);

  useEffect(() => {
    if (rates[currencyTo] && rates[currencyFrom]) {
      const result = (amount / rates[currencyFrom]) * rates[currencyTo];
      setConvertedAmount(result);
    }
  }, [amount, currencyFrom, currencyTo, rates]);

  const handleCurrencyChange = (event, currencyType) => {
    if (currencyType === 'from') {
      setCurrencyFrom(event.target.value);
    } else {
      setCurrencyTo(event.target.value);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const currencyOptions = rates 
  ? Object.keys(rates).map((currencyCode) => (
      <option key={currencyCode} value={currencyCode}>
        {currencyCode}
      </option>
    ))
  : null;

  return (
    <div className={styles.converter}>
      <h2>Конвертер валют</h2>
      <input 
        type="number" 
        value={amount} 
        onChange={handleAmountChange} 
        className={styles.input} // пример добавления стилей, если они определены
      />

      {/* Выбор валюты для конвертации */}
      <select 
        value={currencyFrom} 
        onChange={(e) => handleCurrencyChange(e, 'from')} 
        className={styles.select} // пример добавления стилей, если они определены
      >
        {currencyOptions}
      </select>

      <p>Конвертировать в</p>
      <select 
        value={currencyTo} 
        onChange={(e) => handleCurrencyChange(e, 'to')} 
        className={styles.select} // пример добавления стилей, если они определены
      >
        {currencyOptions}
      </select>

      {/* Отображение результата */}
      <h3>Результат: {convertedAmount.toFixed(2)} {currencyTo}</h3> {/* Добавлено округление до 2-х знаков после запятой */}
    </div>
  );
};

export default CurrencyConverter;