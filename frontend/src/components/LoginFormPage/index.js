import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './LoginForm.css';
import navLogoZelp from '../../images/navLogoZelp.png';
import LoginIMG from '../../images/LoginPG/Login.png';
import Footer from '../Footer';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
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
                  <span className="NewtoZELPSPAN">New to Zelp?</span>
                  <span>
                    <NavLink className="donthaveLogin2" to="/signup">
                      <span className="singupFirstSPan">Sign up</span>
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
                    value={credential}
                    placeholder="Email"
                    onChange={(e) => setCredential(e.target.value)}
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
                <button className="logInSubmitBtn" type="submit">
                  Log In
                </button>
                <div className="SIGNfirstspandiv2">
                  <span className="NewtoZELPSPAN2">New to Zelp?</span>
                  <span>
                    <NavLink className="donthaveLogin2" to="/signup">
                      <span className="singupFirstSPan2">Sign up</span>
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
  );
}

export default LoginFormPage;
