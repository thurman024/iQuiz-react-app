import React, { Component } from 'react'
import Question from '../components/Question'
import QuestionCount from '../components/QuestionCount'

class Game extends Component {
  constructor (props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       nintendo: 0,
       microsoft: 0,
       sony: 0
     },
     result: ''
    };
  }

  render () {
    function renderAnswerOptions(key) {
      return (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
        />
      );
    }
    return (
      <div className="game">
        <h1>This is the game Component</h1>
        < QuestionCount counter='1' total='10' />
        < Question content="what is your favorite color?" />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    )
  }
}
export default Game
