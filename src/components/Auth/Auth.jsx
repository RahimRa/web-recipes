import { React, useState, useEffect } from 'react'
import styles from './Auth.module.css'
import exitImg from '../../img/exit.svg'
import { AuthForm } from '../AuthForm/AuthForm'
import { useSelector } from 'react-redux'
import { Loader } from '../Loader/Loader'

export const Auth = ({ data }) => {
  const [loader, setLoader] = useState(false)
  const serverError = useSelector((state) => state.user.serverError)
  const isAuth = useSelector((state) => state.user.isAuth)
  const hideWindow = data.hideWindow
  useEffect(() => {
    if (isAuth) {
      hideWindow()
    }
  }, [isAuth])

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.img}>
          <img
            className={styles.exitImg}
            src={exitImg}
            onClick={data.hideWindow}
          />
        </div>
        {!loader ? (
          <div className={styles.form}>
            <h2>{data.name}</h2>
            <div className={styles.serverError}>{serverError}</div>
            <AuthForm
              action={data.action}
              actionName={data.actionName}
              setLoader={setLoader}
            />
            <p className={styles.hint}>Or{data.hint}</p>
          </div>
        ) : (
         <Loader/>
        )}
      </div>
    </div>
  )
}
