import React from 'react'
import Form from './Form2'
import { useForm } from 'react-hook-form'

const FormReactHook = (props) => {
  const { register, handleSubmit, errors } = useForm()

  const notify = (error, fieldName) => {
    let message = ''
    if (error) {
      switch (error.type) {
        case 'required':
          message = `${fieldName} is required`
          break
        case 'pattern':
          message = `${fieldName} is invalid`
          break
        case 'validPassword':
          message = `${fieldName} must be minimum 8 characters including at least one uppercase letter, one number and one special character `
          break
        default:
          message = `${fieldName} is invalid`
      }
    }
    return message
  }

  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      notify={notify}
    />
  )
}

export default FormReactHook
