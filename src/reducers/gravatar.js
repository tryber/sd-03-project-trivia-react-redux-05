import { RECEIVE_API_GRAVATAR } from '../actions/index';

const INITIAL_STATE = {
  image: 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3',
};

const gravatar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_API_GRAVATAR:
      return {
        ...state,
        image: action.image,
      };
    default: return state;
  }
};

export default gravatar;
