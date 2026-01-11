import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex gap-6">
      <Link
        to="/"
        className="hover:text-yellow-300 font-medium"
      >
        Home
      </Link>

      <Link
        to="/auth"
        className="hover:text-yellow-300 font-medium"
      >
        Auth
      </Link>

      <Link
        to="/dashboard"
        className="hover:text-yellow-300 font-medium"
      >
        Dashboard
      </Link>
    </nav>
  );
}

export default Navbar;
