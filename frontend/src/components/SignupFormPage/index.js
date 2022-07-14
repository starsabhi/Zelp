import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupFormPage.css';
import navLogoZelp from '../../images/navLogoZelp.png';
import LoginIMG from '../../images/LoginPG/Login.png';
import Footer from '../Footer';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      'Confirm Password field must be the same as the Password field',
    ]);
  };

  return (
    <>
      <div className="loginForm">
        <div className="firstDIVformANDIMG">
          <div className="mainFormDiv">
            <div className="mainFormDivInner">
              <form onSubmit={handleSubmit}>
                <div className="h2LOginFROMDIV">
                  <h2 className="logintoZelp">Log in to Zelp</h2>
                </div>
                <div className="SIGNfirstspandiv">
                  <span className="NewtoZELPSPAN">Already on Zelp!</span>
                  <span>
                    <NavLink className="donthaveLogin2" to="/login">
                      <span className="singupFirstSPan">Log in</span>
                    </NavLink>
                  </span>
                </div>
                <div className="LOGinErrorDiv">
                  <ul className="LOGinerrorsdForCreateUL">
                    {errors.map((error, idx) => (
                      <li id="LOGinErrorsCreateBusinessform" key={idx}>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <input
                    className="loginInputFrontIn"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    className="loginInputFrontIn"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    className="loginInputFrontIn"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    className="loginInputFrontIn"
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button className="logInSubmitBtn" type="submit">
                  Log In
                </button>
                <div className="SIGNfirstspandiv2">
                  <span className="NewtoZELPSPAN2">Already on Zelp!</span>
                  <span>
                    <NavLink className="donthaveLogin2" to="/login">
                      <span className="singupFirstSPan2">Log in</span>
                    </NavLink>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="rightDIVforLonIN">
            <div className="imgDIvLogingandSignUP">
              <img
                className="imgLOGandSignUP"
                src={LoginIMG}
                alt={LoginIMG}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="footerDIVFORLOGINANDSIGN">
        <Footer />
      </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   <img id="logInlogoFront" src={navLogoZelp}></img>
    //   <div id="signUpinErrorDiv">
    //   <ul id="signUperrorsdForCreateUL">
    //     {errors.map((error, idx) => <li id="signUpErrorsCreateBusinessform" key={idx}>{error}</li>)}
    //   </ul>
    //   </div>
    //   <label>
    //     Email
    //     </label>
    //     <input id='signUpInputFrontIn'
    //       type="text"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />

    //   <label>
    //     Username
    //     </label>
    //     <input  id='signUpInputFrontIn'
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />

    //   <label>
    //     Password
    //     </label>
    //     <input  id='signUpInputFrontIn'
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />

    //   <label>
    //     Confirm Password
    //     </label>
    //     <input  id='signUpInputFrontIn'
    //       type="password"
    //       value={confirmPassword}
    //       onChange={(e) => setConfirmPassword(e.target.value)}
    //       required
    //     />
    //   <button id="singUpInSubmitBtn" type="submit">Sign Up</button>
    //   <NavLink id="donthaveLogin" to="/login">Already have account</NavLink>
    // </form>
  );
}

export default SignupFormPage;
