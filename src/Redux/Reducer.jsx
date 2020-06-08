const ADD_QUESTIONS = 'ADD_QUESTIONS';

const initialState = {
  questions: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: [...action.payload] };

    default:
      return state;
  }
}


export default reducer;
