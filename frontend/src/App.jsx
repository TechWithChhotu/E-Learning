import Layout from "./Layout";
import Home from "./components/Home/Home";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setCourses } from "./stores/user.slice";
import Payment from "./components/payment/Payment";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/auth/Login";
import CourseDetails from "./components/courses/CourseDetails";
import CheckOut from "./components/courses/CheckOut";
import NotFound from "./components/notFound/NotFound";
import ContactSupport from "./components/ContactSupport";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="sign-in" element={<Login />}></Route>
      <Route path="course/:id/checkout" element={<CheckOut />}></Route>
      <Route path="course/:id" element={<CourseDetails />}></Route>
      <Route path="payment" element={<Payment />}></Route>
      <Route path="contact-us" element={<ContactSupport />}></Route>

      <Route path="*" element={<NotFound />}></Route>
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
