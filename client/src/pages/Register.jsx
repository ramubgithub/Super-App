import RegisterForm from "../components/auth/RegisterForm";

import "./Register.css";

function Register() {
  return (
    <section className="register-page">

      <div className="register-left">

        <h1>
          Super App
        </h1>

        <p>
          Discover new things
          every day
        </p>

      </div>

      <div className="register-right">

        <RegisterForm />

      </div>

    </section>
  );
}

export default Register;