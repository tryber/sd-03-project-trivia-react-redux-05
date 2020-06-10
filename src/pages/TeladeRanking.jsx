import React from 'react';
import { Redirect } from 'react-router';

const localStorageRanking = JSON.parse(localStorage.getItem('ranking'));

// thanks
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
const dynamicSort = (objKey) => {
  let sortOrder = 1;
  let property = objKey;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    let result = 0;
    if (a[property] > b[property]) {
      result = -1;
    } else if (a[property] < b[property]) {
      result = 1;
    } else {
      result = 0;
    }
    return result * sortOrder;
  };
};

class TeladeRanking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goHome: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      goHome: true,
    });
  }

  render() {
    const { goHome } = this.state;
    const sortedRanking = localStorageRanking.sort(dynamicSort('score'));
    return (
      <div>
        {goHome && <Redirect to="/" />}
        <div><h2>Ranking</h2></div>
        <div>
          <button
            data-testid="btn-go-home" onClick={() => this.handleClick()}
          >Início
          </button>
        </div>
        <div>
          {sortedRanking.map((e, index) => <p key={e.name}>
            <img src={e.picture} alt={`${e.name}`} />
            <span data-testid={`player-name-${index}`}>{e.name}</span>
            <span data-testid={`player-score-${index}`}>{e.score}</span>
          </p>)
          }
        </div>
      </div>
    );
  }
}

export default TeladeRanking;
