import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionContainer({
  category, question,
}) {
  return (
    <div>
      <p data-testid="question-category">{category}</p>
      <p data-testid="question-text">{question}</p>

    </div>
  );
}

QuestionContainer.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
