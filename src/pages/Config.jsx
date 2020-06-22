import React, { Component } from 'react';
import { getCategory } from '../services/triviaAPI';

const difficultSelect = () => (
  <div>
    <label htmlFor="difficult">Difficult</label>
    <select id="difficult">
      <option value="" disabled selected>
        Difficult Select
      </option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
);

const typeSelect = () => (
  <div>
    <label htmlFor="type">Type</label>
      <select className="browser-default" id="type">
        <option value="" disabled selected>
          Type Select
        </option>
        <option value="multiple">Multiple Choice</option>
        <option value="trueOrFalse">True or False</option>
      </select>
  </div>
);

export class Config extends Component {
  render() {
    return <div></div>;
  }
}

export default Config;
