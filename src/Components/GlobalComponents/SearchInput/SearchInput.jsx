import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import { useDebounce } from "hooks/useDebounce";

export const SearchInput = ({
  placeholder = "",
  debounceDelay = 500,
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, debounceDelay);

  useEffect(() => {
    if (debouncedSearch === searchText) {
      onSearch(searchText);
    }
  }, [debouncedSearch, onSearch, searchText]);

  const inputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Form.Group>
      <Form.Control
        type="text"
        placeholder={placeholder}
        onChange={inputChangeHandler}
      />
    </Form.Group>
  );
};
