import React, { useState } from "react";
import { SearchInput } from "Components/SearchInput/SearchInput";

const SearchActivities = ({ onSearchActivities }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText);
  };

  const searchActivitiesHandler = () => {
    onSearchActivities(searchText);
  };

  return (
    <SearchInput
      searchText={searchText}
      placeholder="Buscar actividad..."
      onChangeText={changeSearchTextHandler}
      onSearch={searchActivitiesHandler}
    />
  );
};

export default SearchActivities;
