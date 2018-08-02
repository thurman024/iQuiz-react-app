import React, { Component } from 'react'
import Question from '../components/Question'
import QuestionCount from '../components/QuestionCount'
import AnswerOption from '../components/AnswerOptions'

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
    function renderAnswerOptions(key) {
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
        < QuestionCount counter='1' total='10' />
        < Question content={this.state.questionData[questionId].question} />
        <ul className="answerOptions">

        </ul>
      </div>
    )
  }
}
export default Game
