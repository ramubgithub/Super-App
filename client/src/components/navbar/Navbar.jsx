import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        Super App
      </div>

      <nav className="navbar-links">
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/movies">
          Movies
        </Link>

        <Link to="/categories">
          Categories
        </Link>
      </nav>

      <button
        className="logout-btn"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </header>
  );
}

export default Navbar;