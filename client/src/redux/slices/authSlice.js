import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
} from "../../api/authApi";

export const register =
  createAsyncThunk(
    "auth/register",
    async (userData) => {
      const data =
        await registerUser(userData);

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      return data;
    }
  );

export const login =
  createAsyncThunk(
    "auth/login",
    async (userData) => {
      const data =
        await loginUser(userData);

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      return data;
    }
  );

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user:
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      ) || null,

    loading: false,

    error: null,
  },

  reducers: {
    logout: (state) => {
      localStorage.clear();

      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(
        login.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        login.fulfilled,
        (
          state,
          action
        ) => {
          state.loading = false;

          state.user =
            action.payload.user;
        }
      )

      .addCase(
        login.rejected,
        (
          state,
          action
        ) => {
          state.loading = false;

          state.error =
            action.error.message;
        }
      );
  },
});

export const {
  logout,
} = authSlice.actions;

export default authSlice.reducer;