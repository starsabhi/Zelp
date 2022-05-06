import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/index";
import Home from "./components/Home/index";
import Businessdetails from "./components/Businessdetails/index";
import NewBusiness from "./components/newBusiness/index";
import EditBusiness from "./components/EditBusiness/index"
import ReviewDetail from "./components/ReviewDetail";


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
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new" exact>
            <NewBusiness/>
          </Route>
          <Route path="/:businessId/edit" exact>
            <EditBusiness />
          </Route>
          <Route path="/:businessId">
            <Businessdetails />
          </Route>
          <Route path="/:businessId/:reviewId" >
            <ReviewDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
