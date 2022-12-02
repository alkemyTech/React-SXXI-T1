import React, { useState } from "react";

import { SearchInput } from "Components/GlobalComponents/SearchInput/SearchInput";

const SearchTestimonials = ({ onSearchTestimonials }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText);
  };

  const searchTestimonialsHandler = () => {
    onSearchTestimonials(searchText);
  };

  return (
    <SearchInput
      searchText={searchText}
      placeholder="Buscar testimonio..."
      onChangeText={changeSearchTextHandler}
      onSearch={searchTestimonialsHandler}
    />
  );
};

export default SearchTestimonials;
