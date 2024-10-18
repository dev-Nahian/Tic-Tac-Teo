/* eslint-disable react/prop-types */
// game
// board
// squre

import { useState } from "react";

// This Is MY Squre
function Squre({ value, onSqureClick }) {
  return (
    <button
      onClick={onSqureClick}
      className="m-1 text-blue h-[80px] w-[80px] rounded-lg text-[32px] font-bold shadow-custom"
    >
      {value}
    </button>
  );
}

// This Is MY BOARD
function Board({ isXnext, squares, onPlay }) {
  let Winner = calculateWinner(squares);

  let status;

  if (Winner) {
    status = `Winner is ${Winner}`;
  } else {
    status = "Next Plyer -" + (isXnext ? "X" : "O");
  }

  let handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    let nextSqure = squares.slice();
    status;
    if (isXnext) {
      nextSqure[i] = "X";
    } else {
      nextSqure[i] = "O";
    }

    onPlay(nextSqure);
  };

  return (
    <>
      <div className="m-4">
        <h1 className="text-white text-[32px]">{status}</h1>
      </div>
      <div className="flex">
        <Squre value={squares[0]} onSqureClick={() => handleClick(0)} />
        <Squre value={squares[1]} onSqureClick={() => handleClick(1)} />
        <Squre value={squares[2]} onSqureClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Squre value={squares[3]} onSqureClick={() => handleClick(3)} />
        <Squre value={squares[4]} onSqureClick={() => handleClick(4)} />
        <Squre value={squares[5]} onSqureClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Squre value={squares[6]} onSqureClick={() => handleClick(6)} />
        <Squre value={squares[7]} onSqureClick={() => handleClick(7)} />
        <Squre value={squares[8]} onSqureClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Game
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // History starts with a single empty board state
  const [isXnext, setIsXnext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0)




  const currentSqure = history[currentMove]; // Last element is the current board state

  function handlePLay(nextSqure) {
    setIsXnext(!isXnext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqure]
    setHistory(nextHistory); // Add new state to history
    setCurrentMove(nextHistory.length -1)
  }

  function jumpTo(move){
    setCurrentMove(move)
    setIsXnext(move % 2 === 0)
  }

  const moves = history.map((squres, move) => {
    let description;

    if (move > 0) {
      description = `Go To Move #${move}`;
    } else {
      description = `Start The Game`;
    }



    return (
      <li key={move} className="text-[22px] text-white m-1">
        <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex gap-x-14 items-center">
      <div>
        <Board isXnext={isXnext} squares={currentSqure} onPlay={handlePLay} />
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// calculation of winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
