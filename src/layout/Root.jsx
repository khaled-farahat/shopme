import { Outlet } from "react-router-dom";
import { Container } from "../components/global.styled";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import MobileNav from "../components/MobileNav";

const RootLayout = () => {
  const isMobile = useSelector((state) => state.mobile.isMobile);

  return (
    <Container>
      {isMobile ? <MobileNav isMobile={isMobile}/> : <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default RootLayout;
