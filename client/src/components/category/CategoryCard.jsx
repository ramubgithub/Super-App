import "./CategoryCard.css";

function CategoryCard({
  category,
  selected,
  onSelect,
}) {
  return (
    <div
      className={`category-card ${
        selected
          ? "active"
          : ""
      }`}
      style={{
        background:
          category.color,
      }}
      onClick={() =>
        onSelect(category.title)
      }
    >
      <h3>
        {category.title}
      </h3>
    </div>
  );
}

export default CategoryCard;