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
  return activeTab === id ? <div className="pl-4">{children}</div> : null;
};

export default TabContentItem;
