import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../trivia.png';

export class TeladeInicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      playerEmail: '',
      playerName: '',
    };
  }

  buttonValidate() {
    const forms = document.getElementById('forms');
    if (forms.checkValidity()) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleSubmit(event) {
    const { playerInformation } = this.props;
    const { playerEmail, playerName } = this.state;
    this.setState({ [event.target.name]: event.target.value });
    playerInformation(playerEmail, playerName);
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  inputForms() {
    return (
      <div>
        <form id="forms" onChange={this.buttonValidate}>
          <label htmlFor="gravatar-email">Email do Gravatar: </label>
          <input
            type="email"
            data-testid="input-gravatar-email"
            name="playerEmail"
            onChange={this.handleSubmit}
            required
          />
          <label htmlFor="player-name">Nome do Jogador: </label>
          <input
            type="text"
            data-testid="input-player-name"
            name="playerName"
            onChange={this.handleSubmit}
            required
          />
          <button
            type="submit"
            disabled={this.state.disabled}
            onClick={() => this.nextPath('/TeladoJogo')}
            data-testid="btn-play"
          >
            Jogar!
          </button>
        </form>
      </div>
    );
  }

  config() {
    return (
      <div>
        <button data-testid="btn-settings">Configurações</button>
        <div data-testid="settings-title" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.inputForms()}
          <p>SUA VEZ</p>
          {this.config()}
        </header>
      </div>
    );
  }
}

TeladeInicio.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  playerInformation: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  playerInformation: (playerEmail, playerName) =>
    dispatch({ type: 'PLAYER_INFORMATION', playerEmail, playerName }),
});

export default connect(null, mapDispatchtoProps)(TeladeInicio);
