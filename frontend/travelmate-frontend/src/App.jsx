import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Trips from "./pages/Trips";
import Expenses from "./pages/Expenses";
import Insurance from "./pages/Insurance";
import Destinations from "./pages/Destinations";

function Layout() {

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Routes>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/trips" element={<Trips />} />

          <Route path="/expenses" element={<Expenses />} />

          <Route path="/insurance" element={<Insurance />} />

          <Route path="/destinations" element={<Destinations />} />

        </Routes>

      </div>

    </div>
  );
}

export default function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<Layout />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  );
}