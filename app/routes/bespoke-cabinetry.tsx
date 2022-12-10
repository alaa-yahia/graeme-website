import { HiArrowSmRight } from "react-icons/hi";
import Layout from "~/components/layout";
import BespokeCabinetryTabs from "~/components/bespokeCabinetryTabs/tabs";
import bespokeDesign from "../../public/bespoke_design.png";

export default function Index() {
  return (
    <>
      <Layout>
        <div className="bg-roseWhite flex flex-col md:flex-row my-5 h-auto">
          <div className="md:w-1/2">
            <img
              src={bespokeDesign}
              alt="bespoke design"
              className="w-full h-auto"
            ></img>
          </div>
          <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around pl-1 md:pl-12">
            <div className="flex flex-col">
              <p className="text-roseBrown font-medium text-4xl md:w-1/6 mt-4 ">
                Bespoke Cabinetry
              </p>
              <p className="text-sm mt-3 md:mr-14">
                Designed, manufactured and fitted to suit the needs of your
                space
              </p>
            </div>
            <p className="text-roseBrown font-medium">
              <span>Learn More</span> <HiArrowSmRight className="inline" />
            </p>
          </div>
        </div>
        <BespokeCabinetryTabs />
      </Layout>
    </>
  );
}
