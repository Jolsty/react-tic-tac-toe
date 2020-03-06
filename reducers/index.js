export function boardReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'add': {
      return state.map(({ uuid, cellState }) =>
        uuid === payload.uuid
          ? { uuid, cellState: payload.cellState }
          : { uuid, cellState }
      );
    }
    case 'reset': {
      return payload.createBoard();
    }
  }
}
