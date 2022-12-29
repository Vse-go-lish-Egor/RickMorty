import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEpisode = createAsyncThunk(
  'episodes/getEpisode',
  async (id: number) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`,
    );
    const data = response.data.results;
    return data;
  },
);
