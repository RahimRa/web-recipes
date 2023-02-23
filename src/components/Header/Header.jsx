import { React, useState, useEffect } from 'react'
import { Button } from '../Button/Button'
import styles from './Header.module.css'
import { Logo } from '../Logo/Logo.jsx'
import { Navigate } from '../Navigate/Navigate.jsx'
import { RegisterWindow } from '../RegisterWindow/RegisterWindow'
import { LoginWindow } from '../LoginWindow/LoginWindow'
import { useSelector } from 'react-redux'
import exitImg from '../../img/header/exitImg.svg'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'

export const Header = ({ childer }) => {
  const dispatch = useDispatch()
  const authData = useSelector((state) => state.user)
  

  const [showReghWindow, setShowReghWindow] = useState(false)
  const [showLoginWindow, setShowLoginWindow] = useState(false)
  const showRegister = () => setShowReghWindow(true)
  const hideRegister = () => setShowReghWindow(false)
  const showLogin = () => setShowLoginWindow(true)
  const hideLogin = () => setShowLoginWindow(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <Logo />
        <div className={styles.auth}>
          {authData.isAuth ? (
            <>
              <h2 className={styles.name}>{authData.email}</h2>
              <img
                src={exitImg}
                className={styles.img}
                onClick={() => dispatch(removeUser())}
              />
            </>
          ) : (
            <>
              <Button
                onClick={showLogin}
                classname={styles.button}
                text='Log in'
              />
              <Button
                onClick={showRegister}
                classname={styles.button}
                text='Register'
              />
            </>
          )}
        </div>
      </div>
      <LoginWindow isShow={showLoginWindow} hideLogin={hideLogin} />
      <RegisterWindow isShow={showReghWindow} hideRegister={hideRegister} />
      <div className={styles.nav}>
        <Navigate />
      </div>
      {childer}
    </div>
  )
}
