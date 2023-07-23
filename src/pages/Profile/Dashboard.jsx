import React from "react";
import { DashboardMainContainer, StyledSpan } from "./Dashboard.styled";

const Dashboard = ({ setActiveLink }) => {
  return (
    <DashboardMainContainer>
      <p>
        Hello username (not username? <StyledSpan>Logout</StyledSpan> )
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <StyledSpan onClick={() => setActiveLink(1)}>recent orders</StyledSpan>,
        manage your
        <StyledSpan onClick={() => setActiveLink(3)}>
          {" "}
          shipping and billing addresses
        </StyledSpan>
        , and edit your{" "}
        <StyledSpan onClick={() => setActiveLink(4)}>
          password and account details
        </StyledSpan>
        .
      </p>
    </DashboardMainContainer>
  );
};

export default Dashboard;
