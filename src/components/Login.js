import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <form className="login_form">
        <h1 className="login-form-title">Login</h1>
        <label className="login_label">Email</label>
        <input className="login_input" type="email" id="email"></input>
        <label className="login_label">Password</label>
        <input className="login_input" type="text" id="password"></input>
        <button className="login_btn">LOGIN</button>
      </form>
      <div className="register_redirect_container">
        <h3>Not A User?</h3>
        <Link className="register_link_button" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
