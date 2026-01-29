import React from "react";
import { Outlet } from "react-router-dom";

function NavbarAdmind() {
  return (
    <>
      <header classNameName='flex justify-between items-center px-14'>
        <div classNameName='flex items-center'>
          <img
            src='src/assets/img/icon/Frame.svg'
            alt='Coffee Shop logo icon'
            classNameName='align-middle'
          />
          <span classNameName="  font-['Sacramento'] text-[#8E6447] text-xl font-normal ">
            Coffee Shop
          </span>
        </div>
        <div></div>
      </header>
      <section className='grid grid-cols-[256px_1fr] min-h-screen'>
        <div className=' bg-white border-r'>
          <nav>
            <ul>
              <li className='flex items-center gap-3 px-3 py-2 text-gray-600'>
                <img src='src/assets/img/icon/dashboard.svg' alt='' />

                <span>Dashboard</span>
              </li>
              <li
                href='./admind-product.html'
                className='flex items-center gap-3 px-3 py-2 text-gray-600 rounded'
              >
                <img src='src/assets/img/icon/product.svg' alt='' />

                <span>Product</span>
              </li>
              <li
                href='./admind-order.html'
                className='flex items-center gap-3 px-3 py-2 text-gray-600'
              >
                <img src='src/assets/img/icon/bag.svg' alt='' />

                <span>Order</span>
              </li>
              <li
                href='#'
                className='flex items-center gap-3 px-3 py-2 bg-[#FF8906] text-white'
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
        <section className=''>hahaha</section>
      </section>
    </>
  );
}

export default NavbarAdmind;
