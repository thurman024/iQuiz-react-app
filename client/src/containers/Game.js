import React, { Component } from 'react'
import Question from '../components/Question'
import QuestionCount from '../components/QuestionCount'

class Game extends Component {


  render () {
    return (
      <div className="game">
        <h1>This is the game Component</h1>
        < QuestionCount counter='1' total='10' />
        < Question content="what is your favorite color?" />
      </div>
    )
  }
}
export default Game
