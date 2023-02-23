import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const recipesSlise = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, action) {
      return action.payload
    },

  },
})

export const { setRecipes } = recipesSlise.actions
export default recipesSlise.reducer
