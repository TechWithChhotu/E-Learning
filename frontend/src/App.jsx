import Layout from "./Layout";
import Home from "./components/Home/Home";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setCourses } from "./stores/user.slice";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/auth/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="sign-in" element={<Login />}></Route>
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  (async function () {
    const CourseData = await axios.get("http://localhost:3000/api/v1/course");
    console.log(CourseData.data);
    dispatch(setCourses(CourseData.data));
  })();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
