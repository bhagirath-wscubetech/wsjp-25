import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebsiteMain from "./pages/website/Main";
import AdminMain from "./pages/admin/Main";
import Home from "./pages/website/Home";
import Store from "./pages/website/Store";
import Dashboard from "./pages/admin/Dashboard";
import CategoryAdd from "./pages/admin/category/Add";
import CategoryView from "./pages/admin/category/View";
import ProductAdd from "./pages/admin/product/Add";
import ProductView from "./pages/admin/product/View";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "store",
            element: <Store />
          }
        ]
      },
      {
        path: "/admin",
        element: <AdminMain />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "category",
            children: [
              {
                path: "add",
                element: <CategoryAdd />
              },
              {
                path: "view",
                element: <CategoryView />
              }
            ]
          },
          {
            path: "product",
            children: [
              {
                path: "add",
                element: <ProductAdd />
              },
              {
                path: "view",
                element: <ProductView />
              }
            ]
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
