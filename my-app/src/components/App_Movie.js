import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import styles from "../Movie.module.css";

function App_Movie() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App_Movie;
