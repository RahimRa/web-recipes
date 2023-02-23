import { React, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import searchImg from '../../img/Navigate/search.svg'
import homeImg from '../../img/SearchPage/homeIcon.svg'
import styles from './SearchPage.module.css'
import { RecipesList } from '../../components/RecipesList/RecipesList'
import { Loader } from '../../components/Loader/Loader'

export const SearchPage = () => {
  const recipes = useSelector((state) => state.recipes)
  const [search, setSearch] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [newRecipes, setNewRecipes] = useState([])
  console.log(recipes)

  useEffect(() => {
    const filteredData = recipes.filter((el) => {
      const nameContentСheck = searchData.includes(el.data.dishName)

      if (nameContentСheck) {
        return true
      }
      const productNameCheck = el.data.products.find((product) =>
        searchData.includes(product.productName)
      )

      if (productNameCheck) {
        return true
      }
    })

    if (filteredData.length > 0) {
      setNewRecipes([...filteredData])
      setSearch(false)
    }
  }, [search])
  // console.log(newRecipes)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to='/' className={styles.link}>
          <img src={homeImg} alt='' className={styles.homeImg} />
        </Link>
        <div className={styles.Input_box}>
          <input
            type='text'
            className={styles.Input}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder='Enter the name of the dish or product'
          />
          <img
            src={searchImg}
            alt=''
            className={styles.searchImg}
            onClick={() => setSearch(true)}
          />
        </div>
      </div>
      <div className={styles.box}>
        {newRecipes.length > 0 ? (
          <RecipesList newRecipes={newRecipes} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}
