import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, login } from "../redux/actions/auth";
import { CLEAR_ERRORS } from "../redux/actionTypes/user";
import { useHistory } from "react-router";

const useForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/Dashboard");
    }
  }, [isAuthenticated]);
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInfo.password) {
      dispatch(registerUser(formInfo));
      dispatch({ type: CLEAR_ERRORS });
    }
  };
  const handleLogIn = (e) => {
    e.preventDefault();

    if (loginForm.email) {
      dispatch(login(loginForm));
      dispatch({ type: CLEAR_ERRORS });
    }
  };
  return {
    handleChange,
    handleSubmit,
    formInfo,
    handleInputs,
    handleLogIn,
    loginForm,
  };
};

export default useForm;
