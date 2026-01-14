import { useState, useEffect, useRef } from "react";
import "./Sidebar.css";

function Sidebar({ isOpen }) {
  const [active, setActive] = useState("");
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActive("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${isOpen ? "open" : "closed"}`}
    >
      {isOpen && <h3 className="sidebar-title">Records</h3>}

      <ul className="sidebar-menu">
        <li className={active === "saved" ? "active" : ""}>
          <i className="fa-solid fa-bookmark"></i>
          {isOpen && <span>Saved Prescriptions</span>}
        </li>

        <li className={active === "consults" ? "active" : ""}>
          <i className="fa-solid fa-stethoscope"></i>
          {isOpen && <span>Past Consultations</span>}
        </li>
      </ul>

      {isOpen && <h3 className="sidebar-title">Billing</h3>}

      <ul className="sidebar-menu">
        <li className={active === "payments" ? "active" : ""}>
          <i className="fa-solid fa-money-bill"></i>
          {isOpen && <span>Payments</span>}
        </li>

        <li className={active === "invoices" ? "active" : ""}>
          <i className="fa-regular fa-file"></i>
          {isOpen && <span>Invoices</span>}
        </li>
      </ul>

      {isOpen && <h3 className="sidebar-title">Support</h3>}

      <ul className="sidebar-menu">
        <li className={active === "emergency" ? "active" : ""}>
          <i className="fa-solid fa-phone"></i>
          {isOpen && <span>Emergency</span>}
        </li>

        <li className={active === "help" ? "active" : ""}>
          <i className="fa-solid fa-circle-info"></i>
          {isOpen && <span>Help</span>}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
