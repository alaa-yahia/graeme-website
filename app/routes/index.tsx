import { HiArrowSmRight } from "react-icons/hi";
import Header from "~/components/header";
import bespokeDesign from "../../public/bespoke_design.png";
import productDesign from "../../public/product_design.png";

export default function Index() {
  return (
    <div className="h-[calc(100vh-10rem)] pt-16 px-20">
      <Header />
      <div className="bg-roseWhite flex flex-col md:flex-row mt-14">
        <div className="md:w-1/2">
          <img
            src={bespokeDesign}
            alt="bespoke design"
            className="w-full h-auto"
          ></img>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around px-3 md:pl-12 pb-10 md:pb-0">
          <div className="flex flex-col">
            <p className="text-roseBrown font-medium text-4xl md:text-6xl md:w-1/6 mt-4 leading-tight">
              Bespoke Cabinetry
            </p>
            <p className="mt-3 md:mr-14">
              Designed, manufactured and fitted to suit the needs of your space
            </p>
          </div>
          <p className="text-roseBrown font-medium">
            <span>Learn More</span> <HiArrowSmRight className="inline" />
          </p>
        </div>
      </div>

      <div className="bg-roseWhite flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2">
          <img
            src={productDesign}
            alt="product design"
            className="w-full h-auto"
          ></img>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around pl-3 md:pl-12 pb-10 md:pb-0">
          <div className="flex flex-col">
            <p className="text-roseBrown font-medium text-4xl md:text-6xl md:w-1/6 mt-4 leading-tight">
              Product Design
            </p>
            <p className="mt-3 md:mr-14">
              Limited edition modern design products, made to order
            </p>
          </div>
          <p className="text-roseBrown font-medium">
            <span>Learn More</span> <HiArrowSmRight className="inline" />
          </p>
        </div>
      </div>
    </div>
  );
}
