import { React, useState } from 'react'
import styles from './Dropdown.module.css'
import classNames from 'classnames'

export const Dropdown = ({ setDishType, dishType }) => {
  const [open, setOpen] = useState(false)
  const hendleOpen = () => {
    setOpen(!open)
  }
  const handleMenuOne = () => {
    setDishType('Breakfast')
    setOpen(false)
  }
  const handleMenuTwo = () => {
    setDishType('Dinner')
    setOpen(false)
  }
  const handleMenuThree = () => {
    setDishType('Evening meal')
    setOpen(false)
  }

  return (
    <div className={classNames(styles.dropdown, { [styles.isOpen]: open })}>
      <button className={styles.btn} onClick={hendleOpen}>
        {dishType ? `${dishType}` : 'Dish type'}
      </button>
      {open ? (
        <ul className={styles.menu}>
          <li className={styles.item}>
            <button onClick={handleMenuOne}>Breakfast</button>
          </li>
          <li className={styles.item}>
            <button onClick={handleMenuTwo}>Dinner</button>
          </li>
          <li className={styles.item}>
            <button onClick={handleMenuThree}>Evening meal</button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}
