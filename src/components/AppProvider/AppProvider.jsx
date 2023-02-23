import React from 'react'
import {Header } from '../Header/Header.jsx'

export const AppProvider = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
