type TabNavItemProps = {
  id: number;
  title: string;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabNavItem = ({
  id,
  title,
  activeTab,
  setActiveTab,
}: TabNavItemProps) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};
export default TabNavItem;
