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
    this.setTheState = this.setTheState.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { answerChoosen, type } = this.props;

    if (prevProps.answerChoosen !== answerChoosen) {
      if (answerChoosen) {
        if (type === 'correct') {
          this.setTheState({ style: { border: '3px solid rgb(6, 240, 15)' } });
        } else {
          this.setTheState({ style: { border: '3px solid rgb(255, 0, 0)' } });
        }
      } else {
        this.setTheState({ style: { } });
      }
    }
  }

  setTheState(prop) {
    this.setState(prop);
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
    const { children, dataTestid, timer } = this.props;
    const { style } = this.state;
    return (
      <button
        type="button"
        disabled={timer <= 0}
        data-testid={dataTestid}
        style={style}
        onClick={() => this.setPoints()}
        className="answer"
      >
        {children}

      </button>
    );
  }
}

Answer.propTypes = {
  addPoints: PropTypes.func.isRequired,
  answerChoosen: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  chooseAnswer: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
  dataTestid: PropTypes.string.isRequired,
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
