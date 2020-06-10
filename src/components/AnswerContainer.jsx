import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Answer from './Answer';


function shuffle(arrayToShuffle) {
  const array = [...arrayToShuffle];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class AnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.getAnswers(),
    };
    this.next = this.next.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { correctAnswer } = this.props;
    if (prevProps.correctAnswer !== correctAnswer) {
      this.setState({ answers: this.getAnswers() });
    }
  }


  getAnswers() {
    const {
      incorrectAnswers, correctAnswer, difficulty,
    } = this.props;
    const wrongAnswer = incorrectAnswers.map((ans, index) => (
      <Answer
        dataTestid={`wrong-answer-${index}`}
      >
        {ans}
      </Answer>
    ));
    const rightAnswer = (
      <Answer
        difficulty={difficulty}
        type="correct"
        dataTestid="correct-answer"
      >
        {correctAnswer}
      </Answer>
    );

    return shuffle([...wrongAnswer, rightAnswer]);
  }

  next() {
    const { nextQuestion, resetStyle, setTime } = this.props;
    setTime(30);
    resetStyle();
    nextQuestion();
  }

  render() {
    const { answers } = this.state;

    return (
      <div>
        {answers}
        <button data-testid="btn-next" onClick={this.next} type="button">Proxima</button>
      </div>

    );
  }
}

AnswerContainer.propTypes = {
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
};

const dispatch = {
  resetStyle: () => ({ type: 'CHOOSE_ANSWER', payload: false }),
  setTime: (payload) => ({ type: 'SET_TIMER', payload }),
};

export default connect(null, dispatch)(AnswerContainer);
