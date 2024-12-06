import { createBrowserRouter } from "react-router-dom";
import ExploreDetails from "../Components/ExploreDetails";
import UpdatedReview from "../Components/UpdatedReview";
import MainLayout from "../Layout/MainLayout";
import AddReview from "../Pages/AddReview";
import AllReview from "../Pages/AllReview";
import GameWatchList from "../Pages/GameWatchList";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyReview from "../Pages/MyReview";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://ph-assignment-10-server-six.vercel.app/allReview"),
      },
      {
        path: "/allReview",
        element: <AllReview></AllReview>,
        loader: () =>
          fetch("https://ph-assignment-10-server-six.vercel.app/allReview"),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/gameWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdatedReview></UpdatedReview>,
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-six.vercel.app/allReview/${params.id}`
          ),
      },

      {
        path: "/exploreDetails/:id",
        element: (
          <PrivateRoute>
            <ExploreDetails></ExploreDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-six.vercel.app/allReview/${params.id}`
          ),
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
