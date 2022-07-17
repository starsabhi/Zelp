import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
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
