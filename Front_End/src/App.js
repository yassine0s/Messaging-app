import Card from "./Background/Card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./comp/Login";
import Register from "./comp/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Card></Card>
          <Login></Login>
        </Route>
        <Route path="/a">
          <Card></Card>
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
