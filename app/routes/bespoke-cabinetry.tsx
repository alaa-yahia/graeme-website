import Header from "~/components/header";
import ScrollToTop from "~/components/scrollToTop";
import BespokeCabinetryTabs from "~/components/bespokeCabinetryTabs/tabs";
import bespokeCabinetry from "../../public/bespoke_cabinetry.png";
import Container from "~/components/container";

export default function Bespoke() {
  return (
    <Container>
      <Header />
      <div className="flex flex-col-reverse md:flex-row md:justify-between py-14 bg-roseWhite mt-10 md:-mx-28 px-28">
        <div className="flex flex-col md:w-1/2 pr-6">
          <p className="text-roseBrown font-medium text-4xl mt-4 leading-tight">
            Bespoke Cabinetry
          </p>
          <p className="mt-3 md:mt-6 text-xl text-roseBrown leading-8">
            Furniture and storage solutions designed and made to specification
            here in Glasgow. Graeme works on a small to medium scale from his
            workshop and studio, primarily on contemporary bespoke pieces of
            free-standing furniture and fitted wardrobes in birch plywood.
            <br /> <br />
            The starting price for any bespoke project begins at £1600
          </p>
        </div>

        <div className="md:w-1/3 md:h-1/3">
          <img
            src={bespokeCabinetry}
            alt="bespoke design"
            className="w-full h-auto"
          ></img>
        </div>
      </div>

      <BespokeCabinetryTabs />
      <ScrollToTop />
    </Container>
  );
}
