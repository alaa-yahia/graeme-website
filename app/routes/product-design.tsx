import Header from "~/components/header";
import ScrollToTop from "~/components/scrollToTop";
import productDesign from "../../public/product_design.png";

export default function Design() {
  return (
    <div className="h-[calc(100vh-10rem)] pt-16 px-20">
      <Header />
      <div className="bg-roseWhite flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2">
          <img
            src={productDesign}
            alt="product design"
            className="w-full h-auto"
          ></img>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around pl-3 md:pl-12 pb-10 md:pb-0">
          <div className="flex flex-col text-roseBrown justify-center items-center">
            <p className=" font-medium text-4xl md:text-6xl mt-4 leading-tight">
              Product Design
            </p>
            <p className="mt-4 md:mr-14 font-normal text-xl">Coming Soon</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
