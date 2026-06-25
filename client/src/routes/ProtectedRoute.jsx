import {
  Navigate,
  useLocation,
} from "react-router-dom";

function ProtectedRoute({
  children,
}) {
  const location =
    useLocation();

  const token =
    localStorage.getItem(
      "token"
    );

  const user =
    localStorage.getItem(
      "user"
    );

  const isAuthenticated =
    token &&
    user &&
    token !== "undefined" &&
    token !== "null";

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;