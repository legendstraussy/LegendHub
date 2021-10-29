import { useReducer } from 'react';

const setAction = (type, payload) => ({ type, payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'setFilters':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case 'setOption':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const usePagination = defaultOptions => {
  const { page = 0, rowsPerPage = 25 } = defaultOptions;
  const [options, dispatch] = useReducer(reducer, {
    filters: {},
    page,
    order: null,
    orderBy: null,
    rowsPerPage,
  });

  const actions = {
    setFilters: payload => dispatch(setAction('setFilters', payload)),
    setOptions: payload => dispatch(setAction('setOption', payload)),
  };

  return {
    options,
    actions,
  };
};

export default usePagination;
