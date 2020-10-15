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

const Form = (props) => {
  const {
    user,
    handleOnChange,
    handleOnBlur,
    handleSubmit,
    errors
  } = props

  const handleClickBack = () => {
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='title'>Title:</label>
        </div>
        <div className='field'>
          <select
            id='title'
            name='title'
            value={user.title}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
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
      {errors.title && <Error error={errors.title} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='first-name'>First Name:</label>
        </div>
        <div className='field'>
          <input
            type='text'
            id='first-name'
            name='firstName'
            value={user.firstName}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
      {errors.firstName && <Error error={errors.firstName} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='last-name'>Last Name:</label>
        </div>
        <div className='field'>
          <input
            type='text'
            id='last-name'
            name='lastName'
            value={user.lastName}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
      {errors.lastName && <Error error={errors.lastName} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='email'>Email:</label>
        </div>
        <div className='field'>
          <input
            type='email'
            id='email'
            name='email'
            value={user.email}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
      {errors.email && <Error error={errors.email} />}
      <div className='field-container'>
        <div className='label'>
          <label htmlFor='password'>Password:</label>
        </div>
        <div className='field'>
          <input
            type='password'
            id='password'
            name='password'
            value={user.password}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        </div>
      </div>
      {errors.password && <Error error={errors.password} />}
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
