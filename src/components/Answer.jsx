import PropTypes from 'prop-types';
import React from 'react';
import '../style/Answer.css';
import { connect } from 'react-redux';


class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
    this.setPoints = this.setPoints.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { answerChoosen, type } = this.props;

    if (prevProps.answerChoosen !== answerChoosen) {
      if (answerChoosen) {
        if (type === 'correct') {
          this.setState({ style: { border: '3px solid rgb(6, 240, 15)' } });
        } else {
          this.setState({ style: { border: '3px solid rgb(255, 0, 0)' } });
        }
      } else {
        this.setState({ style: { } });
      }
    }
  }


  setPoints() {
    const {
      chooseAnswer, type, timer, difficulty = 3, addPoints,
    } = this.props;
    chooseAnswer(true);
    if (type === 'correct') {
      addPoints(10 + (timer * difficulty));
    }
  }


  render() {
    const { children } = this.props;
    const { style } = this.state;
    return (
      <p style={style} onClick={() => this.setPoints()} className="answer">{children}</p>
    );
  }
}

Answer.propTypes = {
  addPoints: PropTypes.func.isRequired,
  answerChoosen: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  chooseAnswer: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};


function mapProps(state) {
  return {
    answerChoosen: state.gamePage.answerChoosed,
    timer: state.gamePage.timer,
  };
}

const dispatch = {
  addPoints: (payload) => ({ type: 'ADD_POINTS', payload }),
  chooseAnswer: (payload) => ({ type: 'CHOOSE_ANSWER', payload }),
};

export default connect(mapProps, dispatch)(Answer);
