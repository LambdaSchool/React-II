import React from 'react';
import './Login.css';

const Login = props => {
  return(
    <form className="login" onSubmit={(e) => this.props.onSubmitLogin(e)}>
      <input type="text" className="login__username" placeholder="Username" value={props.username} onChange={props.onUsernameChange} />
      <input type="password" className="login__password" placeholder="Password" value={props.password} onChange={props.onPasswordChange} />
      <button className="login__button" type="submit">Sign in</button>
    </form>
  );
}

export default Login;