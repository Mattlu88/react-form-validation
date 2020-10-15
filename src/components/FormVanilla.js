import React, { useState } from 'react'
import Form from './Form'
import Welcome from './Welcome'

const FormVanilla = (props) => {
  const { initData } = props
  const [user, setUser] = useState(initData)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [login, setLogin] = useState('')

  const titleValidation = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`
    }
  }

  const firstNameValidation = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`
    }
  }

  const lastNameValidation = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`
    }
  }

  const emailValidation = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`
    }

    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!re.test(value)) {
      return `${fieldName} is invalid`
    }
  }

  const passwordValidation = (fieldName, value) => {
    const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
    if (!re.test(value)) {
      return `${fieldName} must be minimum 8 characters including at least one uppercase letter, one number and one special character `
    }
  }

  const validate = {
    title: title => titleValidation('Title', title),
    firstName: name => firstNameValidation('First Name', name),
    lastName: name => lastNameValidation('Last Name', name),
    email: email => emailValidation('Email', email),
    password: password => passwordValidation('Password', password)
  }
  const handleOnChange = event => {
    const { name, value } = event.target
    const newUser = { ...user, [name]: value }
    setUser(newUser)
    setTouched({ [name]: true })
  }

  const handleOnBlur = event => {
    const { name, value } = event.target
    if (!touched[name]) {
      return
    }
    const error = validate[name](value)
    setErrors({ ...errors, [name]: error })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let newErrors = {}
    Object.keys(user).forEach(key => {
      const error = validate[key](user[key])
      if (error) {
        newErrors = { ...newErrors, [key]: error }
      }
    })
    if (Object.keys(newErrors).length === 0) {
      setLogin(user)
      setUser(initData)
      return
    }
    setErrors(newErrors)
  }

  return (
    <div>
      {login &&
        <Welcome
          login={login}
          setLogin={setLogin}
        />}
      {!login &&
        <Form
          user={user}
          handleOnChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          handleSubmit={handleSubmit}
          errors={errors}
        />}
    </div>
  )
}

export default FormVanilla
