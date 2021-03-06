import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation/index';
import Home from './components/Home/index';
import Businessdetails from './components/Businessdetails/index';
import NewBusiness from './components/newBusiness/index';
import EditBusiness from './components/EditBusiness/index';

import SplashPage from './components/SplashPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/new" exact>
            <NewBusiness />
          </Route>
          <Route path="/:businessId/edit" exact>
            <EditBusiness />
          </Route>
          <Route path="/business/:businessId" exact>
            <Businessdetails />
          </Route>

          <Route path="/" exact>
            <SplashPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
