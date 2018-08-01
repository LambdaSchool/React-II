import React from 'react';

const Login = props => {
  return (
    <div className="login">
      <form action="">
        <h2>User Login Page</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button onClick={props.handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login;