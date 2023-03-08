import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const { data } = await response;
  return data;
});

const initialState = {
  missions: [],
  error: false,
  isLoading: false,
  message: null,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      isLoading: true,
      missions: action.payload,
    }))
    .addCase(getMissions.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
});
