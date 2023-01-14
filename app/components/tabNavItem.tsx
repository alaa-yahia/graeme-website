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
    <p
      onClick={handleClick}
      className={`${
        activeTab === id
          ? "opacity-100 md:pb-3 md:border-b-4 md:border-current md:text-xl"
          : "md:opacity-50"
      } md:cursor-pointer md:text-base text-2xl`}
    >
      {title}
    </p>
  );
};
export default TabNavItem;
