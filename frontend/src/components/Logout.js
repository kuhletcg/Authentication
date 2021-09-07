import React from "react";
import { Button } from "reactstrap";
import { logout } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggingOutUser = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <Button onClick={() => loggingOutUser()}>Logout</Button>
    </div>
  );
};

export default Logout;
