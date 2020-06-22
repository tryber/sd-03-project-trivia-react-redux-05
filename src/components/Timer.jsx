import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.tik = this.tik.bind(this);
  }


  componentDidMount() {
    setInterval(this.tik, 1000);
  }

  tik() {
    const {
      answerChoosed, setTime, timer, stopPage,
    } = this.props;
    if (timer > 0 && !answerChoosed) {
      setTime(timer - 1);
    } else if (timer <= 0) {
      stopPage(true);
    }
  }

  render() {
    const { timer } = this.props;
    return (
      <p>{`Timer: ${timer}`}</p>
    );
  }
}

Timer.propTypes = {
  answerChoosed: PropTypes.bool.isRequired,
  setTime: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  stopPage: PropTypes.func.isRequired,
};

function mapProps(state) {
  return {
    answerChoosed: state.gamePage.answerChoosed,
    timer: state.gamePage.timer,
  };
}

const dispatch = {
  setTime: (payload) => ({ type: 'SET_TIMER', payload }),
  stopPage: (payload) => ({ type: 'CHOOSE_ANSWER', payload }),
};

export default connect(mapProps, dispatch)(Timer);
