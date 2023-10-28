import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadExchangeRates } from '../../store/actions/currencyActions';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const rates = useSelector(state => state.currency.rates);
  const error = useSelector(state => state.currency.error);

  useEffect(() => {
    dispatch(loadExchangeRates());
  }, [dispatch]);

  if (error) {
    return <div>Произошла ошибка при загрузке курсов валют: {error}</div>;
  }

  if (!rates.USD || !rates.EUR) {
    return <div>Загрузка...</div>;
  }

  return (
    <header className={styles.header}>
      <div>
        <h1>Текущий курс валют</h1>
        <p>USD: {rates.USD}</p>
        <p>EUR: {rates.EUR}</p>
      </div>
    </header>
  );
};

export default Header;
