import { Link } from "@remix-run/react";
import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export default function Layout({ children }: PropsType) {
  return (
    <>
      <div className="flex justify-between m-8 text-sm">
        <h1>STUDIO GILBERT</h1>
        <nav className="flex flex-1 justify-end ">
          <ul className="flex space-x-2">
            <li>
              <Link to="#" className="flex items-center">
                <span>Bespoke Cabinetry</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center">
                <span>Product Design</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </>
  );
}
