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
  return activeTab === id ? <div>{children}</div> : null;
};

export default TabContentItem;
