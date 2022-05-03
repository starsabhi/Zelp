import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../images/logo.png"
import {login} from "../../store/session";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const credential = "demo@user.io";
  const password = "password";
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
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='navBar loginnsignup'>
        <button onClick={demoLogin}>Demo</button>
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
        <NavLink className="navLogin" to="/new">Create New</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
