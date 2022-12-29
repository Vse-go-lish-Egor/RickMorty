import {createSlice} from '@reduxjs/toolkit';
import {fetchEpisode} from './thunk';
interface InitialStateType {
}
export const episodeSlice = createSlice({
  name: 'episode',
  initialState: undefined,
  extraReducers(builder) {
    builder.addCase(fetchEpisode.fulfilled, (state, action) => {});
  },
  reducers: {},
});
