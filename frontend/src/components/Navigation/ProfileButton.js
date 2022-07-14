import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="nameDivNAV">
        <span className="nameOfuser">Hello {user.username}</span>
        <button className="LogoutBtn" onClick={logout}>
          Log Out
        </button>
      </div>
    </>
  );
}

export default ProfileButton;
