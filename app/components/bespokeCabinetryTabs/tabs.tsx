import { useState } from "react";
import TabNavItem from "../tabNavItem";
import TabContentItem from "../tabContentItem";
import ConsultationTab from "./consultationTab";
import SurveyTab from "./surveyTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsTitle: string[] = [
    "Consultation",
    "Survey",
    "Design",
    "Manufacture",
    "Install",
  ];
  const tabsContent: any = [ConsultationTab, SurveyTab];
  return (
    <div className="w-9/12 mx-auto mt-10">
      <ul className="flex justify-between text-roseBrown">
        {tabsTitle.map((title, index) => (
          <TabNavItem
            key={title}
            title={title}
            id={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>

      <div className="mt-10">
        {tabsContent.map((tabContent: any, index: number) => {
          const Component = tabContent;
          return (
            <TabContentItem key={index} id={index} activeTab={activeTab}>
              <Component />
            </TabContentItem>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
