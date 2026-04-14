import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const { currentUser, token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/signin" replace/>;
  }

  if (currentUser?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedAdmin;