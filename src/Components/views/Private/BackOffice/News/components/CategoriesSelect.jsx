import Form from "react-bootstrap/Form";

const CategoriesSelect = ({ categories = [], onChangeCategory }) => {
  const categoryChangeHandler = (e) => {
    onChangeCategory(e.target.value);
  };

  return (
    <Form.Select onChange={categoryChangeHandler}>
      <option value="">Todas</option>
      {categories.map((c) => (
        <option value={c.id} key={c.id}>
          {c.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default CategoriesSelect;
