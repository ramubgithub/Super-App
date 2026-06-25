import {
  useForm,
} from "react-hook-form";

import {
  useDispatch,
} from "react-redux";

import {
  register,
} from "../../redux/slices/authSlice";

import "./RegisterForm.css";

function RegisterForm() {

  const dispatch =
    useDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  const onSubmit = (
    data
  ) => {
    dispatch(
      register(data)
    );
  };

  return (
    <form
      className="register-form"
      onSubmit={handleSubmit(
        onSubmit
      )}
    >

      <input
        placeholder="Name"
        {...formRegister(
          "name",
          {
            required:
              "Name required",
          }
        )}
      />

      {errors.name && (
        <p>
          {
            errors.name
              .message
          }
        </p>
      )}

      <input
        placeholder="Username"
        {...formRegister(
          "username",
          {
            required:
              "Username required",
          }
        )}
      />

      <input
        placeholder="Email"
        {...formRegister(
          "email",
          {
            required:
              "Email required",
          }
        )}
      />

      <input
        placeholder="Mobile"
        {...formRegister(
          "mobile",
          {
            required:
              "Mobile required",
          }
        )}
      />

      <input
        type="password"
        placeholder="Password"
        {...formRegister(
          "password",
          {
            required:
              "Password required",
          }
        )}
      />

      <button
        type="submit"
      >
        Register
      </button>

    </form>
  );
}

export default RegisterForm;