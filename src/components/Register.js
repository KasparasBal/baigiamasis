import "../styles/Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login_container">
      <form className="login_form">
        <h1 className="login-form-title">Register</h1>
        <label className="login_label">Email</label>
        <input className="login_input" type="email" id="email"></input>
        <label className="login_label">Password</label>
        <input className="login_input" type="text" id="password"></input>
        <label className="login_label">Repeat Password</label>
        <input
          className="login_input"
          type="text"
          id="repeated_password"
        ></input>
        <button className="login_btn">REGISTER</button>
      </form>
      <div className="register_redirect_container">
        <h3>Have an Account?</h3>
        <Link className="register_link_button" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
