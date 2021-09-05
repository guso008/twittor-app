import Home from "../page/Home";
import Error404 from "../page/Error404";

var routesArray = [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "*",
    page: Error404,
  },
];
export default routesArray;
