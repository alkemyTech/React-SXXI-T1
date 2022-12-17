import { THead, CustomTable as Table } from "./styled-components/Table.styled";
import { TableRow } from "./components/TableRow/TableRow";
import { TableHead } from "./components/TableHead/TableHead";

export const CustomTable = ({ tHead, tBody, loading, myTableData, handleEdit, handleDelete }) => {
  return (
    <div className="mt-2">
      <Table className="text-center" responsive="md" striped bordered hover>
        <THead>
          <tr>
            {tHead?.map((element) => (
              <TableHead key={element} load={loading} element={element} />
            ))}
          </tr>
        </THead>
        <tbody>
          {loading ? (
            <TableRow loading={loading}>
              {{
                myTableData,
              }}
            </TableRow>
          ) : (
            tBody?.map((element, idx) => (
              <TableRow key={idx} handleEdit={handleEdit} handleDelete={handleDelete}>
                {{
                  key: element.id,
                  element: element,
                  idx: idx,
                  myTableData,
                }}
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};
