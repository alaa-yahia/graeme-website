import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import { useState } from "react";

type PropsType = {
  children: ReactNode;
};

export default function Layout({ children }: PropsType) {
  const [displayed, setDisplayed] = useState(false);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <Link to="#" className="flex items-center">
          <span>STUDIO GILBERT</span>
        </Link>
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
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            displayed ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col mx-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                to="/bespoke-cabinetry"
                className="block py-2 pl-3 pr-4 rounded md:p-0 "
              >
                Bespoke Cabinetry
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0"
              >
                Product Design
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 rounded  md:border-0 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {children}
    </>
  );
}
