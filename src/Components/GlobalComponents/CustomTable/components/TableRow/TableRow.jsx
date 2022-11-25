import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { editIcon, deleteIcon } from "assets/images";
import { Spinner } from "react-bootstrap";
import { PersonalTableData } from "../PersonalTableData/PersonalTableData";

const buttonsActions = [editIcon, deleteIcon];

export const TableRow = ({
  handleEdit,
  handleDelete,
  children,
  loading = false,
}) => {
  return (
    <tr>
      <td>
        {children?.idx + 1 || <Spinner animation="grow" variant="primary" />}
      </td>

      <PersonalTableData children={children} loading={loading} />

      <td>
        <div className="d-flex flex-nowrap justify-content-center align-items-center ">
          {buttonsActions.map((btn, idx) =>
            loading ? (
              <Spinner key={idx} animation="grow" variant="primary" />
            ) : (
              <CustomButton
                key={idx}
                buttonClass="me-1 "
                text={btn}
                color={!idx ? "yellow" : undefined}
                background={!idx ? "yellow" : undefined}
                onClick={() =>
                  !idx
                    ? handleEdit(children?.element?.id)
                    : handleDelete(children?.element?.id)
                }
              />
            )
          )}
        </div>
      </td>
    </tr>
  );
};
