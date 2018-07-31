import React, { Component } from 'react'
import Question from '../components/Question'

class Game extends Component {


  render () {
    return (
      <div className="game">
        <h1>This is the game Component</h1>
        < Question content="what is your favorite color?" />
      </div>
    )
  }
}
export default Game
