import { useState } from "react";
import TabNavItem from "../tabNavItem";
import TabContentItem from "../tabContentItem";
import ConsultationTab from "./consultationTab";
import DesignTab from "./designTab";
import InstallTab from "./installTab";
import ManufactureTab from "./manufactureTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsTitle: string[] = [
    "Consultation",
    "Design",
    "Manufacture",
    "Delivery / Install",
  ];
  const tabsContent: any = [
    ConsultationTab,
    DesignTab,
    InstallTab,
    ManufactureTab,
  ];
  return (
    <div className="w-9/12 mx-auto my-10 text-lg">
      <ul className="flex md:flex-row flex-col justify-between text-roseBrown">
        {tabsTitle.map((title, index) => {
          const Component = tabsContent[index];
          return (
            <li key={title} className="">
              <TabNavItem
                title={title}
                id={index}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="md:hidden text-black my-8 pl-4">
                {Component && <Component />}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 hidden md:block">
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
