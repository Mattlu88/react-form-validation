import React from 'react'

const Form = () => {
  return (
    <form>
      <div className='field-container'>
        <div className='label'>
          <label for='title'>Title:</label>
        </div>
        <div className='field'>
          <select id='title' name='title'>
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
      <div className='field-container'>
        <div className='label'>
          <label for='first-name'>First Name:</label>
        </div>
        <div className='field'>
          <input type='text' id='first-name' name='fist-name' />
        </div>
      </div>
      <div className='field-container'>
        <div className='label'>
          <label for='last-name'>Last Name:</label>
        </div>
        <div className='field'>
          <input type='text' id='last-name' name='last-name' />
        </div>
      </div>
      <div className='field-container'>
        <div className='label'>
          <label for='email'>Email:</label>
        </div>
        <div className='field'>
          <input type='email' id='email' name='email' />
        </div>
      </div>
      <div className='field-container'>
        <div className='label'>
          <label for='password'>Password:</label>
        </div>
        <div className='field'>
          <input type='password' id='password' name='password' />
        </div>
      </div>
      <div className='field-container'>
        <div className='label' />
        <div className='field submit'>
          <input type='submit' value='Sign In' />
        </div>
      </div>
    </form>
  )
}

export default Form
