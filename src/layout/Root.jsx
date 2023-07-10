import { Outlet } from "react-router-dom";
import { Container } from "../components/global.styled";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default RootLayout;
