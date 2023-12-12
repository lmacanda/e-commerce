/// ProductTabs.tsx
import React, { useState } from "react";

interface ProductTabsProps {
  tabs: { name: string; content: React.ReactNode }[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "active" : ""}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default ProductTabs;
