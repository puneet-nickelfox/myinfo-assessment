import react from "react";
import Login from "./pages/auth/login";
import MyInfo from "./pages/myInfo/index";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

const App = () => {
  // const classes = useStyles();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <MyInfo />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
