import React, { Fragment } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//<>  is React Fragment



const AppLayout = () => {
  return (
    <Fragment>
      <Header />
      {/**/}
      <Outlet />
      <Footer />
    </Fragment>
  );
};

const appRouter = createBrowserRouter([
  //routing configurations
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ]
  },


]);


const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element inside the root element
root.render(<RouterProvider router={appRouter} />); 