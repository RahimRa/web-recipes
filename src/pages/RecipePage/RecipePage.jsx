import React, { useEffect, useState } from 'react'
import styles from './RecipePage.module.css'
import { Header } from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Recipe } from '../../components/Recipe/Recipe'

export const RecipePage = () => {
  const data = useSelector((state) => state.recipes)

  const { id } = useParams()
  const newData = data.find((data) => data.id === id)
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    if (data.length) {
      setLoader(false)
    }
  }, [data])

  return (
    <div className={styles.wrapper}>
      <Header />
      {loader ? (
        <div className={styles.loader_wrap}>
          <span className={styles.loader}></span>
        </div>
      ) : (
        <Recipe newData={newData} />
      )}
    </div>
  )
}
