import Form from "react-bootstrap/Form";

const RolSelect = ({ roles = [], onChangeRoles }) => {
  const rolesChangeHandler = (e) => {
    onChangeRoles(e.target.value);
  };

  return (
    <Form.Select onChange={rolesChangeHandler}>
      <option value="">Todos</option>
      {roles.map((rol) => (
        <option value={rol.id} key={rol.id}>
          {rol.name}
        </option>
      ))}
    </Form.Select>
  );
};

export default RolSelect;
