import React from 'react'
import styles from './Recipe.module.css'

export const Recipe = ({ newData }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.recipe}>
        <div className={styles.inner_box}>
          <div className={styles.headline}>
            <span className={styles.name}>{newData.data.dishName}</span>
            <span>{newData.data.type}</span>
            <div className={styles.products_list}>
              {newData.data.products.map((el) => (
                <div key={el.id}> {el.productName + ': ' + el.quantity}</div>
              ))}
            </div>
          </div>
          <img src={newData.data.image} className={styles.img} />
        </div>
        <div className={styles.description_wrap}>
          <div className={styles.description}>{newData.data.description}</div>
        </div>
      </div>
    </div>
  )
}
