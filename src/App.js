import React from 'react'
import './App.css'
import FormVanilla from './components/FormVanilla'
import ReactHookForm from './components/FormReactHook'
import { Router, Link } from '@reach/router'

const Home = () => {
  return (
    <ul>
      <li>
        <Link
          className='link'
          to='/form-validation'
        >
          Form validation without third library
        </Link>
      </li>
      <li>
        <Link
          className='link'
          to='/react-hook-form-validation'
        >
          Form validation using React Hook Form
        </Link>
      </li>
    </ul>
  )
}

function App () {
  const initData = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Form validation
        </p>
      </header>
      <Router>
        <Home path='/' />
        <FormVanilla
          path='/form-validation'
          initData={initData}
        />
        <ReactHookForm
          path='/react-hook-form-validation'
          initData={initData}
        />
      </Router>

    </div>
  )
}

export default App
