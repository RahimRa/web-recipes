import React from 'react'
import styles from './GroceryList.module.css'

export const GroceryList = ({ products }) => {

  return (
    <div className={styles.wrapper}>
      {products.map((el) => {
        return (
          <span className={styles.elem} key={el.id}>
            {el.productName + ':' + ' ' + el.quantity}
          </span>
        )
      })}
    </div>
  )
}
