import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = document.getElementById('root');

if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
