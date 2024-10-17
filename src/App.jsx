/* eslint-disable react/prop-types */
// game
// board
// squre

import { useState } from "react";




// This Is MY Squre
function Squre({value,onSqureClick}) {



  return (
    <button onClick={onSqureClick} className="m-1 text-blue h-[80px] w-[80px] rounded-lg text-[32px] font-bold shadow-custom">
      {value}
    </button>
  );
}





// This Is MY BOARD
export default function Board() {

  const [squre, setSqure] = useState(Array(9).fill(null))
  const [isXnext, setIsXnext] = useState(true)


  let Winner = calculateWinner(squre)

  let status;

  if(Winner){
    status = `Winner is ${Winner}`
  }else{
    status = "Next Plyer -" + (isXnext ? "X" : "O" )
  }



  let handleClick = (i)=> {

    if(squre[i] || calculateWinner(squre)){
      return;
    }
    let nextSqure = squre.slice()
    status
    if(isXnext){
      nextSqure[i] = "X"
    }else{
      nextSqure[i] = "O"
    }

    setSqure(nextSqure)
    setIsXnext(!isXnext)

  }

  return (
    <>
    <div className="m-4"><h1 className="text-white text-[52px]">{status}</h1></div>
      <div className="flex">
        <Squre value={squre[0]} onSqureClick={() => handleClick(0)}/>
        <Squre value={squre[1]} onSqureClick={() => handleClick(1)}/>
        <Squre value={squre[2]} onSqureClick={() => handleClick(2)}/>
      </div>

      <div className="flex">
        <Squre value={squre[3]} onSqureClick={() => handleClick(3)}/>
        <Squre value={squre[4]} onSqureClick={() => handleClick(4)}/>
        <Squre value={squre[5]} onSqureClick={() => handleClick(5)}/>
      </div>

      <div className="flex">
        <Squre value={squre[6]} onSqureClick={() => handleClick(6)}/>
        <Squre value={squre[7]} onSqureClick={() => handleClick(7)}/>
        <Squre value={squre[8]} onSqureClick={() => handleClick(8)}/>
      </div>
    </>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}