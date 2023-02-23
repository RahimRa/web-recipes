import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../components/Header/Header'
import { Slider } from '../../components/Slider/Slider'
import styles from './HomePage.module.css'
import { Loader } from '../../components/Loader/Loader'

export const HomePage = () => {
  const recipes = useSelector((state) => state.recipes)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (recipes.length) {
      setLoader(false)
    }
  }, [recipes])

  return (
    <div className={styles.wrapper}>
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.slider_box}>
          <Slider recipes={recipes} title={'Breakfast'} />
          <Slider recipes={recipes} title={'Evening meal'} />
          <Slider recipes={recipes} title={'Dinner'} />
        </div>
      )}
    </div>
  )
}
