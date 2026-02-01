import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function NavbarAdmind() {
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
        <div></div>
      </header>
      <section className='grid grid-cols-[256px_1fr] min-h-screen'>
        <div className='pl-10 pt-6 pr-3 bg-white border-r'>
          <nav>
            <ul>
              <li>
                <Link
                  to='dashboard'
                  className='flex items-center gap-3 px-3 py-2  bg-[#FF8906] text-black rounded-lg'
                >
                  <img
                    src='src/assets/img/icon/dashboard.svg'
                    alt='icon dashboard'
                  />

                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to='product'
                  className='flex items-center gap-3 px-3 py-2 text-gray-600 rounded'
                >
                  <img
                    src='src/assets/img/icon/product.svg'
                    alt='icon product'
                  />

                  <span>Product</span>
                </Link>
              </li>
              <li>
                <Link
                  to='order'
                  className='flex items-center rounded-2xl gap-3 px-3 py-2 text-gray-600'
                >
                  <img src='src/assets/img/icon/bag.svg' alt='icon bag' />

                  <span>Order</span>
                </Link>
              </li>
              <li
                href='#'
                className='flex items-center gap-3 px-3 py-2 text-gray-600'
              >
                <img src='src/assets/img/icon/usertwo.svg' alt='' />

                <span>User</span>
              </li>
              <li
                href='#'
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
