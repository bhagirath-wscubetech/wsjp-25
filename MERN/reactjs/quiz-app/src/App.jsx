import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import QuizPlay from "./pages/QuizPlay";
import QuizAdmin from "./pages/QuizAdmin";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3yMcvRm1uHDI4eor6FZMfR0FPvmqE6t0",
  authDomain: "wsjp-25.firebaseapp.com",
  databaseURL: "https://wsjp-25-default-rtdb.firebaseio.com",
  projectId: "wsjp-25",
  storageBucket: "wsjp-25.appspot.com",
  messagingSenderId: "671552793385",
  appId: "1:671552793385:web:b2245421dc107f3ec06538",
  measurementId: "G-SQNNL9LHMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
