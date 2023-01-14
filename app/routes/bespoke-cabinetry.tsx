import Header from "~/components/header";
import ScrollToTop from "~/components/scrollToTop";
import BespokeCabinetryTabs from "~/components/bespokeCabinetryTabs/tabs";
import bespokeDesign from "../../public/bespoke_design.png";

export default function Bespoke() {
  return (
    <div>
      <div className="md:h-[calc(100vh-10rem)] bg-roseWhite pt-16 px-20">
        <Header />
        <div className="flex flex-col-reverse md:flex-row md:justify-between py-14">
          <div className="md:w-1/2 flex flex-col space-y-4 md:justify-around pl-1">
            <div className="flex flex-col">
              <p className="text-roseBrown font-medium text-6xl md:w-1/6 mt-4 leading-tight">
                Bespoke Cabinetry
              </p>
              <p className="mt-3 md:mr-14 text-xl">
                Furniture and storage solutions designed and made to
                specification here in Glasgow. Graeme works on a small to medium
                scale from his workshop and studio, primarily on contemporary
                bespoke pieces of free-standing furniture and fitted wardrobes
                in birch plywood. <br /> <br />
                The starting price for any bespoke project begins at £1600 +
                VAT.
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
      <ScrollToTop />
    </div>
  );
}
