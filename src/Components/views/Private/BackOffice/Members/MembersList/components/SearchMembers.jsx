import React, { useState } from "react"

import { SearchInput } from "Components/GlobalComponents/SearchInput/SearchInput"

const SearchMembers = ({ onSearchMembers }) => {
  const [searchText, setSearchText] = useState("")

  const changeSearchTextHandler = (searchText) => {
    setSearchText(searchText)
  }

  const searchMembersHandler = () => {
    onSearchMembers(searchText)
  }

  return (
    <SearchInput searchText={searchText} placeholder="Buscar miembro..." onChangeText={changeSearchTextHandler} onSearch={searchMembersHandler} />
  )
}

export default SearchMembers
