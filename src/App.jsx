// // src/App.jsx

// import React from 'react';
// import Header from './components/Header/Header';
// import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';

// function App() {
//   // Позже мы добавим Redux и логику запроса к API.
//   return (
//     <div>
//       <Header exchangeRates={{ /* заглушка для курсов валют */ }} />
//       <CurrencyConverter rates={{ /* заглушка для курсов валют */ }} />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { loadExchangeRates } from './store/actions/currencyActions';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadExchangeRates()); // Загружаем курсы валют при монтировании компонента
  }, [dispatch]);

  return (
    <div>
      {/* Обновленная система маршрутов с использованием Routes */}
      <Routes>
        <Route path="/converter" element={<CurrencyConverter />} />
        <Route path="*" element={<Navigate to="/converter" />} />
      </Routes>
    </div>
  );
};

export default App;