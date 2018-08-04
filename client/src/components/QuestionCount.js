import React from 'react';

const QuestionCount = (props) => {
  return (
    <div className="questionCount">
      Question <span>{props.counter + 1}</span> of <span>{props.total}</span>
    </div>
  );
}

// QuestionCount.propTypes = {
//   counter: React.PropTypes.number.isRequired,
//   total: React.PropTypes.number.isRequired
// };

export default QuestionCount;
