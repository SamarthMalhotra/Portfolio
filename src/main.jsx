import { createRoot } from "react-dom/client";
import "./index.css";
import Skill from "./Components/Skill";
import Header from "./Components/Header.jsx";
import About from "./Components/About";
import App from "./App.jsx";
import "./index.css";
import Academics from "./Components/Academics.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Achivements from "./Components/Achivements.jsx";
import Project from "./Components/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Header /> },
      { path: "/about", element: <About /> },
      { path: "/academics", element: <Academics /> },
      { path: "/skills", element: <Skill /> },
      {
        path: "/projects",
        element: <Project />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
