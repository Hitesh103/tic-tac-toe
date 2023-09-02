import React, { useState, useEffect } from 'react';
import Square from './Square';

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (state[index] || winner) {
      return; // Ignore the click if the square is already filled or there's a winner.
    }

    const newState = [...state];
    newState[index] = isXTurn ? 'X' : 'O';
    setState(newState);
    setIsXTurn(!isXTurn);
  };

  useEffect(() => {
    checkWinner();
  }, [state]); // Check for a winner whenever the state changes

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const winner of winnerLogic) {
      const [a, b, c] = winner;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        setWinner(state[a]);
        return;
      }
    }

    // If all squares are filled and there's no winner, it's a draw.
    if (!state.includes(null)) {
      setWinner('Draw');
    }
  };

  const renderStatus = () => {
    if (winner) {
      return winner === 'Draw' ? 'It\'s a draw!' : `${winner} is the winner!`;
    } else {
      return `Next player: ${isXTurn ? 'X' : 'O'}`;
    }
  };

  return (
    <div className='board-container'>
      <div className='status'>{renderStatus()}</div>
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
