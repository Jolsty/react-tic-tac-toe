import React, { useEffect, useReducer, useContext } from 'react';
import BoardCell from 'components/BoardCell';
import { AppContext } from 'components/AppContext';
import { createBoard, STATES } from 'utils';
import { boardReducer } from 'reducers';

function Board() {
  const [state, dispatch] = useReducer(boardReducer, createBoard());
  const {
    turnObj: { turn, setTurn },
    winnerObj: { winner, setWinner },
  } = useContext(AppContext);

  const resetBoard = () => {
    dispatch({
      type: 'reset',
      payload: {
        createBoard,
      },
    });

    setTurn(0);
    setWinner(0);
  };

  useEffect(() => {
    // every time the board updates, check if someone won
    // DAVIDE STRUNZ
    // setWinner(X);
  }, [state]);

  return (
    <React.Fragment>
      <h3>
        {winner === 0
          ? `Player ${turn + 1}'s turn: ${turn ? STATES.O : STATES.X}`
          : `Player ${winner} won!`}
      </h3>
      <button className="clear-btn" type="button" onClick={resetBoard}>
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
