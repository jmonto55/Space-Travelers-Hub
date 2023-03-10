import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionsSlice';

const rootReducer = combineReducers({ rockets: rocketsReducer, missions: missionReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
