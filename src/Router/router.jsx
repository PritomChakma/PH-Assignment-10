import { createBrowserRouter } from "react-router-dom";
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
      },
      {
        path: "/allReview",
        element: <AllReview></AllReview>,
        loader: () => fetch("http://localhost:5000/allReview"),
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
        loader:({params})=>(`http://localhost:5000/updateReview/${params.id}`)
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
