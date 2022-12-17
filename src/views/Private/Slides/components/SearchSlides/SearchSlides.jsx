import React, { useState } from "react";

import { SearchInput } from "Components/SearchInput/SearchInput";

const SearchSlides = ({ onSearchSlides, disabled }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText);
  };

  const searchSlidesHandler = () => {
    onSearchSlides(searchText);
  };

  return (
    <SearchInput
      searchText={searchText}
      placeholder="Buscar slides..."
      onChangeText={changeSearchTextHandler}
      onSearch={searchSlidesHandler}
      disabled={disabled}
    />
  );
};

export default SearchSlides;
