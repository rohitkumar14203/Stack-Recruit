import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
