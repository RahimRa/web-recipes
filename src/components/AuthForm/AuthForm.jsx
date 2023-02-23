import React from 'react'
import styles from './AuthForm.module.css'
import { Input } from '../Input/Input.jsx'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup.string().required('Oбязательное поле').email('Невалидный email'),
  pass: yup
    .string()
    .required('Oбязательное поле')
    .min(8, 'Минимум 8 символов')
    .matches('^[a-zA-Z0-9]+$', {
      message: 'Кириллица запрещена',
    }),
})
export const AuthForm = ({ action, actionName, setLoader }) => {
  const formik = useFormik({
    initialValues: {
      email: 'psvyatyj@inbox.ru',
      pass: 'dagaev1233',
    },
    validateOnChange: false,
    validationSchema,
    onSubmit: (values) => {
      action(values.email, values.pass)
      setLoader(true)
    },
  })

  return (
    <div className={styles.auth}>
      <Input
        value={formik.values.email}
        onChange={formik.handleChange}
        name='email'
        type='email'
        placeholder={'Enter your email'}
        error={formik.errors.email}
      />
      <Input
        value={formik.values.pass}
        onChange={formik.handleChange}
        name='pass'
        type='password'
        placeholder={'Enter your password'}
        error={formik.errors.pass}
      />
      <button className={styles.button} onClick={formik.handleSubmit}>
        {actionName}
      </button>
    </div>
  )
}
