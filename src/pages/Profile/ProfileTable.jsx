import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { StyledTable } from "./ProfileTable.styled";

function createData(orderNumber, date, status, total, actions) {
  return { orderNumber, date, status, total, actions };
}

const rows = [
  createData(
    7643980998990,
    "October 8,2021",
    "Delivered",
    "$ 105",
    "View Order"
  ),
  createData(
    943980998990,
    "October 8,2021",
    "Processing",
    "$ 100",
    "View Order"
  ),
  createData(
    "879980998990",
    "October 8,2021",
    "Delivered",
    "$ 105",
    "View Order"
  ),
];

const ProfileTable = () => {
  return (
    <div>
      <TableContainer>
        <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>order number</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">status</TableCell>
              <TableCell align="right">total</TableCell>
              <TableCell align="right">actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.orderNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderNumber}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </div>
  );
};

export default ProfileTable;
