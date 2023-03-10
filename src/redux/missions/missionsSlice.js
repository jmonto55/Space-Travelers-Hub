import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const { data } = await response;
  return data;
});

export const joinMission = createAction('missions/joinMission');

const initialState = {
  missions: [],
  error: false,
  isLoading: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getMissions.fulfilled, (state, action) => {
      action.payload.forEach((mission) => {
        mission.joined = false;
      });
      return {
        ...state,
        isLoading: false,
        missions: action.payload,
      };
    })
    .addCase(getMissions.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
    .addCase(joinMission, (state, action) => {
      const missionSel = state.missions.find((mission) => mission.mission_id === action.payload);
      missionSel.joined = !missionSel.joined;
    });
});
