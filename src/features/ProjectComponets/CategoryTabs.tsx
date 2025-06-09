import React from "react";
import styles from "@/shared/css/Project/Project.module.css";
import { IoSearchOutline } from "react-icons/io5";

type CategoryKey = "전체" | "My" | "Team" | "2024" | "2025";

interface CategoryTabsProps {
    selected: CategoryKey;
    onSelect: (key: CategoryKey) => void;
    onSearch: (query: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ selected, onSelect, onSearch }) => {
  const categories: CategoryKey[] = ["전체", "My", "Team", "2024", "2025"];

  return (
    <div className={styles.CategoryTabs}>
      <div className={styles.TabList}>
        {categories.map((category) => (
          <button
            key={category}
            className={selected === category ? styles.SelectedTab : styles.Tab}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.Search}>
        <input
          type="text"
          placeholder="검색어 입력"
          onChange={(e) => onSearch(e.target.value)}
          className={styles.SearchInput}
        />
        <IoSearchOutline />
      </div>
    </div>
  );
};