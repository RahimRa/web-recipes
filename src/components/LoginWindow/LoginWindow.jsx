import React from 'react'
import { Auth } from '../Auth/Auth'
import { useDispatch } from 'react-redux'
import { setUser, setError } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export const LoginWindow = (props) => {
  const dispatch = useDispatch()
  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            isAuth: true,
          })
        )
      })
      .catch((err) => dispatch(setError('Wrong password or email')))
  }

  if (!props.isShow) return null

  const data = {
    name: 'Login',
    hint: ' register',
    text: 'register',
    action: handleLogin,
    actionName: 'login',
    hideWindow: props.hideLogin,
  }

  return <Auth data={data} />
}
