import "./styles/global.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import CaseStudy from "./pages/caseStudy/CaseStudy";
import ContactMe from "./pages/contactMe/ContactMe";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container">
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/case-studies",
          element: <CaseStudy />,
        },
        {
          path: "/contact-me",
          element: <ContactMe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
