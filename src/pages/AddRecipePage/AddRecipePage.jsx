import { addDoc, collection } from 'firebase/firestore'
import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddPhoto } from '../../components/AddPhoto/AddPhoto'
import { AddProducts } from '../../components/AddProducts/AddProducts'
import { Button } from '../../components/Button/Button.jsx'
import { Dropdown } from '../../components/Dropdown/Dropdown'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { db } from '../../firebase.js'
import styles from './AddRecipePage.module.css'

const сreateCollection = async (
  dishName,
  userData,
  image,
  dishType,
  products,
  description,
  setErrorMassege
) => {
  try {
    await addDoc(collection(db, 'recipes'), {
      user: userData,
      dishName: dishName,
      image: image,
      type: dishType,
      products: products,
      description: description,
    })
  } catch (err) {
    setErrorMassege(err.message)
  }
}

export const AddRecipePage = () => {
  const userData = useSelector((state) => state.user)

  const [errorMassage, setErrorMassege] = useState('')
  const [dishType, setDishType] = useState('')
  const [dishName, setDishName] = useState('')
  const [image, setImage] = useState('')
  const [products, setProducts] = useState([])
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    const fields = [dishType, dishName, image, products, description]
    if (fields.some((e) => e.length === 0)) {
      setErrorMassege('Fill in all the fields')
      return
    }
    сreateCollection(
      dishName,
      userData,
      image,
      dishType,
      products,
      description,
      setErrorMassege
    )
    setImage('')
    setDishName('')
    setDishType('')
    setProducts([])
    setDescription('')
    setErrorMassege('')
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.box}>
        <div className={styles.add_recipe}>
          <div className={styles.inner_box}>
            <div className={styles.headline}>
              <Input
                label='Dish name'
                onChange={(e) => setDishName(e.target.value)}
                value={dishName}
                name='dishName'
              />

              <Dropdown setDishType={setDishType} dishType={dishType} />
            </div>
            <AddPhoto image={image} setImage={setImage} />
          </div>
          <div className={styles.description_wrap}>
            <AddProducts setProducts={setProducts} products={products} />
            <div className={styles.description}>
              <label htmlFor='description'>Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                name='description'
                id='description'
                value={description}
              ></textarea>
              <Button
                onClick={handleSubmit}
                text='Save'
                classname={styles.button}
              />
            </div>
          </div>
          <div className={styles.err}>
            {!!errorMassage && (
              <span className={styles.errorMassage}>{errorMassage}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
