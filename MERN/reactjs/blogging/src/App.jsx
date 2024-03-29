import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Course from "./pages/Course";
import Main from "./pages/Main";
import ContactUs from "./pages/ContactUs";
import CourseListing from "./pages/CourseListing";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "about-us",
            element: <About />
          },
          {
            path: "gallery",
            element: <Gallery />
          },
          {
            path: "course",
            children: [
              {
                path: "",
                element: <CourseListing />
              },
              {
                path: ":slug",
                element: <Course />
              }
            ]
          },
          {
            path: "contact-us",
            element: <ContactUs />
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  )


  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/about-us",
  //     element: <About />
  //   },
  //   {
  //     path: "/gallery",
  //     element: <Gallery />
  //   },
  //   {
  //     path: "/course/:slug",
  //     element: <Course/>
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
