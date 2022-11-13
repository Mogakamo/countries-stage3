import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    capital: null,
    region: null,
    language: null,
    population: null,
  };

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    change: (state, action) => {
      const { capital, region, language, population } = action.payload;
      state.capital = capital;
      state.region = region;
      state.language = language;
      state.population = population;
    },
    cleanAll: (state) => {
      state.capital = null;
      state.region = null;
      state.language = null;
      state.population = null;
    },
  },
});

export const { change, cleanAll } = filterSlice.actions;

export default filterSlice.reducer
