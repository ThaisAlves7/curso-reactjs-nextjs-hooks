import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      console.log('Increment');
      return { ...state, counter: state.counter + 1 };
    }

    case types.DECREMENT_COUNTER: {
      console.log('Decrement');
      return { ...state, counter: state.counter - 1 };
    }
  }

  console.log('Não encontrei a action: ', action.type);
  return { ...state };
};
