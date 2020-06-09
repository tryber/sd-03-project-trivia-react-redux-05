import { REQUEST_API_QUESTIONS, RECEIVE_API_QUESTIONS, RECEIVE_API_QUESTIONS_ERROR } from '../actions/index';

const INITIAL_STATE = {
  isFetching: false,
  questions: [],
  error: '',
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API_QUESTIONS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_API_QUESTIONS:
      return {
        ...state,
        isFetching: false,
        questions: action.questions,
      };
    case RECEIVE_API_QUESTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default: return state;
  }
};

export default questions;
