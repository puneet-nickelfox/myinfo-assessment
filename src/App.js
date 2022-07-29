import Login from "./pages/auth/login";
import MyInfo from "./pages/myInfo/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

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
