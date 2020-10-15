import React from 'react'

const Welcome = (props) => {
  const { login, setLogin } = props

  const handleLogout = () => {
    setLogin('')
  }

  return (
    <div>
      <h1>Welcome {login.title} {login.firstName} {login.lastName} </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Welcome
