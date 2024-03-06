import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
