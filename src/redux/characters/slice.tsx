import {createSlice} from '@reduxjs/toolkit';
import {CharacterPreview} from '../../model/character';
import {fetchCharacters} from './thunk';

interface InitialStateType {
  results: CharacterPreview[];
  page: number;
  error?: string;
  loadingStatus: 'pending' | 'fulfilled' | 'loading';
}

const initialState: InitialStateType = {
  results: [],
  page: 1,
  loadingStatus: 'pending',
};
export const characterSlice = createSlice({
  name: 'characters',
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
  },
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.results = state.results.concat(action.payload);
      state.loadingStatus = 'fulfilled';
    });
    builder.addCase(fetchCharacters.pending, state => {
      state.loadingStatus = 'pending';
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {incrementPage} = characterSlice.actions;
export default characterSlice.reducer;
