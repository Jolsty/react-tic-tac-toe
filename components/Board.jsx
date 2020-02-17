import React, { useState, useEffect } from 'react';
import BoardCell from 'components/BoardCell';
import { createBoard, STATES } from 'utils';

function Board() {
  const [boardState, setBoardState] = useState(createBoard());
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(0); // 0: nobody, 1: player 1, 2: player 2

  const updateBoard = (uuid) => {
    setBoardState((prevState) => {
      let clonedState = [...prevState];
      clonedState.filter((cell, i) => {
        if (cell.uuid === uuid) {
          const currentCell = clonedState[i].cellState;
          if (currentCell === STATES.EMPTY) {
            clonedState[i].cellState = turn ? STATES.O : STATES.X;
            setTurn(!turn);
          } else alert('Invalid move');
        }
      });

      return clonedState;
    });
  };

  const clearBoard = () => {
    setBoardState(createBoard());
    setTurn(0);
    setWinner(0);
    return;
  };

  useEffect(() => {
    // every time the board updates, check if someone won
  }, boardState);

  return (
    <React.Fragment>
      <h3>
        {winner === 0
          ? `Player ${turn + 1}: ${turn ? STATES.O : STATES.X}`
          : `Player ${winner} won!`}
      </h3>
      <button className="clear-btn" type="button" onClick={clearBoard}>
        Clear
      </button>
      <div className="game-board">
        {boardState &&
          boardState.length > 0 &&
          boardState.map(({ uuid, cellState }) => (
            <BoardCell
              key={uuid}
              item={{ uuid, cellState }}
              updateBoard={updateBoard}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default Board;
