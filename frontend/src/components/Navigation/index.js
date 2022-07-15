import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { login } from '../../store/session';
import navLogoZelp from '../../images/navLogoZelp.png';
import ZelpLogo from '../../images/NavBar/Zelp1.svg';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const credential = 'abhi@user.io';
  const password = 'password';
  const dispatch = useDispatch();
  const demoLogin = () => {
    setErrors([]);
    return dispatch(login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div className="rightButton">
        <div className="navLoginbtnDiv">
          <button className="logInBTNnav" onClick={demoLogin}>
            Demo
          </button>
        </div>
        <div className="navLoginbtnDiv">
          <NavLink to="/login">
            <button className="logInBTNnav">Log In</button>
          </NavLink>
        </div>
        <div className="navSignUp">
          <NavLink className="navSignUp" to="/signup">
            <button className="signUpBTN">Sign Up</button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <nav className="navBar">
      <div className="navLogoDiv">
        <NavLink exact to="/">
          <img className="logoZelpnavBar" src={ZelpLogo} alt={ZelpLogo}></img>
          {/* <img className='navbarLogo' src={logo} /> */}
        </NavLink>
      </div>
      <div className="newBusniessClassnav">
        <NavLink exact to="/new">
          <button className="createNewBunisessclas">Create New Business</button>
        </NavLink>
      </div>

      <div className="rightSideinfo">{isLoaded && sessionLinks}</div>
    </nav>
  );
}

export default Navigation;
