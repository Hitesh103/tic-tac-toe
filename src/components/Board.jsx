import React, { useState } from 'react'
import Square from './Square'

export default function Board() {

  const [state, setState] = useState(Array(9));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    const newState = [...state];
    newState[index] = isXTurn ? "X" : "O";
    setState(newState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className='board-container'>
      <div className='board-row'>
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className='board-row'>
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className='board-row'>
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
  );
}