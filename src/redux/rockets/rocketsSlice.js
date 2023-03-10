import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// SpaceX Rockets API link
const url = 'https://api.spacexdata.com/v4/rockets';

// Initial state for the store
const initialState = {
  rocketsList: [],
  isLoading: false,
};

// Exportable method to fetch data from the SpaceX API
export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const resp = await axios(url);
  return resp.data;
});

// Rocket slice with reducers & actions
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rocketsList.find((rokt) => rokt.id === action.payload);
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketsList = action.payload;
        state.rocketsList.forEach((rokt) => {
          rokt.reserved = false;
        });
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Exports
export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
