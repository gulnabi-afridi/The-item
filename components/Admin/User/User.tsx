import React, { useState } from "react";
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
  { id: "UserName", label: "User Name", minWidth: 150 },
  { id: "FirstName", label: "Last Name", minWidth: 150 },
  { id: "Phone Number", label: "Phone Number", minWidth: 160 },
  { id: "Email", label: "Email", minWidth: 140 },
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
  <Tooltip title="Delete">
    <button className="mr-6 active:translate-y-[2px] ml-2 lg:ml-8">
      {" "}
      <DeleteIcon className="text-[#575c5c]" />
    </button>
  </Tooltip>,
  <Tooltip title="Edit">
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

const User: React.FC = () => {
  // states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [search, setSearch] = useState("");

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
        <TableContainer
          sx={{
            width: "100%",
          }}
        >
          {/* ------------Search Bar------------- */}
          <div className="w-[100%] max-w-[250px] lg:max-w-[300px] h-[40px] flex justify-start items-center ml-2 lg:ml-4 my-4">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="w-full h-full pl-4 border-[2px] border-solid border-[#dddddd] rounded-lg focus:outline-none"
              type="text"
              value={search}
              placeholder="Search..."
            />
          </div>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: any) => (
                  <TableCell
                    key={column.id}
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
                .map((row: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column: any) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
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
        <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center pb-8">
          {/* ------------ buttons--------- */}
          <div className="w-full max-w-[200px] lg:max-w-[360px] flex flex-col lg:flex-row gap-1 lg:gap-4 justify-center items-center ml-4">
            {/* ---------- User button ---------- */}
            <button
              type="button"
              className="bg-[#2edba4] w-full py-2 rounded-md font-inter mt-4 text-[#2f2e2e] active:translate-y-1"
            >
              Users
            </button>
            {/* ---------- User Courses ---------- */}
            <button
              type="button"
              className="bg-[#2edba4] w-full py-2 rounded-md font-inter mt-4 text-[#2f2e2e] active:translate-y-1"
            >
              Users Courses
            </button>
          </div>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </div>
  );
};

export default User;
