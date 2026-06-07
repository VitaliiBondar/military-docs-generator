import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { TemplatePage } from "../../pages/TemplatePage/TemplatePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/template/:id",
    element: <TemplatePage />,
  },
]);
