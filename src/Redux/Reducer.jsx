const ADD_QUESTIONS = 'ADD_QUESTIONS';
const ADD_POINTS = 'ADD_POINTS';
const CHOOSE_ANSWER = 'CHOOSE_ANSWER';
const SET_TIMER = 'SET_TIMER';
const PLAYER_INFORMATION = 'PLAYER_INFORMATION';
const RESET_SCORE = 'RESET_SCORE';

const initialState = {
  questions: [
    {
      category: 'History',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What year did the Boxing Day earthquake &amp; tsunami occur in the Indian Ocean?',
      correct_answer: '2004',
      incorrect_answers: [
        '2006',
        '2008',
        '2002',
      ],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'hard',
      question: 'DHCP stands for Dynamic Host Configuration Port.',
      correct_answer: 'False',
      incorrect_answers: [
        'True',
      ],
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In the anime Noragami who is one of the main protagonists?',
      correct_answer: 'Yukine',
      incorrect_answers: [
        'Karuha',
        'Mineha',
        'Mayu',
      ],
    },
    {
      category: 'Entertainment: Film',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What was the name of the protagonist in the movie Commando (1985)?',
      correct_answer: 'John Matrix',
      incorrect_answers: [
        'Ben Richards',
        'Douglas Quaid',
        'Harry Tasker',
      ],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What is real haggis made of?',
      correct_answer: 'Sheep&#039;s Heart, Liver and Lungs',
      incorrect_answers: [
        'Sheep&#039;s Heart, Kidneys and Lungs',
        'Sheep&#039;s Liver, Kidneys and Eyes',
        'Whole Sheep',
      ],
    },
  ],
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  gamePage: {
    answerChoosed: false,
    timer: 30,
    answersRight: 0,

  },
};

function renderAddPoints(state, action) {
  let player = JSON.parse(localStorage.getItem('state'));
  player = {
    player:
    {
      ...player.player,
      score: player.player.score + action.payload,
      assertions: player.player.assertions + 1,
    },
  };
  localStorage.setItem('state', JSON.stringify(player));
  return {
    ...state,
    player: {
      ...state.player,
      score: state.player.score + action.payload,
      assertions: state.player.assertions + 1,
    },
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: [...action.payload] };

    case ADD_POINTS: {
      return renderAddPoints(state, action);
    }
    case CHOOSE_ANSWER:
      return { ...state, gamePage: { ...state.gamePage, answerChoosed: action.payload } };

    case SET_TIMER:
      return { ...state, gamePage: { ...state.gamePage, timer: action.payload } };

    case PLAYER_INFORMATION:
      return {
        ...state,
        player:
        { ...state.player, name: action.playerName, gravatarEmail: action.playerEmail },
      };

    case RESET_SCORE:
      return { ...state, player: { ...state.player, score: 0 } };

    default:
      return state;
  }
}


export default reducer;
