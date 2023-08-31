import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";

// table columns
const columns: object[] = [
  { id: "courseTitle", label: "CourseTitle", minWidth: 200 },
  { id: "courseType", label: "CourseType", minWidth: 200 },
  { id: "price", label: "Price", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120 },
  { id: "actions", label: "Actions", minWidth: 120 },
];

// function for generating array
const createData: (
  courseTitle: any,
  courseType: any,
  price: any,
  status: any,
  actions: any
) => any = function (
  courseTitle: any,
  courseType: any,
  price: any,
  status: any,
  actions: any
) {
  return { courseTitle, courseType, price, status, actions };
};

// edit and delete button
const actions = [
  <Tooltip title="delete">
    <button className="mr-6 ml-2 lg:ml-8 active:translate-y-[2px]">
      {" "}
      <DeleteIcon className="text-[#575c5c]" />
    </button>
  </Tooltip>,
  <Tooltip title="edit">
    <button className="active:translate-y-[2px]">
      <EditIcon className="text-[#575c5c]" />
    </button>
  </Tooltip>,
];

// table rows
const rows: object[] = [
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
  createData("Devops", "Basic", "$120", "Excellent", actions),
];

const Courses: React.FC = () => {
  // states
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);

  // functions
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: any, index: number) => (
                  <TableCell
                    key={index}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column: any, index: number) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={index} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="MuiTablePagination-actions"
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Courses;
