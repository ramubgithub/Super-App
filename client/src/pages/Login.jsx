import LoginForm from "../components/auth/LoginForm";

import "./Login.css";

function Login() {
  return (
    <section className="login-page">

      <div className="login-left">

        <h1>
          Welcome Back
        </h1>

        <p>
          Continue your
          journey with
          Super App
        </p>

      </div>

      <div className="login-right">

        <LoginForm />

      </div>

    </section>
  );
}

export default Login;