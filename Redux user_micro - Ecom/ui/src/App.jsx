import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage } from "./components/homepage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [],
  },
]);

export function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
