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
import AdmindOrder from "./admind/AdmindOrder";
import AdmindUser from "./admind/AdmindUser";
import DataProvider from "./components/DataProvider";
import { Provider } from "react-redux";
import { store, persistore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AuthLayout from "./components/AuthLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "detail-product/:id/:slug",
        element: <DetailProduct />
      },
      {
        path: "checkout-product",
        element: <CheckoutProduct />,
      },
      {
        path: "history-order",
        element: <HistoryOrder />
      },
      {
        path: "detail-order/:id",
        element: <DetailOrder />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  {
    element: <AuthLayout/>,
    children:[
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
    ]

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
      {
        path: "order",
        element: <AdmindOrder />,
      },
      {
        path: "user",
        element: <AdmindUser />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistore}>
          <DataProvider>
            <RouterProvider router={router} />
          </DataProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
