import { useEffect } from "react";
import Form from "react-bootstrap/Form";

import { useDebounce } from "hooks/useDebounce";

export const SearchInput = ({
  searchText,
  placeholder = "",
  debounceDelay = 500,
  onSearch,
  onChangeText,
}) => {
  const debouncedSearch = useDebounce(searchText, debounceDelay);

  useEffect(() => {
    if (debouncedSearch === searchText) {
      onSearch();
    }
  }, [debouncedSearch, onSearch, searchText]);

  const inputChangeHandler = (e) => {
    onChangeText(e.target.value);
  };

  return (
    <Form.Group>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={inputChangeHandler}
      />
    </Form.Group>
  );
};
