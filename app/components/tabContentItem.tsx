type TabContentItemPropsType = {
  id: number;
  activeTab: number;
  children: any;
};

const TabContentItem = ({
  id,
  activeTab,
  children,
}: TabContentItemPropsType) => {
  return activeTab === id ? <p className="TabContent">{children}</p> : null;
};

export default TabContentItem;
