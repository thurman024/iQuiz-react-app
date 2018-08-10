import React, { Component } from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOptions';
import fetch from 'isomorphic-fetch';

const apiCall = 'https://opentdb.com/api.php?amount=10&type=multiple';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      questionId: 0,
      questionData: [],
      answersCount: 0,
      result: ''
    };
  }

  componentWillMount() {
    fetch(apiCall)
      .then(res => res.json())
      .then(response =>
        this.setState({
          questionData: response.results
        })
      );
  }

  render() {
    if (this.state.questionData.length > 0) {
    }

    function renderQuestionCount(props) {
      return (
        <QuestionCount
          counter={props.counter}
          total={props.questionData.length}
        />
      );
    }

    function renderQuestion(props) {
      const currentId = props.questionId;
      const currentQuestion = props.questionData[currentId];

      return <Question content={currentQuestion.question} />;
    }

    function apiResponded(data) {
      if (data.questionData.length === 0) {
        return <span>Loading Questions...</span>;
      } else {
        return renderQuestion(data);
      }
    }

    function answersLoaded(props) {
      if (props.questionData.length === 0) {
        return <li>Loading Answers...</li>;
      } else {
        return renderAnswerOptions(props);
      }
    }

    function renderAnswerOptions(props) {
      // let counter = 0;
      let i = props.questionId;
      const answerArray = [
        props.questionData[i].correct_answer,
        ...props.questionData[i].incorrect_answers
      ];
      const answers = shuffleArray(answerArray);
      return (
        <AnswerOption
          // key={i}
          answerContent={answers}
          // answerType={key.type}
          // answer={props.answer}
          // questionId={props.questionId}
          // onAnswerSelected={props.onAnswerSelected}
        />
      );
    }

    function shuffleArray(array) {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    return (
      <div className="game">
        <h1>This is the game Component</h1>
        {renderQuestionCount(this.state)}
        {apiResponded(this.state)}

        <ul className="answerOptions">{answersLoaded(this.state)}</ul>
      </div>
    );
  }
}
export default Game;
