import CategoryCard from "./CategoryCard";

import "./CategoryGrid.css";

function CategoryGrid({
  categories,
  selected,
  onSelect,
}) {
  return (
    <div className="category-grid">

      {categories.map(
        (category) => (
          <CategoryCard
            key={category.id}
            category={category}
            selected={selected.includes(
              category.title
            )}
            onSelect={
              onSelect
            }
          />
        )
      )}

    </div>
  );
}

export default CategoryGrid;