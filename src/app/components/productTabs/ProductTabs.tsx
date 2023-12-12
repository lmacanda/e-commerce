/// ProductTabs.tsx
import React, { useState } from "react";
import styles from "../productTabs/productTabs.module.scss";

interface ProductTabsProps {
  tabs: { name: string; content: React.ReactNode }[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_product_tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? styles.active : ""}
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
