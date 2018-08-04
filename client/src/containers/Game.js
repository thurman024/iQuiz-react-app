import React, { Component } from 'react'
import Question from '../components/Question'
import QuestionCount from '../components/QuestionCount'
import AnswerOption from '../components/AnswerOptions'
import fetch from 'isomorphic-fetch';

const apiCall = 'https://opentdb.com/api.php?amount=10&type=multiple'

class Game extends Component {
  constructor () {
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
      .then(response => this.setState({
        questionData: response.results
      }))
  }


  render () {


    function renderQuestionCount(props) {
      return (
        < QuestionCount
        counter={props.counter}
        total={props.questionData.length}
        />
      )
    }

    function renderQuestion(props) {
      const currentId = props.questionId
      const currentQuestion = props.questionData[currentId]

      return (
        < Question
        content={currentQuestion.question}
        />
      )
    }

    function questionLoaded(data) {
      if (data.questionData.length === 0) {
        return <span>Loading Questions</span>
      }
      else {
        return renderQuestion(data)
      }
    }

    function renderAnswerOptions(key) {
      // const answers = 

      return (
        <AnswerOption
          // key={key.content}
          // answerContent={key.content}
          // answerType={key.type}
          // answer={props.answer}
          // questionId={props.questionId}
          // onAnswerSelected={props.onAnswerSelected}
        />
      );
    }


    return (
      <div className="game">
        <h1>This is the game Component</h1>
        {renderQuestionCount(this.state)}
        {questionLoaded(this.state)}

        <ul className="answerOptions">

        </ul>
      </div>
    )
  }
}
export default Game
