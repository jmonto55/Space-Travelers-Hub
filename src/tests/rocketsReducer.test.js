import rocketsReducer, { reserveRocket } from '../redux/rockets/rocketsSlice';

describe('Test suite for reserveRocket reducer', () => {
  const initialState = {
    rocketsList: [
      { id: 'rocket-1', name: 'Falcon 1', reserved: false },
      { id: 'rocket-2', name: 'Falcon 9', reserved: false },
    ],
    isLoading: false,
  };

  it('should reserve a rocket', () => {
    const action = reserveRocket('rocket-1');
    const newState = rocketsReducer(initialState, action);

    expect(newState.rocketsList[0].reserved).toEqual(true);
  });

  it('should unreserve a rocket', () => {
    const action = reserveRocket('rocket-2');
    const newState = rocketsReducer(initialState, action);

    expect(newState.rocketsList[1].reserved).toEqual(true);

    const undoAction = reserveRocket('rocket-2');
    const undoState = rocketsReducer(newState, undoAction);

    expect(undoState.rocketsList[1].reserved).toEqual(false);
  });
});
