import { Table, styled } from "@mui/material";

export const StyledTable = styled(Table)`
  & .MuiTableHead-root {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
    text-transform: uppercase;
    color: #000;

    & .MuiTableCell-head {
      border-bottom: 1px solid #000;
    }
  }

  & .MuiTableCell-body {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
    color: ${({ theme }) => theme.palette.grayColor};
  }
`;
