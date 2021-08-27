import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome</h2>

      <Link to="/user/register">Sign up</Link>
      <Link to="/user/login">Sign in</Link>
    </div>
  );
};

export default Home;
