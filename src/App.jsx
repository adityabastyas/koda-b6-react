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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
