import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

function FeedBack({ answersRight, score, history }) {
  return (
    <div>
      <Header />
      <p data-testid="feedback-text">{answersRight < 3 ? 'Podia ser melhor...' : 'Mandou bem!'}</p>
      <p>
        Você acertou

        <span data-testid="feedback-total-question">{answersRight}</span>

        questões
      </p>
      <p>
        Um total de

        <span data-testid="feedback-total-score">{score}</span>

        pontos
      </p>
      <button data-testid="btn-ranking" type="button">Ver Ranking</button>
      <button onClick={() => history.push('/')} data-testid="btn-play-again" type="button">Jogar Novamente</button>
    </div>
  );
}

FeedBack.propTypes = {
  answersRight: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

function mapProp(state) {
  return {
    answersRight: state.player.assertions,
    score: state.player.score,
  };
}

export default connect(mapProp)(FeedBack);
