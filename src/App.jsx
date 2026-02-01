import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Products from "./pages/Products";
import DetailProduct from "./pages/DetailProduct";
import CheckoutProduct from "./pages/CheckoutProduct";
import HistoryOrder from "./pages/HistoryOrder";
import DetailOrder from "./pages/DetailOrder";
import Profile from "./pages/Profile";
import NavbarAdmind from "./components/NavbarAdmind";
import AdmindDashboard from "./admind/AdmindDashboard";
import AdmindProduct from "./admind/AdmindProduct";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/detail-product",
        element: <DetailProduct />,
      },
      {
        path: "/checkout-product",
        element: <CheckoutProduct />,
      },
      {
        path: "/history-order",
        element: <HistoryOrder />,
      },
      {
        path: "/detail-order",
        element: <DetailOrder />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/admind",
    element: <NavbarAdmind />,
    children: [
      {
        index: true,
        element: <AdmindDashboard />,
      },
      {
        path: "dashboard",
        element: <AdmindDashboard />,
      },
      {
        path: "product",
        element: <AdmindProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
