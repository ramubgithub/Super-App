import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import CategoryGrid from "../components/category/CategoryGrid";

import categories from "../utils/categories";

import "./Categories.css";

function Categories() {

  const navigate =
    useNavigate();

  const [
    selected,
    setSelected,
  ] = useState([]);

  const handleSelect = (
    category
  ) => {

    if (
      selected.includes(
        category
      )
    ) {
      setSelected(
        selected.filter(
          (item) =>
            item !== category
        )
      );

      return;
    }

    setSelected([
      ...selected,
      category,
    ]);
  };

  const handleNext = () => {

    if (
      selected.length < 3
    ) {
      alert(
        "Please select at least 3 categories"
      );

      return;
    }

    localStorage.setItem(
      "categories",
      JSON.stringify(
        selected
      )
    );

    navigate(
      "/dashboard"
    );
  };

  return (
    <section className="categories">

      <div className="categories-left">

        <h1>
          Choose your
          entertainment
          category
        </h1>

        <div className="selected-list">

          {selected.map(
            (
              category,
              index
            ) => (
              <span
                key={index}
              >
                {
                  category
                }
              </span>
            )
          )}

        </div>

      </div>

      <div className="categories-right">

        <CategoryGrid
          categories={
            categories
          }
          selected={
            selected
          }
          onSelect={
            handleSelect
          }
        />

        <button
          onClick={
            handleNext
          }
          className="next-btn"
        >
          Next Page
        </button>

      </div>

    </section>
  );
}

export default Categories;