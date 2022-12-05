import React, { useState } from "react";

import { SearchInput } from "Components/GlobalComponents/SearchInput/SearchInput";

const SearchActivities = ({ onSearchActivities, disabled }) => {
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
      disabled={ disabled }
    />
  );
};

export default SearchActivities;
