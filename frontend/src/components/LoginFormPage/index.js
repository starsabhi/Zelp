import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './LoginForm.css';
import navLogoZelp from '../../images/navLogoZelp.png'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
  <div className="loginForm" >
    <form onSubmit={handleSubmit}>
      <img id="logInlogoFront" src={navLogoZelp}></img>
      <div id="LOGinErrorDiv">
      <ul id="LOGinerrorsdForCreateUL">
        {errors.map((error, idx) => <li id="LOGinErrorsCreateBusinessform" key={idx}>{error}</li>)}
      </ul>
      </div>

      <label>
        Username or Email
        </label>
        <input id='loginInputFrontIn'
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          />

      <label>
        Password
        </label>
        <input id="loginInputFrontIn"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      <button id='logInSubmitBtn' type="submit">Log In</button>
      <NavLink id='donthaveLogin' to="/signup">Don't have account</NavLink>
    </form>
  </div>
  );
}

export default LoginFormPage;
