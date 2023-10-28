const initialState = {
  rates: {},
  error: null,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EXCHANGE_RATES':
      return {
        ...state,
        rates: action.payload,
      };
    case 'SET_EXCHANGE_RATES_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
