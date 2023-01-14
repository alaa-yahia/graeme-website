import { NavLink } from "@remix-run/react";
import { useState } from "react";

export default function Header() {
  const [displayed, setDisplayed] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-between text-lg">
      <NavLink to="/" className="flex items-center uppercase">
        <span>studio gilbert</span>
      </NavLink>
      <button
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden "
        onClick={() => setDisplayed(!displayed)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        className={`${
          displayed ? "block" : "hidden"
        } w-full md:block md:w-auto`}
      >
        <ul className="flex flex-col mx-0 pt-2 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li className="hover:underline underline-offset-8 decoration-roseBrown decoration-2">
            <NavLink
              to="/bespoke-cabinetry"
              className="block py-2 pl-3 pr-4 rounded md:p-0"
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "underline underline-offset-8 decoration-roseBrown decoration-2"
                      : undefined
                  }
                >
                  Bespoke Cabinetry
                </span>
              )}
            </NavLink>
          </li>
          <li className="hover:underline underline-offset-8 decoration-roseBrown decoration-2">
            <NavLink
              to="/product-design"
              className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0"
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "underline underline-offset-8 decoration-roseBrown decoration-2"
                      : undefined
                  }
                >
                  Product Design
                </span>
              )}
            </NavLink>
          </li>

          <li className="hover:underline underline-offset-8 decoration-roseBrown decoration-2">
            <NavLink
              to="/contact"
              className="block py-2 pl-3 pr-4 rounded  md:border-0 md:p-0"
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "underline underline-offset-8 decoration-roseBrown decoration-2"
                      : undefined
                  }
                >
                  Contact
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
