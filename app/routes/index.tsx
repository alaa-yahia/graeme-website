import { Link } from "@remix-run/react";
import { HiArrowSmRight } from "react-icons/hi";
import Header from "~/components/header";
import ScrollToTop from "~/components/scrollToTop";
import Container from "~/components/container";
import bespokeDesign from "../../public/bespoke_design.png";
import productDesign from "../../public/product_design.png";

export default function Index() {
  return (
    <Container>
      <Header />
      <div className="bg-roseWhite flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2">
          <img
            src={bespokeDesign}
            alt="bespoke design"
            className="w-full h-auto"
          ></img>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around px-3 pb-10 md:pb-0">
          <div className="flex flex-col text-roseBrown justify-center items-center">
            <p className="font-medium text-4xl md:text-5xl mt-4 leading-tight">
              Bespoke Cabinetry
            </p>
            <Link
              to="/bespoke-cabinetry"
              className="text-roseBrown font-medium text-xl mt-4 hover:underline cursor-pointer"
            >
              <span>Learn More</span> <HiArrowSmRight className="inline" />
            </Link>
          </div>
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
        <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around pl-3 pb-10 md:pb-0">
          <div className="flex flex-col text-roseBrown justify-center items-center">
            <p className=" font-medium text-4xl md:text-5xl mt-4 leading-tight">
              Product Design
            </p>
            <p className="mt-4 md:mr-14 font-normal text-xl">Coming Soon</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </Container>
  );
}
