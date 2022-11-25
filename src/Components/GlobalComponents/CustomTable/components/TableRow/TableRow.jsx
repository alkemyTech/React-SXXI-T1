import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { editIcon, deleteIcon } from "assets/images";
import { PersonalTableData } from "../PersonalTableData/PersonalTableData";
import { SpinnerGrow } from "Components/GlobalComponents/Loading/SpinnerGrow/SpinnerGrow";

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
        {children?.idx + 1 || <SpinnerGrow animation="grow" variant="primary" />}
      </td>

      <PersonalTableData children={children} loading={loading} />

      <td>
        <div className="d-flex flex-nowrap justify-content-center align-items-center ">
          {buttonsActions.map((btn, idx) =>
            loading ? (
              <SpinnerGrow key={idx} animation="grow" variant="primary" />
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
