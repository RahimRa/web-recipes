import  React from 'react'
import styles from './Navigate.module.css'
import { Link } from 'react-router-dom'


export const Navigate = () => {

  return (
    <div className={styles.wrapper}>
      <Link to='/' className={styles.link}>
        Home
      </Link>
      <Link to='/addrecipe' className={styles.link}>
        Add recipe
      </Link>
      <Link to='/search' className={styles.link}>
        Search
      </Link>

    </div>
  )
}
