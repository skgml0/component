import React, { useState } from "react";

const content = [
  {
    tab: "Tab 1",
    content: "Tab menu One",
  },
  {
    tab: "Tab 2",
    content: "Tab menu Two",
  },
  {
    tab: "Tab 3",
    content: "Tab menu Three",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // tabs 중 해당안되거나 배열이 아니면 return으로 종료
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const Tab = () => {
  //  useTabs 초기값 0 ,
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button key={section.tab} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
export default Tab;
