import react from "react";
import Login from "./pages/auth/login";
import MyInfo from "./pages/myInfo/index";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
        <Redirect exact from="/" to="/info" />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/info">
            <MyInfo />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
