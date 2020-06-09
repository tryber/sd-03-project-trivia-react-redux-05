import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function FeedBack({ answersRight, score }) {
  return (
    <div>
      <p data-testid="feedback-text">{answersRight < 3 ? 'Podia ser melhor...' : 'Mandou bem!'}</p>
      <p data-testid="feedback-total-question">{`Você acertou ${answersRight} questões`}</p>
      <p data-testid="feedback-total-score">{`Um total de ${score} pontos`}</p>
      <button data-testid="btn-ranking" type="button">Ver Ranking</button>
      <button data-testid="btn-play-again" type="button">Jogar Novamente</button>
    </div>
  );
}

FeedBack.propTypes = {
  answersRight: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

function mapProp(state) {
  return {
    answersRight: state.gamePage.answersRight,
    score: state.gamePage.score,
  };
}

export default connect(mapProp)(FeedBack);
