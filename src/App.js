import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import Gits from "./Gits";
import Login from "./Login";

import Nav from "./Nav";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user">
            <UserList />
          </Route>
          <Route exact path="/gits">
            <Gits />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
