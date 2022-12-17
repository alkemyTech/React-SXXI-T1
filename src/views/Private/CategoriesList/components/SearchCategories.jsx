import React, { useState } from "react";

import { SearchInput } from "Components/SearchInput/SearchInput";

const SearchCategories = ({ onSearchCategories }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText);
  };

  const searchCategoriesHandler = () => {
    onSearchCategories(searchText);
  };

  return (
    <SearchInput
      searchText={searchText}
      placeholder="Buscar categoría..."
      onChangeText={changeSearchTextHandler}
      onSearch={searchCategoriesHandler}
    />
  );
};

export default SearchCategories;
