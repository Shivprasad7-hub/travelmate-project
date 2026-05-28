import { useNavigate, Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Register(){

  const navigate = useNavigate();

  const handleRegister = () => {

    navigate("/");
  };

  return(

    <div className="auth-page">

      <div className="auth-card">

        <img
          src={logo}
          alt="TravelMate"
          className="auth-logo"
        />

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleRegister}>
          Create Account
        </button>

        <p>

          Already have account?

          <Link to="/">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}