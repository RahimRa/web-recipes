import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { AddRecipePage } from './pages/AddRecipePage/AddRecipePage.jsx'
import { RecipePage } from './pages/RecipePage/RecipePage'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { React, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setRecipes } from './store/slices/recipesSlice'
import { db } from './firebase'

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    const q = query(collection(db, 'recipes'))
    return onSnapshot(q, (querySnapshot) => {
      dispatch(
        setRecipes(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
    })
  }, [])

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/recipe/:id' element={<RecipePage />} />
      <Route path='/addrecipe' element={<AddRecipePage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  )
}

export default App
