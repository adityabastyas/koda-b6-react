import React from "react";

function Footer() {
  return (
    <div>
      <footer className='bg-[#f8f8f8] mt-8'>
        <div className='flex flex-wrap items-start px-28'>
          <section className='w-[340px] mr-14'>
            <a href='#' className='flex items-center no-underline'>
              <img
                src='src/assets/img/icon/Frame.svg'
                alt='Coffee Shop brand logo'
              />
              <span className='ml-3.5 text-[#8e6447] text-xl font-normal font-[Sacramento]'>
                Coffee Shop
              </span>
            </a>

            <p className='text-[#4f5665] text-base font-normal font-[Plus_Jakarta_Sans] mt-8 mb-8'>
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>

            <p className='text-[#afb5c0] text-base font-normal font-[Rubik] mb-16'>
              ©2020CoffeeStore
            </p>
          </section>

          <nav className='mr-24 mt-12'>
            <h3 className='text-[#0b132a] text-base font-medium font-[Plus_Jakarta_Sans] mb-5'>
              Product
            </h3>
            <ul className='list-none'>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Our Product
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Pricing
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Locations
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Countries
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <nav className='mr-[106px] mt-[50px]'>
            <h3 className='text-[#0b132a] text--base font-medium font-[Plus_Jakarta_Sans] mb-5'>
              Engage
            </h3>
            <ul className='list-none'>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Partner
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  FAQ
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  About Us
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-2.5'>
                <a href='#' className='text-[#4f5665] text-base'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>

          <section className='mt-[50px]'>
            <h3 className='text-[#0b132a] text-lg font-medium font-[Plus_Jakarta_Sans] mb-6'>
              Social Media
            </h3>

            <div className='flex items-center'>
              <a href='https://www.facebook.com/'>
                <img
                  src='src/assets/img/icon/icon-facebook.svg'
                  alt='icon facebook'
                />
              </a>

              <a href='https://x.com/' className='mx-5'>
                <img
                  src='src/assets/img/icon/icon-twitter.svg'
                  alt='icon twitter'
                />
              </a>

              <a href='https://www.instagram.com/'>
                <img src='src/assets/img/icon/icon-ig.svg' alt='icon ig' />
              </a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
