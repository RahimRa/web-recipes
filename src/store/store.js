import { configureStore } from '@reduxjs/toolkit'
import user from './slices/userSlice'
import recipes from './slices/recipesSlice'

const rootReducer = {
  user,
  recipes,
}

export const store = configureStore({ reducer: rootReducer })
