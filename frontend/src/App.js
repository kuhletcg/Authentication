import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DashBoard from "./components/DashBoard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./redux/actions/auth";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" components={Home} />
          <PrivateRoute path="/Dashboard" components={DashBoard} />
          <Route path="/user/register" components={RegisterForm} />
          <Route path="/user/login" components={LoginForm} />
        </switch>
      </Router>
    </div>
  );
}

export default App;
