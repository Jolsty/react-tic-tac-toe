import React from 'react';
import PropTypes from 'prop-types';
import { parseCell } from 'utils';

function BoardCell({ item: { uuid, cellState }, updateBoard }) {
  return (
    <button key={uuid} className="cell" onClick={() => updateBoard(uuid)}>
      {parseCell(cellState)}
    </button>
  );
}

BoardCell.propTypes = {
  item: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    cellState: PropTypes.string.isRequired,
  }),
  updateBoard: PropTypes.func.isRequired,
};

export default BoardCell;
