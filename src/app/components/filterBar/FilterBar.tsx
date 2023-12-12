import Image from "next/image";
import styles from "./filterBar.module.scss";

interface FilterBarProps {
  displayType: "list" | "grid";
  setDisplayType: React.Dispatch<React.SetStateAction<"list" | "grid">>;
}

const FilterBar: React.FC<FilterBarProps> = ({
  displayType,
  setDisplayType,
}) => {
  const handleDisplayTypeChange = (type: "list" | "grid") => {
    setDisplayType(type);
  };

  return (
    <div className={styles.filter_bar}>
      <div className={styles.filter_bar_left}>
        <div className={styles.filter_bar_left_icons}>
          <Image
            src="/images/filterIcons/bi_view-list.svg"
            alt="list view"
            width={20}
            height={20}
            onClick={() => handleDisplayTypeChange("list")}
          />
          <div className={styles.filter_bar_left_text}>Filter</div>
          <Image
            src="/images/filterIcons/ci_grid-big-round.svg"
            alt="grid view"
            width={20}
            height={20}
            onClick={() => handleDisplayTypeChange("grid")}
          />
        </div>
        <span className={styles.filter_bar_left_showing}>
          | &nbsp; Showing 1-16 of 32 results
        </span>
      </div>
      <div className={styles.filter_bar_right}>
        <label>Show</label>
        <select>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
        <label>Sort by</label>
        <select>
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
