import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/home.tsx";
import { Presentation } from "./pages/presentation/presentation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/presentation",
    element: <Presentation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
