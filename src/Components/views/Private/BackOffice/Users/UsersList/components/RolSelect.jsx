import { FormSelect, SelectOptions } from "../styled-components/RolSelect.styled";

const RolSelect = ({ roles = [], onChangeRoles }) => {
  const rolesChangeHandler = (e) => {
    onChangeRoles(e.target.value);
  };

  return (
    <FormSelect onChange={rolesChangeHandler}>
      <SelectOptions value="">Todos</SelectOptions>
      {roles.map((rol) => (
        <SelectOptions value={rol.id} key={rol.id}>
          {rol.name}
        </SelectOptions>
      ))}
    </FormSelect>
  );
};

export default RolSelect;
