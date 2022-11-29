import { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"

import { useDebounce } from "hooks/useDebounce"

export const SearchInput = ({ searchText, placeholder = "", debounceDelay = 500, onSearch, onChangeText }) => {
  const [previousSearch, setPreviousSearch] = useState("")
  const debouncedSearch = useDebounce(searchText, debounceDelay)

  useEffect(() => {
    if (debouncedSearch === searchText && searchText !== previousSearch && (searchText.trim().length > 0 || previousSearch.trim().length > 0)) {
      setPreviousSearch(searchText)
      onSearch()
    }
  }, [debouncedSearch, onSearch, searchText, previousSearch])

  const inputChangeHandler = (e) => {
    onChangeText(e.target.value)
  }

  return (
    <Form.Group>
      <Form.Control type="text" placeholder={placeholder} value={searchText} onChange={inputChangeHandler} />
    </Form.Group>
  )
}
