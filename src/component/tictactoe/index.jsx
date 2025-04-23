import "./style.css";
import { useState, useEffect } from "react";
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}{" "}
    </button>
  );
}

function Tictactoe() {
  const player = {
    playerA: "X",
    playerB: "O",
  };

  const [currentpPlayer, setCurrentPlayer] = useState(player.playerA);

  const [winner, setWinner] = useState(null);

  const [isBoardFull, setIsBoardFull] = useState(false);
  const [squareList, setSquareList] = useState(Array(9).fill(""));

  function restartGame() {
    setWinner(null);
    setIsBoardFull(false);
    setSquareList(Array(9).fill(""));
    setCurrentPlayer(player.playerB);
  }
  function checkWinner(square) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        console.log(square[a], "Is the winner");
        setWinner(square[a]);
        // setSquareList(Array(9).fill(""));
        return square[a];
      }
    }

    return null;
  }
  function handleClick(currentSquare) {
    let cpySquares = [...squareList];

    if (cpySquares[currentSquare]) {
      console.log("Current is full");
      return;
    }
    if (currentpPlayer === player.playerA) {
      cpySquares[currentSquare] = player.playerA;
      setCurrentPlayer(player.playerB);
    } else if (currentpPlayer === player.playerB) {
      cpySquares[currentSquare] = player.playerB;
      setCurrentPlayer(player.playerA);
    }
    setSquareList(cpySquares);

    checkWinner(cpySquares);

    if (cpySquares.every((square) => square !== "")) {
      setIsBoardFull(true);
    }
  }
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squareList[0]} onClick={() => handleClick(0)} />
        <Square value={squareList[1]} onClick={() => handleClick(1)} />
        <Square value={squareList[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="row">
        <Square value={squareList[3]} onClick={() => handleClick(3)} />
        <Square value={squareList[4]} onClick={() => handleClick(4)} />
        <Square value={squareList[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="row">
        <Square value={squareList[6]} onClick={() => handleClick(6)} />
        <Square value={squareList[7]} onClick={() => handleClick(7)} />
        <Square value={squareList[8]} onClick={() => handleClick(8)} />
      </div>

      <div>
        {winner !== null ? (
          <h3>{winner} is the winner</h3>
        ) : (
          <div>
            <h3>Next player is {currentpPlayer}</h3>
          </div>
        )}
      </div>
      <div>
        {isBoardFull || winner !== null ? (
          <button onClick={restartGame}>Restart</button>
        ) : null}
      </div>
    </div>
  );
}

export default Tictactoe;
