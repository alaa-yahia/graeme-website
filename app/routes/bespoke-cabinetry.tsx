import { HiArrowSmRight } from "react-icons/hi";
import Header from "~/components/header";
import BespokeCabinetryTabs from "~/components/bespokeCabinetryTabs/tabs";
import bespokeDesign from "../../public/bespoke_design.png";

export default function Index() {
  return (
    <>
      <div className="h-[calc(100vh-10rem)] bg-roseWhite pt-16 px-20">
        <Header />
        <div className="flex flex-col md:flex-row md:justify-between py-14">
          <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around pl-1">
            <div className="flex flex-col">
              <p className="text-roseBrown font-medium text-6xl md:w-1/6 mt-4 leading-tight">
                Bespoke Cabinetry
              </p>
              <p className="mt-3 md:mr-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="md:w-1/3 md:h-1/3">
            <img
              src={bespokeDesign}
              alt="bespoke design"
              className="w-full h-auto"
            ></img>
          </div>
        </div>
      </div>
      <BespokeCabinetryTabs />
    </>
  );
}
