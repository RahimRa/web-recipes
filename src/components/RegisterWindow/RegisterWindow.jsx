import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import { Auth } from '../Auth/Auth'


export const RegisterWindow = (props) => {
  const dispatch = useDispatch()
  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      })
      .catch((error) => {
        data.err = error.massage
        alert(error.code)
      })
  }
  if (!props.isShow) return null
  const data = {
    name: 'Register',
    hint: ' login',
    text: 'Sing in',
    action: handleRegister,
    actionName: 'register',
    hideWindow: props.hideRegister,
    err: '',
  }


  return <Auth data={data} />
}
