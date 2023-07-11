import { Outlet } from "react-router-dom";
import { Container } from "../components/global.styled";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default RootLayout;
