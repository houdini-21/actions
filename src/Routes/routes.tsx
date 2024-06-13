import { Routes, Route } from "react-router-dom";
import logo from "@Assets/images/logo-white.svg";
import Component from "@Pages/Components";
import Home from "@Pages/Home";
import InfoUser from "@Pages/InfoUser";
import TopBar from "@Components/TopBar";
{
  /*
   *
   *const routes = createBrowserRouter([
   *  {
   *    path: "/",
   *    element: <Home />,
   *  },
   *  {
   *    path: "/component",
   *    element: <Component />,
   *  },
   *]);
   */
}

const RoutesIndex = () => {
  return (
    <div>
      <TopBar
        logoUrl={logo}
        logoAlt="logo"
        isFixed
        bgColor="bg-blue-500 text-white"
        menuItems={[
          {
            text: "Home",
            path: "/",
            icon: "fa-duotone fa-home-lg-alt",
          },
          {
            text: "Create User",
            path: "/component",
            icon: "fa-duotone fa-user-plus",
          },
        ]}
      />
      <div className="py-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component" element={<Component />} />
          <Route path="/posts-user/:id" element={<InfoUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default RoutesIndex;
