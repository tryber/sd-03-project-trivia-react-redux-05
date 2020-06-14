import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import QuestionContainer from '../components/QuestionContainer';
import AnswerContainer from '../components/AnswerContainer';
import Timer from '../components/Timer';

const difficultyArray = {
  hard: 3,
  medium: 2,
  easy: 1,
};

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    this.props.resetScore();
  }

  nextQuestion() {
    const { questionNumber } = this.state;
    const { history } = this.props;
    if (questionNumber < 4) {
      this.setState({ questionNumber: questionNumber + 1 });
    } else {
      history.push('/feedback');
    }
  }


  render() {
    const { questionNumber } = this.state;
    const { questions } = this.props;
    const {
      category,
      question, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers, difficulty,
    } = questions[questionNumber];
    return (
      <div>
        <Header />
        <QuestionContainer category={category} question={question} />
        <AnswerContainer
          correctAnswer={correctAnswer}
          nextQuestion={this.nextQuestion}
          incorrectAnswers={incorrectAnswers}
          difficulty={difficultyArray[difficulty]}
        />
        <Timer />

      </div>
    );
  }
}

GamePage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.string, PropTypes.array])).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  resetScore: PropTypes.func.isRequired,
};


const dispatch = { resetScore: () => ({ type: 'RESET_SCORE' }) };

function mapProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapProps, dispatch)(GamePage);
