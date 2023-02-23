import { React, useState, useEffect } from 'react'
import styles from './Recipes.module.css'

export const Recipes = ({ dishName, description, products, img }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <img className={styles.img} src={img} />
        <div className={styles.data}>
          <span>{dishName}</span>
          <span>{description}</span>
          <span>{products}</span>
        </div>
      </div>
    </div>
  )
}
