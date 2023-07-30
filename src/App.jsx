import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ForgetPassword from "./components/auth/ForgetPassword";
import ErrorComponent from "./components/error/ErrorComponent";
import AllCources from "./components/course/AllCources";
import PurchasedCourses from "./components/course/PurchasedCourses";
import AdminPanel from "./components/admin/AdminPanel";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <AllCources /> },
      { path: "/purchased-courses", element: <PurchasedCourses /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/forgetpassword", element: <ForgetPassword /> },
      { path: "/admin", element: <AdminPanel /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};
export default App;
