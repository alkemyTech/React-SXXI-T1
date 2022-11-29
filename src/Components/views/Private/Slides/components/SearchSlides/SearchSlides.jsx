import React, { useState } from "react";

import { SearchInput } from "Components/GlobalComponents/SearchInput/SearchInput";

const SearchSlides = ({ onSearchSlides }) => {
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
    />
  );
};

export default SearchSlides;
