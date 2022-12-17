import React, { useState } from "react";

import { SearchInput } from "Components/SearchInput/SearchInput";
import CategoriesSelect from "./CategoriesSelect";
import { useCategories } from "../hooks/useCategories";

const SearchNews = ({ onSearchNews }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { categoriesData } = useCategories();

  const searchNewsHandler = () => {
    onSearchNews(searchText, selectedCategory);
  };

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText);
  };

  const changeSelectedCategoryHandler = (category) => {
    setSelectedCategory(category);
    onSearchNews(searchText, category);
  };

  return (
    <div className="my-3 d-flex gap-3 flex-column flex-md-row">
      <div className="flex-fill">
        <SearchInput searchText={searchText} placeholder="Buscar novedad..." onChangeText={changeSearchTextHandler} onSearch={searchNewsHandler} />
      </div>
      <div>
        <CategoriesSelect onChangeCategory={changeSelectedCategoryHandler} categories={categoriesData} />
      </div>
    </div>
  );
};

export default SearchNews;
