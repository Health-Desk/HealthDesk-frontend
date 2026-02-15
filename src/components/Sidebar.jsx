import { useState, useEffect, useRef } from "react";

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

  const baseItem =
    "flex items-center gap-3 px-3 py-2 mb-2 rounded-md cursor-pointer text-sm transition-all duration-200";

  const activeItem = "bg-[#276578] text-white";
  const inactiveItem = "text-gray-700 hover:bg-[#daedfb]";

  return (
    <aside
      ref={sidebarRef}
      className={`
        ${isOpen ? "w-[240px]" : "w-[70px]"}
        bg-[#f5f7fa]
        px-4 py-5
        border-r border-gray-300
        h-[calc(100vh-60px)]
        transition-all duration-300
      `}
    >
      {/* Records */}
      {isOpen && (
        <h3 className="text-xs font-semibold text-gray-500 uppercase mt-5 mb-3">
          Records
        </h3>
      )}

      <ul>
        <li
          onClick={() => setActive("saved")}
          className={`${baseItem} ${
            active === "saved" ? activeItem : inactiveItem
          } ${!isOpen ? "justify-center" : ""}`}
        >
          <i className="fa-solid fa-bookmark text-lg min-w-[24px] text-[#183e49]"></i>
          {isOpen && <span className="whitespace-nowrap">Saved Prescriptions</span>}
        </li>

        <li
          onClick={() => setActive("consults")}
          className={`${baseItem} ${
            active === "consults" ? activeItem : inactiveItem
          } ${!isOpen ? "justify-center" : ""}`}
        >
          <i className="fa-solid fa-stethoscope text-lg min-w-[24px] text-[#183e49]"></i>
          {isOpen && <span className="whitespace-nowrap">Past Consultations</span>}
        </li>
      </ul>

      {/* Billing */}
      {isOpen && (
        <h3 className="text-xs font-semibold text-gray-500 uppercase mt-6 mb-3">
          Billing
        </h3>
      )}

      <ul>
        <li
          onClick={() => setActive("payments")}
          className={`${baseItem} ${
            active === "payments" ? activeItem : inactiveItem
          } ${!isOpen ? "justify-center" : ""}`}
        >
          <i className="fa-solid fa-money-bill text-lg min-w-[24px] text-[#183e49]"></i>
          {isOpen && <span className="whitespace-nowrap">Payments</span>}
        </li>

        <li
          onClick={() => setActive("invoices")}
          className={`${baseItem} ${
            active === "invoices" ? activeItem : inactiveItem
          } ${!isOpen ? "justify-center" : ""}`}
        >
          <i className="fa-regular fa-file text-lg min-w-[24px] text-[#183e49]"></i>
          {isOpen && <span className="whitespace-nowrap">Invoices</span>}
        </li>
      </ul>

      {/* Support */}
      {isOpen && (
        <h3 className="text-xs font-semibold text-gray-500 uppercase mt-6 mb-3">
          Support
        </h3>
      )}

      <ul>
        <li
          onClick={() => setActive("emergency")}
          className={`${baseItem} ${
            active === "emergency" ? activeItem : inactiveItem
          } ${!isOpen ? "justify-center" : ""}`}
        >
          <i className="fa-solid fa-phone text-lg min-w-[24px] text-[#183e49]"></i>
          {isOpen && <span className="whitespace-nowrap">Emergency</span>}
        </li>

        <li
          onClick={() => setActive("help")}
          className={`${baseItem} ${
            active === "help" ? activeItem : inactiveItem
          } ${!isOpen ? "justify-center" : ""}`}
        >
          <i className="fa-solid fa-circle-info text-lg min-w-[24px] text-[#183e49]"></i>
          {isOpen && <span className="whitespace-nowrap">Help</span>}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
