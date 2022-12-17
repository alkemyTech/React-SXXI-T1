import React, { useState } from "react";

import { SearchInput } from "Components/SearchInput/SearchInput";

const SearchNews = ({ onSearchNews }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText);
  };

  const searchNewsHandler = () => {
    onSearchNews(searchText);
  };

  return <SearchInput searchText={searchText} placeholder="Buscar novedad..." onChangeText={changeSearchTextHandler} onSearch={searchNewsHandler} />;
};

export default SearchNews;
