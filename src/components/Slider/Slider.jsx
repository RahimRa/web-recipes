import { RecipeCard } from '../RecipeCard/RecipeCard'
import React, { useRef, useState, useEffect } from 'react'
import styles from './Slider.module.css'
import { motion } from 'framer-motion'

export const Slider = ({ recipes, title }) => {

  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className={styles.slider_wrap}>
      <h1>{title}</h1>
      <motion.div
        ref={carousel}
        className={styles.carousel}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className={styles.inner_carousel}
        >
          { recipes
            .filter((recipe) => recipe.data.type === title)
            .map((recipe) => (
              <RecipeCard
                id={recipe.id}
                key={recipe.id}
                dishName={recipe.data.dishName}
                img={recipe.data.image}
              />
            )) }
        </motion.div>
      </motion.div>
    </div>
  )
}
