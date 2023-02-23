import React from 'react'
import styles from './Input.module.css'
import classNames from 'classnames'

export const Input = ({ name, placeholder, onChange, value, type, error,label }) => {
  return (
    <div className={styles.wrapper}>
      <label
        className={classNames(styles.label, { [styles.labelError]: error })}
        htmlFor={name}
      >
        {label}
      </label>

      <input
        id={name}
        autoComplete='off'
        className={classNames(styles.input, { [styles.inputError]: error })}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  )
}
