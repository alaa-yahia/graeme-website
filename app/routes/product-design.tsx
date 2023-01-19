import Container from "~/components/container";
import Header from "~/components/header";
import ScrollToTop from "~/components/scrollToTop";
import productDesign from "../../public/product_design.png";

export default function Design() {
  return (
    <Container>
      <Header />
      <div className="bg-roseWhite flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2">
          <img
            src={productDesign}
            alt="product design"
            className="w-full h-auto"
          ></img>
        </div>

        <div className="flex flex-col text-roseBrown justify-center items-center md:w-1/2 space-y-4 pl-3 md:pl-12 pb-10 md:pb-0">
          <p className=" font-medium text-4xl md:text-5xl mt-4 leading-tight">
            Product Design
          </p>
          <p className="mt-4 md:mr-14 font-normal text-xl">Coming Soon</p>
        </div>
      </div>
      <ScrollToTop />
    </Container>
  );
}
