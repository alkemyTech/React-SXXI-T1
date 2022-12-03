import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { editIcon, deleteIcon } from "assets/images";
import { PersonalTableData } from "../PersonalTableData/PersonalTableData";
import { SkeletonLoader } from "Components/GlobalComponents/Loading/SkeletonLoader/SkeletonLoader";

const buttonsActions = [editIcon, deleteIcon];

export const TableRow = ({ handleEdit, handleDelete, children, loading = false }) => {
  return (
    <tr>
      <td>{children?.idx + 1 || <SkeletonLoader />}</td>
      <PersonalTableData children={children} loading={loading} />
      <td>
        {loading ? (
          <SkeletonLoader />
        ) : (
          buttonsActions.map((btn, idx) => (
            <CustomButton
              key={idx}
              buttonClass="me-1 "
              text={btn}
              color={!idx ? "yellow" : undefined}
              background={!idx ? "yellow" : undefined}
              onClick={() => (!idx ? handleEdit(children?.element?.id) : handleDelete(children?.element?.id, children?.element?.name))}
            />
          ))
        )}
      </td>
    </tr>
  );
};
