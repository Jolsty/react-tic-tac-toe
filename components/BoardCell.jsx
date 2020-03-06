import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { parseCell } from 'utils';
import { AppContext } from 'components/AppContext';
import { STATES } from 'src/utils';

function BoardCell({ item: { uuid, cellState }, dispatch }) {
  const {
    turnObj: { turn, setTurn },
  } = useContext(AppContext);

  const handleClick = () => {
    if (cellState === STATES.EMPTY) {
      dispatch({
        type: 'add',
        payload: {
          uuid,
          cellState: !turn ? STATES.X : STATES.O,
        },
      });
      setTurn(!turn);
    } else {
      alert('Invalid move: cell is not empty');
    }
  };

  return (
    <button key={uuid} className="cell" onClick={handleClick}>
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
