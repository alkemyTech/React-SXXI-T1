import { Spinner } from "react-bootstrap";
import { CustomImage } from "styled-components/App.styled";

export const PersonalTableData = ({ children, loading }) => {
  const showLoad = () => <Spinner animation="grow" variant="primary" />;

  const whatRender = (item) =>
    item !== "image" && item !== "photo" ? (
      children?.element[item]
    ) : (
      <CustomImage image={children?.element[item]} />
    );

  return (
    <>
      {Object.keys(children?.myTableData).map((item) => (
        <td key={item}>{loading ? showLoad() : whatRender(item)}</td>
      ))}
    </>
  );
};
