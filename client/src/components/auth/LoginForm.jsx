import {
  useForm,
} from "react-hook-form";

import {
  useDispatch,
} from "react-redux";

import {
  useNavigate,
} from "react-router-dom";

import {
  login,
} from "../../redux/slices/authSlice";

import "./LoginForm.css";

function LoginForm() {

  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit =
    async (data) => {

      const result =
        await dispatch(
          login(data)
        );

      if (
        result.meta
          .requestStatus ===
        "fulfilled"
      ) {
        navigate(
          "/categories"
        );
      }
    };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit(
        onSubmit
      )}
    >

      <input
        type="email"
        placeholder="Email"
        {...register(
          "email",
          {
            required:
              true,
          }
        )}
      />

      {errors.email && (
        <p>
          Email required
        </p>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register(
          "password",
          {
            required:
              true,
          }
        )}
      />

      {errors.password && (
        <p>
          Password required
        </p>
      )}

      <button
        type="submit"
      >
        Login
      </button>

    </form>
  );
}

export default LoginForm;