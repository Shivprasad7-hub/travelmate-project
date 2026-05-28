import { useNavigate, Link } from "react-router-dom";

// import logo from "../assets/logo.png";
import logo from "../assets/logo-small.png";

export default function Login(){

  const navigate = useNavigate();

  const handleLogin = () => {

    localStorage.setItem("token","travelmate");
    localStorage.setItem("username","Shiv");

    navigate("/dashboard");
  };

  return(

    <div className="auth-page">

      <div className="auth-card">

        <img
          src={logo}
          alt="TravelMate"
          className="auth-logo"
        />

        <h1>Welcome Back</h1>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}