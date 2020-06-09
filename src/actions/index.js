import { getToken, getQuestions } from '../services/triviaAPI';

export const REQUEST_API_TOKEN = 'REQUEST_API_TOKEN';
export const RECEIVE_API_TOKEN = 'RECEIVE_API_TOKEN';
export const RECEIVE_API_TOKEN_ERROR = 'RECEIVE_API_TOKEN_ERROR';
export const REQUEST_API_QUESTIONS = 'REQUEST_API_QUESTIONS';
export const RECEIVE_API_QUESTIONS = 'RECEIVE_API_QUESTIONS';
export const RECEIVE_API_QUESTIONS_ERROR = 'RECEIVE_API_QUESTIONS_ERROR';
export const RECEIVE_API_GRAVATAR = 'RECEIVE_API_GRAVATAR';

const requestToken = () => ({
  type: REQUEST_API_TOKEN,
});

const receiveTokenSuccess = (data) => ({
  type: RECEIVE_API_TOKEN,
  token: data.token,
});

const receiveTokenError = (error) => ({
  type: RECEIVE_API_TOKEN_ERROR,
  error,
});

export function fetchToken() { // action creator retorna função, possível graças ao redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestToken());
    return getToken()
      .then(
        (dataJson) => dispatch(receiveTokenSuccess(dataJson)),
        (error) => dispatch(receiveTokenError(error)),
      );
  };
}

const requestQuestions = () => ({
  type: REQUEST_API_QUESTIONS,
});

const receiveQuestionsSuccess = (data) => ({
  type: RECEIVE_API_QUESTIONS,
  questions: data.results,
});

const receiveQuestionsError = (error) => ({
  type: RECEIVE_API_QUESTIONS_ERROR,
  error,
});

export function fetchQuestions(token) { // action creator retorna função graças ao redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestQuestions());
    return getQuestions(token)
      .then(
        (dataJson) => dispatch(receiveQuestionsSuccess(dataJson)),
        (error) => dispatch(receiveQuestionsError(error)),
      );
  };
}

export const storeGravatarImage = (image) => ({
  type: RECEIVE_API_GRAVATAR,
  image,
});
