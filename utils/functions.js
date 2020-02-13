import React from 'react';
import uuid from 'uuid/v4';
import { STATES } from '.';

export const createBoard = () => {
  let board = [];
  for (let i = 0; i < 9; i += 1) {
    board.push({ uuid: uuid(), cellState: STATES.EMPTY });
  }

  return board;
};

export const parseCell = (cell) => {
  switch (cell) {
    case STATES.EMPTY:
      return <span className="cell-empty"> </span>;
    case STATES.X:
      return <span className="cell-x">X</span>;
    case STATES.O:
      return <span className="cell-o">O</span>;
    default:
      return <span className="error">Wrong input</span>;
  }
};
