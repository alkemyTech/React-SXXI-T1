import React, { useState } from "react";

import { SearchInput } from "Components/GlobalComponents/SearchInput/SearchInput";
import RolSelect from "./RolSelect";
import { useUsers } from "../hooks/useUsers.js";

const SearchUsers = ({ onSearchUsers }) => {
  const [searchText, setSearchText] = useState("");
  const { roles, setRol } = useUsers();

  const changeSearchTextHandler = (text) => {
    searchText(text)
  };

  const searchUsersHandler = () => {
    onSearchUsers(searchText);
  };

  return (
    <div className="my-3 d-flex gap-3 flex-column flex-md-row">
      <div className="flex-fill">
        <SearchInput searchText={searchText} placeholder="Buscar usuario..." onChangeText={changeSearchTextHandler} onSearch={searchUsersHandler} />
      </div>
      <div>
        <RolSelect onChangeRoles={changeSearchTextHandler} roles={roles} />
      </div>
    </div>
  );
};

export default SearchUsers;
