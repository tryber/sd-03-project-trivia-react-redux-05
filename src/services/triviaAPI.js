const API_URL_TOKEN = 'https://opentdb.com/api_token.php?command=request';
const API_URL_QUESTIONS = 'https://opentdb.com/api.php?amount=5&token=';

export const getToken = () => (
  fetch(`${API_URL_TOKEN}`)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export const getQuestions = (token) => (
  fetch(`${API_URL_QUESTIONS}${token}`)
    .then((response) => (
      response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
