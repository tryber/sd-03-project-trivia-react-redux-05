import { REQUEST_API_TOKEN, RECEIVE_API_TOKEN, RECEIVE_API_TOKEN_ERROR } from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  token: '',
  error: '',
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_TOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_API_TOKEN:
      return {
        ...state,
        isFetching: false,
        token: action.token,
      };
    case RECEIVE_API_TOKEN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default: return state;
  }
};

export default token;
