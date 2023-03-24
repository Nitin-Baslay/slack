import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const loginHandler = (event) => {
    setLogin(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const submitHanlder = (event) => {
    event.preventDefault();
    let obj = {
      email: login,
      password: password,
      returnSecureToken: true,
    };
    console.log(obj);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgvkl1584Nfv_-zw-NEslYDgoWMikTPKs",
        obj
      )
      .then((response) => {
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
    localStorage.setItem("name", name);
  };

  return (
    <div>
      <form className="master" onSubmit={submitHanlder}>
        <div className="inp">
          <input
            type={"text"}
            className="inp1"
            placeholder="Enter Your Name"
            onChange={nameHandler}
            required
          />
          <div>
            <input
              type={"email"}
              className="inp1"
              placeholder="Enter Your e-mail ID"
              onChange={loginHandler}
            />
          </div>
          <input
            type={"password"}
            className="inp2"
            placeholder="Enter Your Password"
            onChange={passwordHandler}
          />
        </div>
        <button className="login" type={"submit"}>
          Log In
        </button>
        <Link to="/signup">
          <h5 className="texted">Not Registered? Sign Up</h5>
        </Link>
      </form>
    </div>
  );
};
export default Login;
