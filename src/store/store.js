import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from './reducers/currencyReducer';

const rootReducer = combineReducers({
    currency: currencyReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
