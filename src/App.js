import React, { useEffect, useState } from "react";
import "../src/App.css"
import SquareComponent from "./components/SquareComponent";

const clearState = ["", "", "", "", "", "", "", "", "", ""];


function App() {
  const [gameState, setGameState] = useState(clearState)
  const [isXChance, setIsXChance] = useState(false)

  const onSquareClick = (index) => {
    let strings = Array.from(gameState);
    if (strings[index])
      return;
    strings[index] = isXChance ? "X" : "0";
    setIsXChance(!isXChance)
    setGameState(strings)
  }

  const clearGame = () => {
    setGameState(clearState)
  }


  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`hurray! ${winner} won the Game !`)
    }
  }, [gameState])




  const checkWinner = () => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="app-header">
        <p className="heading-text">React Tic~Tac~Toe </p>
        <div className="row jc-center ">
          <SquareComponent className="b-bottom-right" onClick={() => onSquareClick(0)} state={gameState[0]} />
          <SquareComponent className="b-bottom-right" onClick={() => onSquareClick(1)} state={gameState[1]} />
          <SquareComponent className="b-bottom" onClick={() => onSquareClick(2)} state={gameState[2]} />
        </div>
        <div className="row jc-center ">
          <SquareComponent className="b-bottom-right" onClick={() => onSquareClick(3)} state={gameState[3]} />
          <SquareComponent className="b-bottom-right" onClick={() => onSquareClick(4)} state={gameState[4]} />
          <SquareComponent className="b-bottom" onClick={() => onSquareClick(5)} state={gameState[5]} />
        </div>
        <div className="row jc-center ">
          <SquareComponent className="b-right" onClick={() => onSquareClick(6)} state={gameState[6]} />
          <SquareComponent className="b-right" onClick={() => onSquareClick(7)} state={gameState[7]} />
          <SquareComponent onClick={() => onSquareClick(8)} state={gameState[8]} />
        </div>
        <button className="clear-button" onClick={clearGame} >Clear Game</button>
        <p className="fc-aqua fw-600">-_-_-_-_-_-  Shrikant kallshetty  -_-_-_-_-_-</p>

      </div>

    </>


  )

}

export default App;
