import { CustomButton } from "Components/CustomButton/CustomButton";
import { editIcon, deleteIcon } from "assets/images";
import { PersonalTableData } from "../PersonalTableData/PersonalTableData";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

const buttonsActions = [editIcon, deleteIcon];

export const TableRow = ({ handleEdit, handleDelete, children, loading = false }) => {
  return (
    <tr>
      <td>{children?.idx + 1 || <SkeletonLoader />}</td>
      <PersonalTableData children={children} loading={loading} />
      <td className="m-auto py-1 px-0 pt-sm-2 ">
        <div className="d-flex justify-content-center align-items-center">
          {loading ? (
            <SkeletonLoader skeletonClass="col col-12 mt-1 mt-sm-0" />
          ) : (
            buttonsActions.map((btn, idx) => (
              <CustomButton
                key={idx}
                buttonClass="mt-1 mt-sm-0 me-1 "
                text={btn}
                color={!idx ? "yellow" : undefined}
                background={!idx ? "yellow" : undefined}
                onClick={() => (!idx ? handleEdit(children?.element?.id) : handleDelete(children?.element?.id, children?.element?.name))}
              />
            ))
          )}
        </div>
      </td>
    </tr>
  );
};
