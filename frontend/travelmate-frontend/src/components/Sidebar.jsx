import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-small.png";

export default function Sidebar() {

  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (

    <div className="sidebar">

      <Link to="/dashboard" className="logo-link">

        <img
          src={logo}
          alt="logo"
          className="sidebar-logo"
        />

        <h2>TravelMate</h2>

      </Link>

      <div className="user-box">

        <h3>Welcome 👋</h3>

        <p>{username}</p>
        <div className="avatar">

          {username.charAt(0)}

        </div>

      </div>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/trips">Trips</Link>

      <Link to="/destinations">Destinations</Link>

      <Link to="/expenses">Expenses</Link>

      <Link to="/insurance">Insurance</Link>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}