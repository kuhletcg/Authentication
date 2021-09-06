import React from "react";
import Logout from "./Logout";

const NavBar = ({ username }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>{username}</li>
        </ul>
        <Logout />
      </nav>
    </div>
  );
};

export default NavBar;
