import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import QuestionContainer from '../components/QuestionContainer';
import AnswerContainer from '../components/AnswerContainer';
import Timer from '../components/Timer';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const { questionNumber } = this.state;
    this.setState({ questionNumber: questionNumber + 1 });
  }


  render() {
    const { questionNumber } = this.state;
    const { questions } = this.props;
    const {
      category, question, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers,
    } = questions[questionNumber];
    return (
      <div>
        <Header />
        <QuestionContainer category={category} question={question} />
        <AnswerContainer
          correctAnswer={correctAnswer}
          nextQuestion={this.nextQuestion}
          incorrectAnswers={incorrectAnswers}
        />
        <Timer />

      </div>
    );
  }
}

GamePage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.string, PropTypes.array])).isRequired,
};


function mapProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapProps)(GamePage);
