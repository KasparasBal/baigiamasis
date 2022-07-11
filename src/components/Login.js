import "../styles/Login.css";

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
    </div>
  );
};

export default Login;
