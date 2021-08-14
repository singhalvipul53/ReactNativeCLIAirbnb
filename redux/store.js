import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import testReducer from './features/testSlice';

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
