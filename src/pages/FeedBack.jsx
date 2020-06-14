import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import getGravatarImage from '../services/gravatarAPI';


function FeedBack({
  answersRight, score, history, picture, name,
}) {
  useEffect(() => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    let newRanking;
    try {
      newRanking = [...ranking, { name, score, picture: getGravatarImage(picture) }];
    } catch (e) {
      newRanking = [{ name, score, picture }];
    }

    localStorage.setItem('ranking', JSON.stringify(newRanking));
  }, []);


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
      <Link to="/ranking">
        <button data-testid="btn-ranking" type="button">Ver Ranking</button>
      </Link>
      <button onClick={() => history.push('/')} data-testid="btn-play-again" type="button">Jogar Novamente</button>
    </div>
  );
}

FeedBack.propTypes = {
  answersRight: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};

function mapProp(state) {
  return {
    answersRight: state.player.assertions,
    score: state.player.score,
    picture: state.player.gravatarEmail,
    name: state.player.name,


  };
}


export default connect(mapProp)(FeedBack);
