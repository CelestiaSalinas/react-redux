import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAIL
  } from '../actions/quoteActions';
  


const initialState = {
    quote: null,
    isFetching: false,
    error: ''
}

export const quoteReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case FETCH_QUOTE_SUCCESS:
          return {
            ...state,
            quote: action.payload,
            isFetching: false,
            error: ''
          };
        case FETCH_QUOTE_FAIL:
          return {
            ...state,
            error: action.payload
          };
        default:
          return state;
      }
    }
