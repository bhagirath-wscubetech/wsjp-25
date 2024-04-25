import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import QuizPlay from "./pages/QuizPlay";
import QuizAdmin from "./pages/QuizAdmin";
import QuizResult from "./pages/QuizResult";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Auth />
      },
      {
        path: "/play-quiz",
        element: <QuizPlay />
      },
      {
        path: "/quiz-result",
        element: <QuizResult/>
      },
      {
        path: "/admin",
        element: <QuizAdmin />
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
