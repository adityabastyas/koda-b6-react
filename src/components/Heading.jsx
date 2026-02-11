import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/reduces/authReducer";

function Heading() {
  const dispatch = useDispatch();
  const {isLogin, currentUser} = useSelector((state)=> state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <header className='fixed top-0 w-full z-20 bg-[rgba(11,9,9,0.13)] py-3.5 px-32 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            src='src/assets/img/icon/glass.svg'
            alt='Coffee Shop logo icon'
          />
          <span className='font-[Sacramento,cursive] text-white text-xl font-normal ml-3.5'>
            Coffee Shop
          </span>
        </div>

        <nav className=''>
          <ul className='flex items-center gap-14'>
            <li>
              <Link to='/'>
                <span className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white border-b border-[#ff8906] pb-1'>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to='/products'>
                <span className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white'>
                  Product
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className='flex items-center'>
            <li>
              <a href=''>
                <img
                  src='src/assets/img/icon/search-icon.svg'
                  alt='search icon'
                />
              </a>
            </li>
            <li className='ml-5'>
              <a href='./pages/checkout-product.html'>
                <img src='src/assets/img/icon/cart-icon.svg' alt='cart icon' />
              </a>
            </li>



            {!isLogin ? (
              <>
                <li className='mx-5'>
                  <Link to='/signin'>
                    <span className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white border border-white rounded-sm py-3 px-3'>
                  Signin
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/signup'>
                    <span className='font-[Plus_Jakarta_Sans] text-sm font-medium bg-[#ff8906] text-[#0b132a] rounded-sm py-3 px-3'>
                  Sign up
                    </span>
                  </Link>
                </li>
              </>

            ):(

              <>
                <li className='mx-5'>
                  <span className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white'>
                    <Link to="/profile">
                      {currentUser?.fullName}</Link> 
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className='font-[Plus_Jakarta_Sans] text-sm font-medium bg-[#ff8906] text-[#0b132a] rounded-sm py-3 px-3'
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Heading;
