import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Toaster position="bottom-right" />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
