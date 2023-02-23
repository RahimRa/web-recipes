import classnames from 'classnames'
import React from 'react'
import styles from './Button.module.css'

export const Button = ({text, onClick,classname}) => {
  return (
    <button className={classname} onClick={onClick}>
      {text}
    </button>
  )
}
