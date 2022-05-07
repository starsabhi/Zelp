import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./ProfileButton.css";


function ProfileButton({ user }) {

  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
        <ul id="profile-dropdown">
          <li id="nameOfuser">Hello {user.username}</li>
          {/* <li>{user.email}</li> */}
          <li>
            <button id="LogoutBtn" onClick={logout}>Log Out</button>
          </li>
        </ul>
  );
}

export default ProfileButton;
