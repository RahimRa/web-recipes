import React from 'react'
import styles from './RecipesList.module.css'
import { GroceryList } from '../GroceryList/GroceryList'

export const RecipesList = ({ newRecipes }) => {
  console.log(newRecipes)
  return (
    <div className={styles.wrapper}>
      {newRecipes.map((el) => {
        return (
          <div className={styles.el}>
            <img src={el.data.image} className={styles.img} />
            <div className={styles.card_data}>
              <h1 className={styles.name}>{el.data.dishName}</h1>
              <GroceryList products={el.data.products} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
