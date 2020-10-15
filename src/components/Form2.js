import React from 'react'
import './Form.css'
import { navigate } from '@reach/router'

const Error = (props) => {
  const { error } = props
  return (
    <div className='field-container error-container'>
      <div className='label' />
      <div className='field'>
        {error}
      </div>
    </div>
  )
}
const Form = props => {
  const {
    register,
    handleSubmit,
    errors,
    notify,
    setLogin
  } = props

  const handleClickBack = () => {
    navigate('/')
  }

  const onSubmit = data => setLogin(data)

  const rule = {
    title: {
      required: true
    },
    firstName: {
      required: true
    },
    lastName: {
      required: true
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {
      required: true,
      validate: {
        validPassword: value => /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(value)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='title'>Title:</label>
        </div>
        <div className='field'>
          <select
            id='title'
            name='title'
            ref={register(rule.title)}
          >
            <option value='' />
            <option value='Dr'>Dr</option>
            <option value='Mr'>Mr</option>
            <option value='Mrs'>Mrs</option>
            <option value='Ms'>Ms</option>
            <option value='Miss'>Miss</option>
            <option value='Mx'>Mx</option>
          </select>
        </div>
      </div>
      {errors.title && <Error error={notify(errors.title, 'Title')} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='first-name'>First Name:</label>
        </div>
        <div className='field'>
          <input
            type='text'
            id='first-name'
            name='firstName'
            ref={register(rule.firstName)}
          />
        </div>
      </div>
      {errors.firstName && <Error error={notify(errors.firstName, 'First Name')} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='last-name'>Last Name:</label>
        </div>
        <div className='field'>
          <input
            type='text'
            id='last-name'
            name='lastName'
            ref={register(rule.lastName)}
          />
        </div>
      </div>
      {errors.lastName && <Error error={notify(errors.lastName, 'Last Name')} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='email'>Email:</label>
        </div>
        <div className='field'>
          <input
            type='email'
            id='email'
            name='email'
            ref={register(rule.email)}
          />
        </div>
      </div>
      {errors.email && <Error error={notify(errors.email, 'Email')} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='password'>Password:</label>
        </div>
        <div className='field'>
          <input
            type='password'
            id='password'
            name='password'
            ref={register(rule.password)}
          />
        </div>
      </div>
      {errors.password && <Error error={notify(errors.password, 'Password')} />}
      <div className='field-container'>
        <div className='label' />
        <div className='field btn'>
          <input type='submit' value='Sign In' />
          <input type='button' onClick={handleClickBack} value='Back' />
        </div>
      </div>
    </form>
  )
}

export default Form
