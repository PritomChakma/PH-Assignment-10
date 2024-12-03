import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddReview from "../Pages/AddReview";
import AllReview from "../Pages/AllReview";
import GameWatchList from "../Pages/GameWatchList";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyReview from "../Pages/MyReview";
import Registration from "../Pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allReview",
        element: <AllReview></AllReview>,
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/myReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "/gameWatchList",
        element: <GameWatchList></GameWatchList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
