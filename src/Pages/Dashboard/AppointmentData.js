import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useAuth from "../../hook/useAuth";
import SingleAppointment from "./SingleAppointment";

///////////////////// Mui Table Code ///////////////////////////////
const columns = [
  { id: "patientName", label: "Patient Name", minWidth: 100 },
  { id: "date", label: "Schedule", minWidth: 100 },
  {
    id: "serviceName",
    label: "Action",
    minWidth: 80,
    align: "center",
    format: (value) => value,
  },
];
///////////////////// Mui Table Code ///////////////////////////////

//////////////////////////////////////////////////////////////////
const AppointmentData = ({ date }) => {
  const { user,token } = useAuth();
  const [appointments, setAppointments] = useState([]);

  ///////////////////// Mui Table Code Start ///////////////////////////////
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  ///////////////////// Mui Table Code End ///////////////////////////////

  ////////////////////////// Search With Date And  Email /////////////////////////////////////////
  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
    fetch(url, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [user.email,token,date]);
  /////////////////////////////////////////////////////////////////////////////////

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 340 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {appointments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <SingleAppointment row={row}> </SingleAppointment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={appointments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AppointmentData;
