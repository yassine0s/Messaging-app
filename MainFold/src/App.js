import Card from "./Background/Card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./comp/Login";
import Register from "./comp/Register";
import MainScreen from "./comp/MessangerCom/MainScreen";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Card></Card>
          <Login></Login>
        </Route>
        <Route path="/register">
          <Card></Card>
          <Register></Register>
        </Route>
        <Route path="/Main_Page">
        <MainScreen /> 
         
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
