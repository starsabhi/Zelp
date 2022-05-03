import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../images/logo.png"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='navBar loginnsignup'>
        <NavLink className="navLogin" to="/login">Log In</NavLink>
        <NavLink className="navSignUp" to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='navBar'>
    <ul className='navbarli'>
      <li className='navbarli'>
        <NavLink exact to="/"><img className='navbarLogo' src={logo} /></NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
