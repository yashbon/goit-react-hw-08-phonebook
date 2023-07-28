import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
<<<<<<< Updated upstream
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    applyFilter(state, action) {
      state.filter = action.payload;
    },
  },
=======
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        applyFilter(state, action) {
            state.filter = action.payload;
        },
    },
>>>>>>> Stashed changes
});

export const { applyFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
