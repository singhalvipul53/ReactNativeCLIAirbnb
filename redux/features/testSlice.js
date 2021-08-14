import {createSlice} from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    selectedName: 'Vipul',
  },
  reducers: {
    selectName: (state, action) => {
      state.selectedName = action.payload;
    },
  },
});

export const {selectName} = testSlice.actions;
export const namevalue = state => state.test.selectedName;

export default testSlice.reducer;
