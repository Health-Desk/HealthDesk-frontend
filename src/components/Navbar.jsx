import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

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
    <nav className="flex justify-between items-center px-5 py-2 bg-[#276578] text-white">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* hamburger menu */}
        {isDashboard && (
          <button
            onClick={toggleSidebar}
            className="mr-3 text-2xl transition-transform duration-300"
          >
            <i
              className={`fa-solid fa-bars transition-transform duration-300 ${
                isSidebarOpen ? "rotate-90" : "rotate-0"
              }`}
            ></i>
          </button>
        )}

        <div className="text-2xl font-bold cursor-pointer">
          <Link to="/">HealthCare+</Link>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-3 flex-1 max-w-[400px] mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full border-none outline-none text-black"
        />
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5 relative">
        <Link to="/bmi" className="hover:underline">
          BMI Calculator
        </Link>

        <i className="fa-regular fa-bell text-xl cursor-pointer hover:scale-110 transition-all duration-200"></i>

        {/* DROPDOWN */}
        <div className="relative" ref={dropdownRef}>
          <i
            className="fa-solid fa-circle-user text-xl cursor-pointer hover:scale-110 transition-all duration-200"
            onClick={() => setOpen((prev) => !prev)}
          />

          {open && (
            <div className="absolute right-0 top-10 w-40 bg-[#276578] rounded-lg shadow-lg p-2 z-50">
              <p className="px-2 py-2 cursor-pointer hover:bg-[#5f85a9] rounded">
                My Profile
              </p>
              <p className="px-2 py-2 cursor-pointer hover:bg-[#5f85a9] rounded">
                Settings
              </p>
              <p className="px-2 py-2 cursor-pointer hover:bg-[#5f85a9] rounded">
                Help
              </p>
              <hr className="my-2 border-gray-300" />
              <p className="px-2 py-2 cursor-pointer text-red-500 font-bold hover:bg-[#5f85a9] rounded">
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
