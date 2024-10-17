// game
// board
// squre

import { useState } from "react";




// This Is MY Squre
function Squre({value,onSqureClick}) {



  return (
    <button onClick={onSqureClick} className="m-1 text-blue h-[60px] w-[60px] rounded-lg text-[28px] font-bold shadow-custom">
      {value}
    </button>
  );
}





// This Is MY BOARD
export default function Board() {

  const [squre, setSqure] = useState(Array(9).fill(null))


  let handleClick = (i)=> {

    let nextSqure = squre.slice()
    nextSqure[i] = "X"
    setSqure(nextSqure)

  }

  return (
    <>
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
