import React from 'react'
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom'

export const RecipeCard = ({ img, dishName, id }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/recipe/${id}`} className={styles.title}>
        {dishName}
      </Link>
      <img src={img} alt='' className={styles.img} />
    </div>
  )
}
