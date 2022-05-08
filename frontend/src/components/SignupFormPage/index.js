import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupFormPage.css"
import navLogoZelp from '../../images/navLogoZelp.png'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };


  return (
    <form onSubmit={handleSubmit}>
      <img id="logInlogoFront" src={navLogoZelp}></img>
      <div id="signUpinErrorDiv">
      <ul id="signUperrorsdForCreateUL">
        {errors.map((error, idx) => <li id="signUpErrorsCreateBusinessform" key={idx}>{error}</li>)}
      </ul>
      </div>
      <label>
        Email
        </label>
        <input id='signUpInputFrontIn'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

      <label>
        Username
        </label>
        <input  id='signUpInputFrontIn'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

      <label>
        Password
        </label>
        <input  id='signUpInputFrontIn'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

      <label>
        Confirm Password
        </label>
        <input  id='signUpInputFrontIn'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      <button id="singUpInSubmitBtn" type="submit">Sign Up</button>
      <NavLink id="donthaveLogin" to="/login">Already have account</NavLink>
    </form>
  );
}

export default SignupFormPage;
