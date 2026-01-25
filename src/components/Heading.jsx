import React from "react";

function Heading() {
  return (
    <div>
      <header className='fixed top-0 w-full z-20 bg-[rgba(11,9,9,0.13)] py-3.5 px-32 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            src='src/assets/img/icon/glass.svg'
            //
            alt='Coffee Shop logo icon'
          />
          <span className='font-[Sacramento,cursive] text-white text-xl font-normal ml-3.5'>
            Coffee Shop
          </span>
        </div>

        <nav className=''>
          <ul className='flex items-center gap-14'>
            <li>
              <a
                href='#'
                className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white border-b border-[#ff8906] pb-1'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='./pages/products.html'
                className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white'
              >
                Product
              </a>
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
            <li className='mx-5'>
              <a
                href='./pages/login.html'
                className='font-[Plus_Jakarta_Sans] text-sm font-medium text-white border border-white rounded-sm py-3 px-3'
              >
                Signin
              </a>
            </li>
            <li>
              <a
                href='./pages/register.html'
                className='font-[Plus_Jakarta_Sans] text-sm font-medium bg-[#ff8906] text-[#0b132a] rounded-sm py-3 px-3'
              >
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Heading;
