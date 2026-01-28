import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="top-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>

        <div className="logo">
          <Link to="/">HealthCare+</Link>
        </div>
      </div>

      {/* CENTER */}
      <div className="search-engine">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
        />
        <i className="fa-solid fa-magnifying-glass" />
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <Link to="/bmi" className="nav-link">
          BMI Calculator
        </Link>

        <i className="fa-regular fa-bell" />

        <div className="dropdown" ref={dropdownRef}>
          <i
            className="fa-solid fa-circle-user"
            onClick={() => setOpen(prev => !prev)}
          />
          {open && (
            <div className="dropdown-menu">
              <p>My Profile</p>
              <p>Settings</p>
              <p>Help</p>
              <hr />
              <p className="logout">Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
