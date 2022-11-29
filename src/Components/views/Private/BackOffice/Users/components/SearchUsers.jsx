import React, { useState } from "react"

import { SearchInput } from "Components/GlobalComponents/SearchInput/SearchInput"

const SearchUsers = ({ onSearchUsers }) => {
  const [searchText, setSearchText] = useState("")

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText)
  }

  const searchUsersHandler = () => {
    onSearchUsers(searchText)
  }

  return <SearchInput searchText={searchText} placeholder="Buscar usuario..." onChangeText={changeSearchTextHandler} onSearch={searchUsersHandler} />
}

export default SearchUsers
