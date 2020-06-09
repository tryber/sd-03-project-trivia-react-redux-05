import { combineReducers } from 'redux';
import token from './token';
import questions from './questions';
import gravatar from './gravatar';

const rootReducer = combineReducers(
  {
    token,
    questions,
    gravatar,
  },
);

export default rootReducer;
