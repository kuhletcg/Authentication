import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DashBoard from "./components/DashBoard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./redux/actions/auth";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./component/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/Dashboard" component={DashBoard} />
          <Route path="/user/register" component={RegisterForm} />
          <Route path="/user/login" component={LoginForm} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
