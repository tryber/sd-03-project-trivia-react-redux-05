import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../services/triviaAPI';

const player = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

export class TeladeInicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerEmail: '',
      playerName: '',
    };
    this.inputForms = this.inputForms.bind(this);
    this.sendToSettings = this.sendToSettings.bind(this);
  }


  async handleSubmit(event, path) {
    event.preventDefault();
    const { playerInformation, setToken, history } = this.props;
    const { playerEmail, playerName } = this.state;
    playerInformation(playerEmail, playerName);
    localStorage.setItem('state', JSON.stringify(player));

    const token = await getToken();
    localStorage.setItem('token', token);
    setToken(token);


    history.push(path);
  }

  sendToSettings() {
    const { history } = this.props;
    history.push('/settings');
  }


  inputForms() {
    const { playerName, playerEmail } = this.state;
    return (
      <div>
        <form id="forms" onSubmit={(e) => this.handleSubmit(e, '/teladojogo')}>
          <label htmlFor="gravatar-email">Email do Gravatar: </label>
          {this.renderGravatar()}
          <label htmlFor="player-name">Nome do Jogador: </label>
          <input
            type="text"
            data-testid="input-player-name"
            name="playerName"
            value={this.state.playerName}
            onChange={(e) => this.setState({ playerName: e.target.value })}
            required
          />
          <button
            type="submit"
            disabled={!playerName || !playerEmail}
            data-testid="btn-play"
          >
            Jogar!
          </button>
          <button
            type="submit"
            onClick={this.sendToSettings}
            data-testid="btn-settings"
          >
            Configuração
          </button>
        </form>
      </div>
    );
  }

  renderGravatar() {
    return (
      <input
        type="email"
        data-testid="input-gravatar-email"
        name="playerEmail"
        value={this.state.playerEmail}
        onChange={(e) => this.setState({ playerEmail: e.target.value })}
        required
      />
    );
  }

  render() {
    return (
      <div>

        {this.inputForms()}

      </div>
    );
  }
}

TeladeInicio.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  playerInformation: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  playerInformation: (playerEmail, playerName) => dispatch({ type: 'PLAYER_INFORMATION', playerEmail, playerName }),
  setToken: (token) => dispatch({ type: 'RECEIVE_API_TOKEN', token }),
});

export default connect(null, mapDispatchtoProps)(TeladeInicio);
