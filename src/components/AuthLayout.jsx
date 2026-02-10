import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


function AuthLayout() {
  const { isLogin } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  React.useEffect(() => {

    if (isLogin) {
      navigate("/", { replace: true });
    }


  }, [isLogin, navigate]);
  return (
    <Outlet />
  );
}

export default AuthLayout;