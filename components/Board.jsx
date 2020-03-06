import React, { useState, useEffect, useReducer } from 'react';
import BoardCell from 'components/BoardCell';
import { createBoard, STATES } from 'utils';
import { boardReducer } from 'reducers';

function Board() {
  const [state, dispatch] = useReducer(boardReducer, createBoard());
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(0); // 0: nobody, 1: player 1, 2: player 2

  const clearBoard = () => {
    // setBoardState(createBoard());
    dispatch({
      type: 'reset',
      payload: {
        createBoard,
      },
    });
    setTurn(0);
    setWinner(0);
    return;
  };

  useEffect(() => {
    // every time the board updates, check if someone won
    // keked
  }, [state]);

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
        {state.map(({ uuid, cellState }) => (
          <BoardCell key={uuid} item={{ uuid, cellState }} dispatch={dispatch} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Board;
