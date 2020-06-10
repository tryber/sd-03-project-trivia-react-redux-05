import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../style/Header.css';

function Header({ avatar, name, score = 0 }) {
  return (
    <div className="header-container">
      <img data-testid="header-profile-picture" src={avatar} alt="" />
      <p data-testid="header-player-name">
        {`Jogador: ${name}`}
      </p>
      <p data-testid="header-score">
        {`${score} Pontos`}
      </p>

    </div>
  );
}

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

function mapProps(state) {
  return { score: state.player.score, name: state.player.name };
}

export default connect(mapProps)(Header);
