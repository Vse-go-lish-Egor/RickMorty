import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (page: number) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    const data = response.data.results;
    return data;
  },
);
