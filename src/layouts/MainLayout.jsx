import { Outlet } from "react-router-dom";

import Footer from "../components/Common/Footer/Footer";
import Navbar from "../components/Common/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;