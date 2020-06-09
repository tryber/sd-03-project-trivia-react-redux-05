import React from 'react';
import { Redirect } from 'react-router';

const ranking = [
  {
    name: 'Marco Barbosa',
    score: 10,
    picture: 'https://www.gravatar.com/avatar/d73ba0d37c5e78648383a8084a7fc6e8',
  },
  {
    name: 'Mateus Moreira',
    score: 35,
    picture: 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3',
  },
  {
    name: 'Gabriel Lucas',
    score: 92,
    picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  },
];

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
      result = - 1;
    } 
    else if (a[property] < b[property]) { 
      result = 1; 
    } else { 
      result = 0;
    }
    return result * sortOrder;
  };
};

class Ranking extends React.Component {
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
    const sortedRanking = ranking.sort(dynamicSort('score'));
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

export default Ranking;
