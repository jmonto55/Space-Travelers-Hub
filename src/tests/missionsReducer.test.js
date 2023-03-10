import missionsReducer, { joinMission } from '../redux/missions/missionsSlice';

describe('Test suite for joinMission reducer', () => {
  const initialState = {
    missions: [
      { mission_id: 1, joined: false },
      { mission_id: 2, joined: true },
    ],
    isLoading: false,
  };
  it('should update the selected mission when joining or leaving', () => {
    const action = joinMission(1);
    const newState = missionsReducer(initialState, action);

    expect(newState.missions[0].joined).toBe(true);
    expect(newState.missions[1].joined).toBe(true);

    const action2 = joinMission(2);
    const newState2 = missionsReducer(newState, action2);

    expect(newState2.missions[0].joined).toBe(true);
    expect(newState2.missions[1].joined).toBe(false);
  });
});
