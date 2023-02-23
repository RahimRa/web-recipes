import React, { useState } from 'react'
import styles from './AddProducts.module.css'
import incrementImg from '../../img/AddProducts/plus.svg'
import save from '../../img/AddProducts/save.svg'
import decrimentImg from '../../img/AddProducts/minus.svg'
import { GroceryList } from '../GroceryList/GroceryList'
import { Input } from '../Input/Input'
import { nanoid } from 'nanoid'

export const AddProducts = ({
  setProducts,
  products,

}) => {
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleProduct = () => {
    setProducts([...products, { productName, quantity , id: nanoid() }])
    setProductName('')
  }
  const decrement = () => {
    if (quantity > 0) {
      return setQuantity(quantity - 1)
    }
    return quantity
  }
  const increment = () => {
    if (quantity >= 0) {
      return setQuantity(quantity + 1)
    }
    return quantity
  }
  return (
    <>
      <div className={styles.wrapper}>
        <dir className={styles.form}>
          <Input
            label='Products'
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            name='Products'
          />

          <GroceryList products={products} />
        </dir>
        <div className={styles.img_wrap}>
          <img
            src={decrimentImg}
            className={styles.img}
            alt=''
            onClick={decrement}
          />
          <span className={styles.quantity}>{quantity}</span>
          <img
            src={incrementImg}
            className={styles.img}
            alt=''
            onClick={increment}
          />
          <img
            src={save}
            className={styles.img}
            alt=''
            onClick={handleProduct}
          />
        </div>
      </div>
    </>
  )
}
