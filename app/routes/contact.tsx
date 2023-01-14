import Header from "~/components/header";
import ScrollToTop from "~/components/scrollToTop";
import grame from "../../public/grame.png";

export default function Design() {
  return (
    <div className="h-[calc(100vh-10rem)] pt-16 px-20">
      <Header />
      <div className="bg-roseWhite flex flex-col md:flex-row mt-10">
        <div className="md:w-1/2">
          <img src={grame} alt="Graeme Kennedy" className="w-full h-auto"></img>
        </div>
        <div className="md:w-1/2 flex flex-col md:justify-center space-y-4 pl-3 md:pl-12 pb-10 md:pb-0">
          <p className="font-medium text-roseBrown text-4xl md:text-6xl mt-4 leading-tight">
            Graeme Kennedy
          </p>
          <p className="mt-8 md:mr-14 font-normal text-xl">
            Artist, designer and cabinet maker originally from Orkney now based
            in Glasgow. He studied Interior design at Duncan of Jordanstone
            College of Art and Design in Dundee to then pursue a career in
            furniture making in London before establishing Studio Gilbert in
            2018.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
