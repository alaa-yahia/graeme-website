import recordBench from "../../../public/record_bench.png";
import TabContainer from "./tabContainer";
const DesignTab = () => {
  return (
    <>
      <TabContainer>
        <li>
          Free standing projects often simply measurements provided by the
          customer to get started with a new design.
        </li>
        <li>
          Fitted furniture will require a site visit to survey the space more
          accurately - this is charged at a flat rate of £50.
        </li>
        <li>
          A suggested design will be drawn up for review once measurements or a
          survey have been taken.
        </li>
        <li>
          Once finalised, manufacture can commence - 50% deposit (excluding
          survey) is required to proceed.
        </li>
      </TabContainer>
      <img
        src={recordBench}
        alt="Record Bench 3d Dims 1"
        className="w-full h-auto"
      ></img>
    </>
  );
};

export default DesignTab;
