import React from 'react';
import PropTypes from 'prop-types';
import { parseCell } from 'utils';

function BoardCell({ item: { uuid, cellState }, dispatch }) {
  return (
    <button
      key={uuid}
      className="cell"
      onClick={() =>
        dispatch({
          type: 'add',
          payload: {
            uuid,
            cellState: 'O', // to change after implementation of AppContext
          },
        })
      }
    >
      {parseCell(cellState)}
    </button>
  );
}

BoardCell.propTypes = {
  item: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    cellState: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
};

export default BoardCell;
