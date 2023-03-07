import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketsList: [],
  isLoading: false,
};

export const getRockets = createAsyncThunk('rockets/getRockets', async (name, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      const rocket = state.rocketsList.find((rokt) => rokt.id === payload.id);
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
      })
      .addCase(getRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
