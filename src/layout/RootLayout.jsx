import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="container">
        <Toaster position="bottom-right" />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
