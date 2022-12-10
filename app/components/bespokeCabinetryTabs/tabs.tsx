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
    <div className="Tabs">
      <ul className="nav">
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

      <div className="outlet">
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
