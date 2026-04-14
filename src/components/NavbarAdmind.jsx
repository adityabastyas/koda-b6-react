import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/reduces/authReducer";
import { useSelector } from "react-redux";

function NavbarAdmind() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <>
      <header className='flex justify-between items-center px-14'>
        <div className='flex items-center'>
          <img
            src='src/assets/img/icon/Frame.svg'
            alt='Coffee Shop logo icon'
          />
          <span className="  font-['Sacramento'] text-[#8E6447] text-xl font-normal ">
            Coffee Shop
          </span>
        </div>
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-sm">{currentUser?.fullName}</span>
            <img
              src={
                currentUser?.profile_pic
                  ? `http://localhost:8888/${currentUser.profile_pic}`
                  : "src/assets/img/poto.jpg"
              }
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow w-40">
              <div
                onClick={() => navigate("/profile")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
        Profile
              </div>

              {currentUser?.role === "admin" && (
                <div
                  onClick={() => navigate("/admind/dashboard")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
          Admin
                </div>
              )}

              <div
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/signin");
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              >
        Logout
              </div>
            </div>
          )}
        </div>
      </header>
      <section className='grid grid-cols-[256px_1fr] min-h-screen'>
        <div className='pl-10 pt-6 pr-3 bg-white border-r'>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='dashboard'
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#FF8906] text-black" : "text-gray-600"
                    }`
                  }
                >
                  <img
                    src='src/assets/img/icon/dashboard.svg'
                    alt='icon dashboard'
                  />

                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='product'
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#FF8906] text-black" : "text-gray-600"
                    }`
                  }
                >
                  <img
                    src='src/assets/img/icon/product.svg'
                    alt='icon product'
                  />

                  <span>Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='order'
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#FF8906] text-black" : "text-gray-600"
                    }`
                  }
                >
                  <img src='src/assets/img/icon/bag.svg' alt='icon bag' />

                  <span>Order</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='user'
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#FF8906] text-black" : "text-gray-600"
                    }`
                  }
                >
                  <img src='src/assets/img/icon/usertwo.svg' alt='icon user' />

                  <span>User</span>
                </NavLink>
              </li>
              <li
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/signin");
                }}
                className='flex items-center gap-3 px-3 py-2 text-gray-600'
              >
                <img src='src/assets/img/icon/logout.svg' alt='' />
                <span>Keluar</span>
              </li>
            </ul>
          </nav>
        </div>
        <section className=''>
          <Outlet />
        </section>
      </section>
    </>
  );
}

export default NavbarAdmind;
