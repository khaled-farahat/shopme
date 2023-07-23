import { styled } from "@mui/material";

export const DashboardMainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6875rem;
`;

export const StyledSpan = styled("span")`
  color: ${({ theme }) => theme.palette.grayColor};
  cursor: pointer;
`;
